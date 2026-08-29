import type { Locale } from './index';

export const content = {
  zh: {
    meta: { title: 'MIKI｜專業熱蠟除毛與私密肌保養', description: '專業、私密且令人安心的女性熱蠟除毛與私密肌保養。' },
    skipLink: '跳至主要內容', navLabel: '主要導覽',
    nav: { services: '服務', about: '關於我們', faq: '常見問題', booking: '預約', menu: '選單' },
    languageLabel: '選擇語言', languageNames: { zh: '中文', en: 'EN' },
    eyebrow: 'PROFESSIONAL CARE · PRIVATE COMFORT', title: '自在，從好好照顧自己開始。',
    intro: '這是網站基礎與設計方向的初始驗證頁。完整服務內容與預約資訊將在取得真實商業資料後加入。',
    status: '網站內容準備中', footer: '專業熱蠟除毛與私密肌保養',
  },
  en: {
    meta: { title: 'MIKI | Professional Waxing & Intimate Skincare', description: 'Professional women’s waxing and intimate skincare in a private, reassuring setting.' },
    skipLink: 'Skip to main content', navLabel: 'Primary navigation',
    nav: { services: 'Services', about: 'About', faq: 'FAQ', booking: 'Book', menu: 'Menu' },
    languageLabel: 'Choose language', languageNames: { zh: '中文', en: 'EN' },
    eyebrow: 'PROFESSIONAL CARE · PRIVATE COMFORT', title: 'Care that lets you feel at ease.',
    intro: 'This initial shell validates the site foundation and design direction. Full services and booking details will follow when verified business content is available.',
    status: 'Website content in progress', footer: 'Professional waxing and intimate skincare',
  },
} satisfies Record<Locale, Record<string, unknown>>;
