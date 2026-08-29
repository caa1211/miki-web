import type { Locale } from './index';

const sharedServices = {
  zh: [
    { key: 'waxing', number: '01', label: 'WAXING', title: '熱蠟除毛', description: '從清楚溝通開始，在尊重個人界線的節奏裡，安心了解每一步。' },
    { key: 'intimateCare', number: '02', label: 'INTIMATE CARE', title: '私密肌保養', description: '將私密肌當作需要溫和對待的肌膚，聚焦保濕、乾燥與觸感。' },
    { key: 'areolaCare', number: '03', label: 'AREOLA CARE', title: '乳暈美肌', description: '回到細緻肌膚保養的本質，不以單一顏色或立即改變定義美。' },
  ],
  en: [
    { key: 'waxing', number: '01', label: 'WAXING', title: 'Waxing', description: 'Begin with clear conversation, then understand each step at a pace that respects your boundaries.' },
    { key: 'intimateCare', number: '02', label: 'INTIMATE CARE', title: 'Intimate Care', description: 'Treat delicate skin as skin—with a gentle focus on hydration, dryness, and texture.' },
    { key: 'areolaCare', number: '03', label: 'AREOLA CARE', title: 'Areola Care', description: 'Return to the essentials of delicate skincare, without defining beauty by one color or instant change.' },
  ],
} as const;

export const content = {
  zh: {
    meta: { title: 'MIKI｜專業熱蠟除毛與私密肌保養', description: '專業、私密且令人安心的女性熱蠟除毛與私密肌保養。' },
    skipLink: '跳至主要內容', navLabel: '主要導覽',
    nav: { services: '服務', about: '關於我們', faq: '常見問題', booking: '預約', menu: '選單' },
    languageLabel: '選擇語言', languageNames: { zh: '中文', en: 'EN' },
    home: {
      hero: { eyebrow: 'PROFESSIONAL CARE · PRIVATE COMFORT', title: '自在，從好好照顧自己開始。', intro: '專業熱蠟除毛與私密肌保養，在舒服、私密與彼此尊重的氛圍裡，讓每一次照顧都回到自己的需要。', explore: '探索服務', imageAlt: '自然光影下的腿部肌膚細節' },
      manifesto: { eyebrow: 'CARE, WITHOUT JUDGMENT', title: '保養，不需要迎合誰的標準。', body: '照顧肌膚是很個人的事。妳可以在清楚資訊、自主選擇與被尊重的前提下，按照自己的步調了解。' },
      services: { eyebrow: 'OUR CARE', title: '每一種需要，都值得被細緻理解。', items: sharedServices.zh, link: '了解服務' },
      visual: { label: 'A QUIET MOMENT FOR YOURSELF', caption: '溫和、清楚、不評價。讓肌膚照顧成為一段可以安心放慢的時間。', alt: '淺色背景上的白色保養乳霜質地' },
      philosophy: { eyebrow: 'OUR PHILOSOPHY', title: '安心，來自被清楚對待。', intro: '專業不只是服務本身，也是在每個細節裡給予說明、空間與選擇。', values: [
        { number: 'I', title: '尊重界線', body: '隱私、感受與個人界線，都應該被認真對待。' },
        { number: 'II', title: '清楚溝通', body: '先理解流程與可以選擇的方式，再決定什麼適合自己。' },
        { number: 'III', title: '溫和照顧', body: '不追求被夸大的立即改變，回到肌膚真實的需要。' },
      ] },
      faq: { eyebrow: 'BEFORE YOUR VISIT', title: '第一次了解，可以從這些問題開始。', items: [
        { question: '第一次熱蠟除毛，需要怎麼準備？', answer: '正式的行前準備會依服務部位與工作室流程確認。預約前可先說明肌膚近況、使用產品與在意的事。' },
        { question: '熱蠟除毛會不會痛？', answer: '感受會因部位與個人狀況而不同。可以在服務前先說明擔心，並在過程中提出需要暫停或調整的時刻。' },
        { question: '什麼情況可以先了解私密肌保養？', answer: '若妳在意乾燥、觸感或日常保濕，可先了解美容保養的界線。疼痛、破皮或持續不適應先尋求適合的醫療協助。' },
      ] },
      closing: { eyebrow: 'READY WHEN YOU ARE', title: '給自己一段，舒服照顧肌膚的時間。', body: '第一次來嗎？也歡迎先聊聊妳的需要。', unavailable: '預約與諮詢方式即將提供', action: '預約保養' },
    },
    footer: '專業熱蠟除毛與私密肌保養',
  },
  en: {
    meta: { title: 'MIKI | Professional Waxing & Intimate Skincare', description: 'Professional women’s waxing and intimate skincare in a private, reassuring setting.' },
    skipLink: 'Skip to main content', navLabel: 'Primary navigation', nav: { services: 'Services', about: 'About', faq: 'FAQ', booking: 'Book', menu: 'Menu' },
    languageLabel: 'Choose language', languageNames: { zh: '中文', en: 'EN' },
    home: {
      hero: { eyebrow: 'PROFESSIONAL CARE · PRIVATE COMFORT', title: 'Care that begins with feeling at ease.', intro: 'Professional waxing and intimate skincare, approached with calm, privacy, and respect—so every moment of care can return to what you need.', explore: 'Explore services', imageAlt: 'Editorial detail of leg skin in soft natural light' },
      manifesto: { eyebrow: 'CARE, WITHOUT JUDGMENT', title: 'Care does not need to meet anyone else’s standard.', body: 'Skincare is personal. You deserve clear information, room to choose, and the freedom to understand care at your own pace—without judgment.' },
      services: { eyebrow: 'OUR CARE', title: 'Every need deserves to be understood with care.', items: sharedServices.en, link: 'Discover the service' },
      visual: { label: 'A QUIET MOMENT FOR YOURSELF', caption: 'Gentle, clear, and without judgment. A quieter way to make space for your skin.', alt: 'Close-up of white skincare cream texture on a pale surface' },
      philosophy: { eyebrow: 'OUR PHILOSOPHY', title: 'Comfort begins with being treated clearly.', intro: 'Professional care is not only the service itself. It is also the explanation, space, and choice offered at every step.', values: [
        { number: 'I', title: 'Respect boundaries', body: 'Privacy, comfort, and personal boundaries deserve thoughtful attention.' },
        { number: 'II', title: 'Communicate clearly', body: 'Understand the process and available choices before deciding what feels right.' },
        { number: 'III', title: 'Care gently', body: 'Leave exaggerated promises behind and return to what the skin genuinely needs.' },
      ] },
      faq: { eyebrow: 'BEFORE YOUR VISIT', title: 'A first conversation can begin with these questions.', items: [
        { question: 'How should I prepare for a first waxing visit?', answer: 'Preparation should reflect the service area and verified studio process. Before booking, share recent skin changes, products used, and anything you would like the practitioner to understand.' },
        { question: 'Does waxing hurt?', answer: 'Sensation varies by area and person. You can raise concerns beforehand and ask to pause or adjust at any point during care.' },
        { question: 'When might intimate skincare be worth discussing?', answer: 'If dryness, texture, or everyday hydration concerns you, you can begin by learning the boundaries of beauty care. Pain, broken skin, or persistent discomfort should receive appropriate medical guidance first.' },
      ] },
      closing: { eyebrow: 'READY WHEN YOU ARE', title: 'Make room for a quieter moment of care.', body: 'First time? You are welcome to begin with a conversation about what you need.', unavailable: 'Booking and consultation details are coming soon', action: 'Book care' },
    },
    footer: 'Professional waxing and intimate skincare',
  },
} satisfies Record<Locale, Record<string, unknown>>;
