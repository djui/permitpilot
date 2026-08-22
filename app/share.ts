import type { Answers, Lang, ResultModel } from "./permit-engine";

const LANGS = new Set<Lang>(["en", "de", "fr", "it", "rm"]);
const ACTORS = new Set<ResultModel["actor"]>(["applicant", "employer", "both", "authority"]);

export type SharedDecisionV1 = {
  v: 1;
  lang: Lang;
  answers: Answers;
} & ResultModel;

export function isShareHash(hash: string): boolean {
  return hash.startsWith("#d.") && hash.length > 3;
}

export function snapshotFromResult(result: ResultModel, lang: Lang, answers: Answers): SharedDecisionV1 {
  return {
    v: 1,
    lang,
    answers: { ...answers },
    key: result.key,
    actor: result.actor,
    badge: result.badge,
    title: result.title,
    summary: result.summary,
    actions: result.actions,
    docs: result.docs,
    sourceLinks: result.sourceLinks,
    canton: result.canton,
    visaNote: result.visaNote,
    familyNote: result.familyNote,
    warning: result.warning,
  };
}

export function resultFromSnapshot(snapshot: SharedDecisionV1): ResultModel {
  return {
    key: snapshot.key,
    actor: snapshot.actor,
    badge: snapshot.badge,
    title: snapshot.title,
    summary: snapshot.summary,
    actions: snapshot.actions,
    docs: snapshot.docs,
    sourceLinks: snapshot.sourceLinks,
    canton: snapshot.canton,
    visaNote: snapshot.visaNote,
    familyNote: snapshot.familyNote,
    warning: snapshot.warning,
  };
}

export async function encodeShareHash(decision: SharedDecisionV1): Promise<string> {
  const bytes = new TextEncoder().encode(JSON.stringify(decision));
  let packed: Uint8Array = bytes;
  if (typeof CompressionStream === "function") {
    try {
      packed = await transformBytes(bytes, new CompressionStream("deflate-raw"));
    } catch {
      packed = bytes;
    }
  }
  return `#d.${bytesToBase64url(packed)}`;
}

export async function decodeShareHash(hash: string): Promise<SharedDecisionV1 | null> {
  try {
    if (!isShareHash(hash)) return null;
    const bytes = base64urlToBytes(hash.slice(3));
    if (!bytes) return null;
    const parsed = await bytesToJson(bytes);
    return parseV1(parsed);
  } catch {
    return null;
  }
}

async function bytesToJson(bytes: Uint8Array): Promise<unknown> {
  if (typeof DecompressionStream === "function") {
    try {
      const inflated = await transformBytes(bytes, new DecompressionStream("deflate-raw"));
      return JSON.parse(new TextDecoder().decode(inflated));
    } catch {
      // Uncompressed payload, or corrupt deflate — try raw JSON next.
    }
  }
  return JSON.parse(new TextDecoder().decode(bytes));
}

async function transformBytes(
  bytes: Uint8Array,
  transform: CompressionStream | DecompressionStream,
): Promise<Uint8Array> {
  const stream = new Blob([bytes as BlobPart]).stream().pipeThrough(transform);
  return new Uint8Array(await new Response(stream).arrayBuffer()) as Uint8Array;
}

function bytesToBase64url(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/u, "");
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

function asStringArray(value: unknown): string[] | null {
  if (!Array.isArray(value) || !value.every((item) => typeof item === "string")) return null;
  return value;
}

function parseV1(data: unknown): SharedDecisionV1 | null {
  if (!isRecord(data) || data.v !== 1) return null;
  if (typeof data.lang !== "string" || !LANGS.has(data.lang as Lang)) return null;
  if (!isRecord(data.answers) || !Object.values(data.answers).every((value) => typeof value === "string")) return null;

  const key = asNonEmptyString(data.key);
  const actor = asNonEmptyString(data.actor);
  const badge = asNonEmptyString(data.badge);
  const title = asNonEmptyString(data.title);
  const summary = asNonEmptyString(data.summary);
  const actions = asStringArray(data.actions);
  const docs = asStringArray(data.docs);
  if (!key || !actor || !ACTORS.has(actor as ResultModel["actor"]) || !badge || !title || !summary || !actions || !docs) {
    return null;
  }
  if (!Array.isArray(data.sourceLinks)) return null;

  const sourceLinks: ResultModel["sourceLinks"] = [];
  for (const link of data.sourceLinks) {
    if (!isRecord(link)) return null;
    const label = asNonEmptyString(link.label);
    const url = asNonEmptyString(link.url);
    if (!label || !url) return null;
    sourceLinks.push({ label, url });
  }

  const snapshot: SharedDecisionV1 = {
    v: 1,
    lang: data.lang as Lang,
    answers: { ...data.answers as Answers },
    key: key as ResultModel["key"],
    actor: actor as ResultModel["actor"],
    badge,
    title,
    summary,
    actions,
    docs,
    sourceLinks,
  };

  if (data.canton !== undefined) {
    if (!isRecord(data.canton)) return null;
    const code = asNonEmptyString(data.canton.code);
    const name = asNonEmptyString(data.canton.name);
    const url = asNonEmptyString(data.canton.url);
    if (!code || !name || !url) return null;
    snapshot.canton = { code, name, url };
  }

  if (data.visaNote !== undefined) {
    const visaNote = asNonEmptyString(data.visaNote);
    if (!visaNote) return null;
    snapshot.visaNote = visaNote;
  }
  if (data.familyNote !== undefined) {
    const familyNote = asNonEmptyString(data.familyNote);
    if (!familyNote) return null;
    snapshot.familyNote = familyNote;
  }
  if (data.warning !== undefined) {
    const warning = asNonEmptyString(data.warning);
    if (!warning) return null;
    snapshot.warning = warning;
  }

  return snapshot;
}
