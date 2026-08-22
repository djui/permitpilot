import {
  cantons,
  isRouteKey,
  stepOrder,
  type Answers,
  type Actor,
  type ActionItem,
  type Lang,
  type ResultModel,
  type RouteKey,
} from "./permit-engine.ts";

const LANGS = new Set<Lang>(["en", "de", "fr", "it", "rm"]);
const ACTORS = new Set<ResultModel["actor"]>(["applicant", "employer", "both", "authority"]);
const CANTON_CODES = new Set<string>(cantons.map(([code]) => code));
const ANSWER_KEYS = new Set<string>(stepOrder);
const PARAM_VALUE = /^[A-Za-z0-9]+$/u;
const PAGE_HASHES = new Set(["#history", "#legal", "#permits"]);
const MAX_SNAPSHOT_CHARS = 12_000;
const MAX_SNAPSHOT_BYTES = 8_192;

export type SharedRoute = {
  key: RouteKey;
  lang: Lang;
  answers: Answers;
};

export function isShareHash(hash: string): boolean {
  if (hash.startsWith("#d.") && hash.length > 3) return true;
  return parseReadablePath(hash) !== null;
}

export function encodeShareHash(share: SharedRoute): string {
  const params = new URLSearchParams();
  params.set("lang", share.lang);
  for (const key of answerKeys(share.answers)) {
    const value = share.answers[key];
    if (value) params.set(key, value);
  }
  const canton = share.answers.canton;
  const path = canton ? `${share.key}/${canton.toLowerCase()}` : share.key;
  return `#${path}?${params.toString()}`;
}

export async function decodeShareHash(hash: string): Promise<SharedRoute | null> {
  try {
    if (hash.startsWith("#d.")) return await decodeSnapshotHash(hash);
    return decodeReadableHash(hash);
  } catch {
    return null;
  }
}

function parseReadablePath(hash: string): { key: RouteKey; canton?: string; query: string } | null {
  if (!hash.startsWith("#") || PAGE_HASHES.has(hash)) return null;
  const raw = hash.slice(1);
  const queryIndex = raw.indexOf("?");
  const path = queryIndex === -1 ? raw : raw.slice(0, queryIndex);
  const query = queryIndex === -1 ? "" : raw.slice(queryIndex + 1);
  const segments = path.split("/");
  if (segments.length === 0 || segments.length > 2) return null;
  const [keySegment, cantonSegment] = segments;
  if (!keySegment || !isRouteKey(keySegment)) return null;
  if (cantonSegment !== undefined) {
    const canton = cantonSegment.toUpperCase();
    if (!CANTON_CODES.has(canton)) return null;
    return { key: keySegment, canton, query };
  }
  return { key: keySegment, query };
}

function decodeReadableHash(hash: string): SharedRoute | null {
  const parsed = parseReadablePath(hash);
  if (!parsed) return null;
  const params = new URLSearchParams(parsed.query);
  const lang = params.get("lang");
  if (!lang || !LANGS.has(lang as Lang)) return null;

  const answers: Answers = {};
  for (const [key, value] of params.entries()) {
    if (key === "lang") continue;
    if (!ANSWER_KEYS.has(key) || !PARAM_VALUE.test(value)) return null;
    answers[key] = value;
  }

  if (parsed.canton) {
    if (answers.canton && answers.canton.toUpperCase() !== parsed.canton) return null;
    answers.canton = parsed.canton;
  } else if (answers.canton) {
    const canton = answers.canton.toUpperCase();
    if (!CANTON_CODES.has(canton)) return null;
    answers.canton = canton;
  }

  return { key: parsed.key, lang: lang as Lang, answers };
}

function answerKeys(answers: Answers): string[] {
  const extra = Object.keys(answers).filter((key) => !ANSWER_KEYS.has(key)).sort();
  return [...stepOrder.filter((key) => key in answers), ...extra];
}

async function decodeSnapshotHash(hash: string): Promise<SharedRoute | null> {
  const payload = hash.slice(3);
  if (payload.length > MAX_SNAPSHOT_CHARS) return null;
  const bytes = base64urlToBytes(payload);
  if (!bytes || bytes.length > MAX_SNAPSHOT_BYTES) return null;
  const parsed = await bytesToJson(bytes);
  const snapshot = parseV1(parsed);
  if (!snapshot) return null;
  return { key: snapshot.key, lang: snapshot.lang, answers: snapshot.answers };
}

async function bytesToJson(bytes: Uint8Array): Promise<unknown> {
  if (typeof DecompressionStream === "function") {
    try {
      const inflated = await transformBytes(bytes, new DecompressionStream("deflate-raw"));
      if (!inflated) return null;
      return JSON.parse(new TextDecoder().decode(inflated));
    } catch {
      // Uncompressed payload, or corrupt deflate — try raw JSON next.
    }
  }
  if (bytes.length > MAX_SNAPSHOT_BYTES) return null;
  return JSON.parse(new TextDecoder().decode(bytes));
}

async function transformBytes(bytes: Uint8Array, transform: DecompressionStream): Promise<Uint8Array | null> {
  const stream = new Blob([bytes as BlobPart]).stream().pipeThrough(transform);
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > MAX_SNAPSHOT_BYTES) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  const out = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    out.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return out;
}

function base64urlToBytes(payload: string): Uint8Array | null {
  if (!payload || /[^A-Za-z0-9_-]/u.test(payload)) return null;
  const padded = payload + "=".repeat((4 - (payload.length % 4)) % 4);
  try {
    const binary = atob(padded.replaceAll("-", "+").replaceAll("_", "/"));
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
    return bytes;
  } catch {
    return null;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function asNonEmptyString(value: unknown): string | null {
  return typeof value === "string" && value.length > 0 ? value : null;
}

function asActions(value: unknown, fallbackActor: Actor): ActionItem[] | null {
  if (!Array.isArray(value)) return null;
  const items: ActionItem[] = [];
  for (const item of value) {
    if (typeof item === "string" && item.length > 0) {
      items.push({ text: item, actor: fallbackActor });
      continue;
    }
    if (!isRecord(item)) return null;
    const text = asNonEmptyString(item.text);
    const actor = asNonEmptyString(item.actor);
    if (!text || !actor || !ACTORS.has(actor as Actor)) return null;
    const when = item.when === undefined ? undefined : asNonEmptyString(item.when);
    if (item.when !== undefined && !when) return null;
    items.push(when ? { text, actor: actor as Actor, when } : { text, actor: actor as Actor });
  }
  return items;
}

function isHttpsUrl(url: string): boolean {
  try {
    return new URL(url).protocol === "https:";
  } catch {
    return false;
  }
}

function asAnswers(value: unknown): Answers | null {
  if (!isRecord(value)) return null;
  const answers: Answers = {};
  for (const [key, raw] of Object.entries(value)) {
    if (!ANSWER_KEYS.has(key) || typeof raw !== "string" || !PARAM_VALUE.test(raw)) return null;
    answers[key] = raw;
  }
  const canton = answers.canton;
  if (canton && !CANTON_CODES.has(canton.toUpperCase())) return null;
  if (canton) answers.canton = canton.toUpperCase();
  return answers;
}

function asDocItems(value: unknown): ResultModel["docs"] | null {
  if (!Array.isArray(value)) return null;
  const docs: ResultModel["docs"] = [];
  for (const item of value) {
    if (typeof item === "string" && item.length > 0) {
      docs.push({ label: item });
      continue;
    }
    if (!isRecord(item)) return null;
    const label = asNonEmptyString(item.label);
    if (!label) return null;
    const url = item.url === undefined ? undefined : asNonEmptyString(item.url);
    if (item.url !== undefined && (!url || !isHttpsUrl(url))) return null;
    docs.push(url ? { label, url } : { label });
  }
  return docs;
}

function parseV1(data: unknown): (SharedRoute & ResultModel) | null {
  if (!isRecord(data) || data.v !== 1) return null;
  if (typeof data.lang !== "string" || !LANGS.has(data.lang as Lang)) return null;
  const answers = asAnswers(data.answers);
  if (!answers) return null;

  const key = asNonEmptyString(data.key);
  const actor = asNonEmptyString(data.actor);
  const badge = asNonEmptyString(data.badge);
  const title = asNonEmptyString(data.title);
  const summary = asNonEmptyString(data.summary);
  if (!key || !isRouteKey(key) || !actor || !ACTORS.has(actor as Actor) || !badge || !title || !summary) {
    return null;
  }
  const actions = asActions(data.actions, actor as Actor);
  const docs = asDocItems(data.docs);
  if (!actions || !docs) {
    return null;
  }
  if (!Array.isArray(data.sourceLinks)) return null;

  const sourceLinks: ResultModel["sourceLinks"] = [];
  for (const link of data.sourceLinks) {
    if (!isRecord(link)) return null;
    const label = asNonEmptyString(link.label);
    const url = asNonEmptyString(link.url);
    if (!label || !url || !isHttpsUrl(url)) return null;
    sourceLinks.push({ label, url });
  }

  return {
    v: 1,
    lang: data.lang as Lang,
    answers,
    key,
    actor: actor as ResultModel["actor"],
    badge,
    title,
    summary,
    actions,
    docs,
    sourceLinks,
  } as SharedRoute & ResultModel;
}
