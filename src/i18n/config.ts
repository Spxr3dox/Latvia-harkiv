export const LOCALES = ["uk", "en", "lv"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "uk";

export const LOCALE_LABELS: Record<Locale, string> = {
  uk: "УКР",
  en: "EN",
  lv: "LV",
};

export const LOCALE_NAMES: Record<Locale, string> = {
  uk: "Українська",
  en: "English",
  lv: "Latviešu",
};

export function isLocale(x: string | undefined): x is Locale {
  return !!x && (LOCALES as readonly string[]).includes(x);
}
