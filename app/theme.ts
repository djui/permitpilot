export const themeModes = ["auto", "light", "dark"] as const;
export type ThemeMode = (typeof themeModes)[number];
export type ResolvedTheme = "light" | "dark";

export const themeStorageKey = "permitpilot-theme";

export function isThemeMode(value: string | null): value is ThemeMode {
  return value === "auto" || value === "light" || value === "dark";
}

export function readThemeMode(): ThemeMode {
  try {
    const stored = localStorage.getItem(themeStorageKey);
    if (isThemeMode(stored)) return stored;
  } catch {
    /* private mode */
  }
  return "auto";
}

export function resolveTheme(mode: ThemeMode): ResolvedTheme {
  if (mode === "light" || mode === "dark") return mode;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyTheme(mode: ThemeMode) {
  const resolved = resolveTheme(mode);
  const root = document.documentElement;
  root.dataset.theme = resolved;
  root.dataset.themeMode = mode;
  root.style.colorScheme = resolved;
  try {
    localStorage.setItem(themeStorageKey, mode);
  } catch {
    /* private mode */
  }
}
