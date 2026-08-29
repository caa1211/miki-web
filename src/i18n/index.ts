export const locales = ['zh', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'zh';

export const htmlLang: Record<Locale, string> = { zh: 'zh-Hant-TW', en: 'en' };

export const utilityCopy: Record<Locale, { share: string; copied: string }> = {
  zh: { share: '分享此頁', copied: '連結已複製' },
  en: { share: 'Share this page', copied: 'Link copied' },
};

export function isLocale(value: string | null): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocale(value: string | null): Locale {
  return isLocale(value) ? value : defaultLocale;
}
