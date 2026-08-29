import type { Locale } from './index';

type EditorialPage = {
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  lead: string;
};

export const aboutContent: Record<Locale, EditorialPage & {
  philosophy: { eyebrow: string; title: string; body: string[] };
  values: { number: string; title: string; body: string }[];
  experience: { eyebrow: string; title: string; body: string[] };
  closing: { eyebrow: string; title: string; body: string; action: string };
  alts: { hero: string; detail: string; still: string };
}> = {
  zh: {
    meta: { title: '關於 Mikami Studio｜女性專屬私密美肌專門', description: '認識 Mikami Studio 對女性熱蠟除毛與私密肌保養的理念：專業、私密、尊重，讓照顧從理解開始。' },
    eyebrow: 'ABOUT MIKAMI', title: '讓照顧，回到妳自己的感受',
    lead: 'Mikami Studio 專注於女性熱蠟除毛與私密肌保養。這裡不以焦慮推動選擇，而是先理解需求、說明界線，讓每一次決定都保有自己的節奏。',
    philosophy: { eyebrow: 'CARE WITHOUT JUDGMENT', title: '身體不需要被評分，照顧也不必來自壓力', body: ['私密肌仍然是肌膚的一部分。乾燥、觸感與日常舒適，都可以用平常而尊重的方式談論。', '我們相信專業不只在技術，也在於清楚說明、保留隱私，並尊重每個人說「先等等」或「不需要」的權利。'] },
    values: [
      { number: '01', title: '清楚，而不誇張', body: '以實際可理解的方式說明服務，不承諾特定膚色、永久改變或保證結果。' },
      { number: '02', title: '私密，而不疏離', body: '讓敏感的問題可以安心提出，同時保留妳希望維持的個人界線。' },
      { number: '03', title: '溫和，而有專業', body: '從肌膚近況與真實需求出發，先溝通，再選擇適合的照顧方式。' },
    ],
    experience: { eyebrow: 'THE EXPERIENCE', title: '先理解，再開始', body: ['預約前可以先透過 LINE 說明想了解的項目、肌膚近況與在意的感受。若還沒有決定，也可以只從問題開始。', '服務安排與適合度會依實際狀況確認；若有持續疼痛、搔癢、破皮或其他令人擔心的變化，美容保養不能取代醫療評估。'] },
    closing: { eyebrow: 'AT YOUR OWN PACE', title: '準備好時，再靠近一點', body: '把妳在意的事情告訴我們，從一段不帶評斷的私密諮詢開始。', action: 'LINE 預約諮詢' },
    alts: { hero: '自然光下的女性肌膚與保養畫面', detail: '雙手以滴管進行溫和肌膚保養', still: '中性色調的肌膚保養用品靜物' },
  },
  en: {
    meta: { title: 'About Mikami Studio | Women’s Intimate Skincare', description: 'Discover Mikami Studio’s considered approach to women’s waxing and intimate skincare: professional, private, respectful care.' },
    eyebrow: 'ABOUT MIKAMI', title: 'Care that begins with how you feel',
    lead: 'Mikami Studio focuses on women’s waxing and intimate skincare. Choices are not driven by insecurity here. We begin with what you need, explain boundaries clearly, and leave room for your own pace.',
    philosophy: { eyebrow: 'CARE WITHOUT JUDGMENT', title: 'Your body is not a standard to be scored against.', body: ['Intimate skin is still skin. Dryness, texture, and everyday comfort can be discussed with the same ease and respect as any other skincare concern.', 'Professional care is not only technical. It means clear explanations, privacy, and the freedom to pause, reconsider, or decide a service is not for you.'] },
    values: [
      { number: '01', title: 'Clear, never exaggerated', body: 'Services are explained in practical language, without promises of a particular color, permanent change, or guaranteed result.' },
      { number: '02', title: 'Private, never distant', body: 'Sensitive questions are welcome, while your personal boundaries remain yours to define.' },
      { number: '03', title: 'Gentle, with intention', body: 'Care begins with your current skin condition and real priorities—conversation first, then an informed choice.' },
    ],
    experience: { eyebrow: 'THE EXPERIENCE', title: 'Understand first. Begin when ready.', body: ['Before booking, you can use LINE to share the service you are considering, your current skin condition, and any concerns. You do not need to arrive with every decision made.', 'Services and suitability are confirmed around your circumstances. Persistent pain, itching, broken skin, or another worrying change requires appropriate medical guidance; beauty care cannot replace an assessment.'] },
    closing: { eyebrow: 'AT YOUR OWN PACE', title: 'Come closer when it feels right.', body: 'Tell us what matters to you and begin with a private, judgment-free conversation.', action: 'Consult on LINE' },
    alts: { hero: 'Woman and skincare in soft natural light', detail: 'Hands applying gentle skincare with a dropper', still: 'Skincare products arranged in a restrained neutral still life' },
  },
};

export const faqPageContent: Record<Locale, EditorialPage & {
  groupLabel: string;
  before: { title: string; items: { question: string; answer: string }[] };
  after: { title: string; items: { question: string; answer: string }[] };
  contact: string;
}> = {
  zh: {
    meta: { title: '常見問題｜Mikami Studio', description: '熱蠟除毛、私密肌保養、乳暈美肌、行前準備與服務後照護的常見問題。' },
    eyebrow: 'QUESTIONS, ANSWERED', title: '先理解，再安心決定', lead: '從服務方式、行前準備到日常照護，整理妳可能想先知道的事。每個人的狀況不同，這些內容不能取代預約前的個別確認。', groupLabel: '問題分類',
    before: { title: '行前準備', items: [
      { question: '預約前需要先說明什麼？', answer: '可以先說明想了解的部位、近期肌膚狀況、正在使用的相關保養品，以及任何隱私或界線上的需要。' },
      { question: '不確定自己適不適合，也可以詢問嗎？', answer: '可以。先透過 LINE 描述妳的情況與顧慮，再確認是否適合安排；不需要在詢問前就決定完整服務。' },
    ] },
    after: { title: '服務後照護', items: [
      { question: '服務後日常照護的原則是什麼？', answer: '先以溫和、減少摩擦的方式照顧，並依當次服務與實際狀況採用個別說明。不要自行疊加可能刺激的產品。' },
      { question: '什麼情況不應只依賴美容保養？', answer: '若有持續疼痛、搔癢、破皮、分泌物或其他令人擔心的變化，請尋求合適的醫療專業協助。' },
    ] },
    contact: '仍有自己的問題？可以先透過 LINE 私密詢問。',
  },
  en: {
    meta: { title: 'Frequently Asked Questions | Mikami Studio', description: 'Common questions about waxing, intimate care, areola care, preparation, and aftercare at Mikami Studio.' },
    eyebrow: 'QUESTIONS, ANSWERED', title: 'Understand first. Decide with ease.', lead: 'A considered guide to services, preparation, and everyday aftercare. Everyone’s circumstances differ, so this information does not replace a personal conversation before booking.', groupLabel: 'Question categories',
    before: { title: 'Before Treatment', items: [
      { question: 'What should I mention before booking?', answer: 'Share the area or service you are considering, recent skin changes, relevant products you use, and any privacy or boundary preferences.' },
      { question: 'Can I ask if I am unsure a service is suitable?', answer: 'Yes. Describe your situation and concerns through LINE first. You do not need to choose a complete service before asking.' },
    ] },
    after: { title: 'Aftercare', items: [
      { question: 'What is the general approach to aftercare?', answer: 'Keep care gentle, reduce unnecessary friction, and follow guidance relevant to the actual service and your skin. Avoid layering potentially irritating products without advice.' },
      { question: 'When is beauty care not enough?', answer: 'Persistent pain, itching, broken skin, discharge, or another worrying change should be assessed by an appropriate medical professional.' },
    ] },
    contact: 'Still have a question of your own? Begin with a private conversation on LINE.',
  },
};

export const privacyContent: Record<Locale, EditorialPage & { updated: string; sections: { title: string; paragraphs: string[]; items?: string[] }[]; contactTitle: string }> = {
  zh: {
    meta: { title: '隱私說明｜Mikami Studio', description: 'Mikami Studio 網站的隱私與外部服務說明。' }, eyebrow: 'PRIVACY', title: '清楚說明，保留妳的選擇', lead: '這份說明反映本網站目前的實際運作方式。網站為靜態資訊頁面，不提供會員帳號、站內表單或線上付款。', updated: '更新日期：2026 年 8 月 29 日',
    sections: [
      { title: '本網站如何運作', paragraphs: ['本網站以 Astro 建置，並透過 GitHub Pages 提供靜態頁面。網站目前沒有自行設定分析追蹤、廣告追蹤或行銷 cookie。'], items: ['語言參數（例如 ?lang=en）只由瀏覽器用來顯示對應內容，本網站不將語言偏好存入帳號或瀏覽器儲存空間。', '如同一般網站託管服務，GitHub 可能為安全與服務運作處理基本技術請求資料；相關方式依 GitHub 的政策為準。'] },
      { title: '聯絡、預約與外部連結', paragraphs: ['點選 LINE、電話或社群連結時，妳會離開本網站或啟用外部應用程式。妳在外部服務提供的資料，將依該服務的隱私政策與妳和工作室之間的實際溝通處理。'], items: ['本網站本身不接收或儲存 LINE 對話內容。', '外部品牌、認證與社群網站擁有各自的內容與隱私政策。'] },
      { title: '健康與敏感資訊', paragraphs: ['若妳主動透過外部聯絡管道提供肌膚狀況或其他敏感資訊，請只提供預約與服務評估所必要的內容。美容諮詢不能取代醫療診斷。'] },
      { title: '政策變更', paragraphs: ['若未來加入表單、分析工具、付款或其他會改變資料處理方式的功能，本頁會一併更新。'] },
    ], contactTitle: '隱私相關聯絡',
  },
  en: {
    meta: { title: 'Privacy | Mikami Studio', description: 'How the Mikami Studio website handles privacy and links to external services.' }, eyebrow: 'PRIVACY', title: 'Clarity, with your choices intact.', lead: 'This notice reflects how the website currently works. It is a static information site with no member accounts, on-site forms, or online payment.', updated: 'Last updated: 29 August 2026',
    sections: [
      { title: 'How this website works', paragraphs: ['This Astro website is delivered as static pages through GitHub Pages. It currently does not set its own analytics, advertising trackers, or marketing cookies.'], items: ['The language parameter (such as ?lang=en) is read by your browser only to display the selected language. The site does not save that preference to an account or browser storage.', 'As with ordinary website hosting, GitHub may process basic technical request data for security and service operation under its own policies.'] },
      { title: 'Contact, booking, and external links', paragraphs: ['Selecting LINE, telephone, or social links takes you away from this website or opens an external application. Information you provide there is handled under that service’s privacy terms and the actual communication between you and the studio.'], items: ['This website itself does not receive or store the contents of LINE conversations.', 'External brand, credential, and social websites have their own content and privacy policies.'] },
      { title: 'Health and sensitive information', paragraphs: ['If you choose to share skin concerns or other sensitive information through an external contact channel, provide only what is necessary for booking and service suitability. A beauty consultation is not a medical diagnosis.'] },
      { title: 'Changes to this notice', paragraphs: ['If forms, analytics, payments, or another feature changes how data is handled in the future, this page will be updated accordingly.'] },
    ], contactTitle: 'Privacy contact',
  },
};
