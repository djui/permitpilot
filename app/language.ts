import { languages, type Lang } from "./permit-engine";

export const langStorageKey = "permitpilot-lang";

const langCodes = new Set<string>(languages.map((item) => item.code));

export function isLang(value: string | null | undefined): value is Lang {
  return typeof value === "string" && langCodes.has(value);
}

export function readLang(): Lang {
  try {
    const stored = localStorage.getItem(langStorageKey);
    if (isLang(stored)) return stored;
  } catch {
    /* private mode */
  }
  const prefix = navigator.language.slice(0, 2).toLowerCase();
  return isLang(prefix) ? prefix : "en";
}

export function persistLang(lang: Lang) {
  try {
    localStorage.setItem(langStorageKey, lang);
  } catch {
    /* private mode */
  }
}
