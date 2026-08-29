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
    meta: { title: 'Mikami Studio｜女性專屬私密美肌專門', description: '新竹女性專屬熱蠟除毛、私密肌保養與乳暈美肌工作室。' },
    skipLink: '跳至主要內容', navLabel: '主要導覽',
    nav: { services: '服務', about: '關於我們', faq: '常見問題', privacy: '隱私說明', booking: '預約', menu: '選單' },
    languageLabel: '選擇語言', languageNames: { zh: '中文', en: 'EN' },
    home: {
      hero: { eyebrow: 'MIKAMI STUDIO · HSINCHU', title: '自在，從好好照顧自己開始。', intro: '女性專屬熱蠟除毛與私密美肌專門。在舒服、私密與彼此尊重的氛圍裡，讓每一次照顧都回到自己的需要。', explore: '探索服務', book: 'LINE 預約諮詢', imageAlt: '暖色自然光下手持保養品的女性肌膚形象' },
      manifesto: { eyebrow: 'CARE, WITHOUT JUDGMENT', title: '保養，不需要迎合誰的標準。', body: '照顧肌膚是很個人的事。妳可以在清楚資訊、自主選擇與被尊重的前提下，按照自己的步調了解。' },
      services: { eyebrow: 'OUR CARE', title: '每一種需要，都值得被細緻理解。', items: sharedServices.zh, link: '了解服務' },
      visual: { label: 'A QUIET MOMENT FOR YOURSELF', caption: '溫和、清楚、不評價。讓肌膚照顧成為一段可以安心放慢的時間。', alt: '淺色背景上的白色保養乳霜質地' },
      philosophy: { eyebrow: 'OUR PHILOSOPHY', title: '安心，來自被清楚對待。', intro: '專業不只是服務本身，也是在每個細節裡給予說明、空間與選擇。', values: [
        { number: 'I', title: '尊重界線', body: '隱私、感受與個人界線，都應該被認真對待。' },
        { number: 'II', title: '清楚溝通', body: '先理解流程與可以選擇的方式，再決定什麼適合自己。' },
        { number: 'III', title: '溫和照顧', body: '不追求被夸大的立即改變，回到肌膚真實的需要。' },
      ] },
      expertise: { eyebrow: 'PROFESSIONAL PRACTICE', title: '持續精進，是對每一寸肌膚的尊重。', intro: '以國際專業品牌與技術訓練為基礎，將熱蠟、美肌與養色照顧放在清楚溝通與女性隱私之中。', items: [
        { label: 'AUSTRALIA', title: 'LYCON 進階認證', body: '澳洲專業熱蠟品牌進階技術訓練。', key: 'lycon' },
        { label: 'ITALY', title: 'Italwax 女性熱蠟', body: '義大利專業除毛品牌女性熱蠟技術。', key: 'italwax' },
        { label: 'UNITED STATES', title: 'FT 養色技術師', body: '美國 FT 養色技術專業訓練。', key: 'usft' },
      ] },
      faq: { eyebrow: 'BEFORE YOUR VISIT', title: '第一次了解，可以從這些問題開始。', items: [
        { question: '第一次熱蠟除毛，需要怎麼準備？', answer: '正式的行前準備會依服務部位與工作室流程確認。預約前可先說明肌膚近況、使用產品與在意的事。' },
        { question: '熱蠟除毛會不會痛？', answer: '感受會因部位與個人狀況而不同。可以在服務前先說明擔心，並在過程中提出需要暫停或調整的時刻。' },
        { question: '什麼情況可以先了解私密肌保養？', answer: '若妳在意乾燥、觸感或日常保濕，可先了解美容保養的界線。疼痛、破皮或持續不適應先尋求適合的醫療協助。' },
      ] },
      closing: { eyebrow: 'READY WHEN YOU ARE', title: '給自己一段，舒服照顧肌膚的時間。', body: '第一次來嗎？歡迎先透過 LINE 聊聊妳的需要。', unavailable: '預約與諮詢方式即將提供', action: 'LINE 預約諮詢', imageAlt: '暖色自然光下的女性肌膚與保養品形象' },
    },
    footer: '專業熱蠟除毛與私密肌保養',
  },
  en: {
    meta: { title: 'Mikami Studio | Women’s Waxing & Intimate Skincare', description: 'A women-only waxing and intimate skincare studio in Hsinchu.' },
    skipLink: 'Skip to main content', navLabel: 'Primary navigation', nav: { services: 'Services', about: 'About', faq: 'FAQ', privacy: 'Privacy', booking: 'Book', menu: 'Menu' },
    languageLabel: 'Choose language', languageNames: { zh: '中文', en: 'EN' },
    home: {
      hero: { eyebrow: 'MIKAMI STUDIO · HSINCHU', title: 'Care that begins with feeling at ease.', intro: 'A women-only studio for professional waxing and intimate skincare, approached with calm, privacy, and respect.', explore: 'Explore services', book: 'Consult on LINE', imageAlt: 'Woman holding skincare in warm, natural light' },
      manifesto: { eyebrow: 'CARE, WITHOUT JUDGMENT', title: 'Care does not need to meet anyone else’s standard.', body: 'Skincare is personal. You deserve clear information, room to choose, and the freedom to understand care at your own pace—without judgment.' },
      services: { eyebrow: 'OUR CARE', title: 'Every need deserves to be understood with care.', items: sharedServices.en, link: 'Discover the service' },
      visual: { label: 'A QUIET MOMENT FOR YOURSELF', caption: 'Gentle, clear, and without judgment. A quieter way to make space for your skin.', alt: 'Close-up of white skincare cream texture on a pale surface' },
      philosophy: { eyebrow: 'OUR PHILOSOPHY', title: 'Comfort begins with being treated clearly.', intro: 'Professional care is not only the service itself. It is also the explanation, space, and choice offered at every step.', values: [
        { number: 'I', title: 'Respect boundaries', body: 'Privacy, comfort, and personal boundaries deserve thoughtful attention.' },
        { number: 'II', title: 'Communicate clearly', body: 'Understand the process and available choices before deciding what feels right.' },
        { number: 'III', title: 'Care gently', body: 'Leave exaggerated promises behind and return to what the skin genuinely needs.' },
      ] },
      expertise: { eyebrow: 'PROFESSIONAL PRACTICE', title: 'Continual training is part of caring well.', intro: 'International professional brands and technical education support an approach grounded in clear communication, privacy, and respect for women’s skin.', items: [
        { label: 'AUSTRALIA', title: 'Advanced LYCON certification', body: 'Advanced training with the Australian professional waxing brand.', key: 'lycon' },
        { label: 'ITALY', title: 'Italwax women’s waxing', body: 'Women’s waxing technique using the Italian professional depilatory brand.', key: 'italwax' },
        { label: 'UNITED STATES', title: 'FT color-care technician', body: 'Professional training in the US FT color-care technique.', key: 'usft' },
      ] },
      faq: { eyebrow: 'BEFORE YOUR VISIT', title: 'A first conversation can begin with these questions.', items: [
        { question: 'How should I prepare for a first waxing visit?', answer: 'Preparation should reflect the service area and verified studio process. Before booking, share recent skin changes, products used, and anything you would like the practitioner to understand.' },
        { question: 'Does waxing hurt?', answer: 'Sensation varies by area and person. You can raise concerns beforehand and ask to pause or adjust at any point during care.' },
        { question: 'When might intimate skincare be worth discussing?', answer: 'If dryness, texture, or everyday hydration concerns you, you can begin by learning the boundaries of beauty care. Pain, broken skin, or persistent discomfort should receive appropriate medical guidance first.' },
      ] },
      closing: { eyebrow: 'READY WHEN YOU ARE', title: 'Make room for a quieter moment of care.', body: 'First time? Begin with a private conversation on LINE about what you need.', unavailable: 'Booking and consultation details are coming soon', action: 'Consult on LINE', imageAlt: 'Woman and skincare in warm natural light' },
    },
    footer: 'Professional waxing and intimate skincare',
  },
} satisfies Record<Locale, Record<string, unknown>>;
