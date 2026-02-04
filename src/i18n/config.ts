export const locales = ['en', 'es', 'fr', 'de', 'pt', 'zh', 'ja', 'ko', 'ar', 'hi', 'ms', 'id', 'th', 'vi'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
  ar: 'العربية',
  hi: 'हिन्दी',
  ms: 'Bahasa Melayu',
  id: 'Bahasa Indonesia',
  th: 'ไทย',
  vi: 'Tiếng Việt',
};

export const localeCodes: Record<Locale, string> = {
  en: 'ENG',
  es: 'ESP',
  fr: 'FRA',
  de: 'DEU',
  pt: 'POR',
  zh: 'CHN',
  ja: 'JAP',
  ko: 'KOR',
  ar: 'ARA',
  hi: 'IND',
  ms: 'MYS',
  id: 'IDN',
  th: 'THA',
  vi: 'VNM',
};
