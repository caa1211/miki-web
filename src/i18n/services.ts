import type { Locale } from './index';

export type ServiceKey = 'waxing' | 'intimateCare' | 'areolaCare';

type ServiceSection = {
  eyebrow: string;
  title: string;
  body: string[];
  points?: string[];
};

type ServiceFaq = { question: string; answer: string };

export type LocalizedService = {
  meta: { title: string; description: string };
  number: string;
  label: string;
  title: string;
  lead: string;
  overview: ServiceSection;
  suitable: ServiceSection;
  process: ServiceSection;
  preparation: ServiceSection;
  aftercare: ServiceSection;
  considerations?: ServiceSection;
  faqTitle: string;
  faqs: ServiceFaq[];
  closing: { eyebrow: string; title: string; body: string };
};

type ServiceDefinition = {
  slug: string;
  variant: 'balanced' | 'offset' | 'quiet';
  image: {
    src: string;
    width: number;
    height: number;
    alt: Record<Locale, string>;
  };
  content: Record<Locale, LocalizedService>;
};

export const services: Record<ServiceKey, ServiceDefinition> = {
  waxing: {
    slug: 'waxing',
    variant: 'balanced',
    image: {
      src: 'images/services/waxing-legs.webp', width: 1600, height: 1068,
      alt: { zh: '中性灰色背景前，自然光下的腿部與足部特寫', en: 'Close-up of legs and feet in natural light against a neutral grey background' },
    },
    content: {
      zh: {
        meta: { title: '熱蠟除毛｜MIKI', description: '了解專業熱蠟除毛的基本方式、行前準備、日常照護與常見問題。' },
        number: '01', label: 'WAXING', title: '熱蠟除毛',
        lead: '以清楚溝通與尊重個人界線為起點，讓除毛成為一段可以安心了解、自在選擇的日常照顧。',
        overview: {
          eyebrow: 'ABOUT THE CARE', title: '從理解需求開始',
          body: ['熱蠟除毛會依服務部位與個人需求進行。可討論的範圍包含私密部位、腋下、手臂、腿部、臉部或其他身體部位。', '每個人的肌膚狀態、毛髮生長與在意的感受不同。正式服務範圍、流程與是否適合，應在預約或現場溝通後確認。'],
        },
        suitable: {
          eyebrow: 'IS IT FOR YOU?', title: '適合先了解的情況', body: ['如果妳希望以較有系統的方式整理毛髮，或正在考慮第一次私密處除毛，可以先從需求、部位與顧慮談起。'],
          points: ['第一次嘗試熱蠟除毛，想先了解流程', '重視服務過程中的隱私與溝通', '希望了解行前準備與日常照護', '對特定部位有需求，但尚未確定服務方式'],
        },
        process: {
          eyebrow: 'THE PROCESS', title: '服務流程', body: ['會先確認服務部位、肌膚近況與妳在意的事項，再進行必要準備與除毛；過程中會說明下一個步驟，並尊重妳提出暫停或調整的需要。', 'Mikami Studio 具澳洲 LYCON 進階認證，並採用義大利 Italwax 女性熱蠟技術；實際時間與適合度會依部位和當下狀況於 LINE 諮詢確認。'],
        },
        preparation: {
          eyebrow: 'BEFORE YOUR VISIT', title: '行前準備', body: ['預約前請先告知近期肌膚狀況、正在使用的相關保養品，或任何妳認為服務者應該知道的情形。服務部位若正有明顯不適，應先與工作室確認是否適合安排。'],
          points: ['保留足夠時間，避免匆忙赴約', '穿著讓服務部位容易整理、自己也感到自在的衣物', '不要自行假設所有部位的準備方式都相同', '若不確定毛髮長度或清潔方式，預約前先詢問'],
        },
        aftercare: {
          eyebrow: 'AFTERCARE', title: '溫和照顧服務後的肌膚', body: ['服務後的肌膚感受因人而異。先以溫和、減少摩擦的日常方式照顧，並依服務者提供、且與妳實際狀況相符的說明進行。', '若出現持續或令妳擔心的不適，不應只依賴網路資訊判斷，請尋求合適的專業協助。'],
        },
        faqTitle: '熱蠟除毛常見問題',
        faqs: [
          { question: '第一次做熱蠟除毛，該從哪裡開始？', answer: '可以先說明想處理的部位、過去經驗與最在意的問題。若還沒決定完整項目，也可以先詢問，再確認適合的安排。' },
          { question: '熱蠟除毛會痛嗎？', answer: '感受會受到部位、個人敏感度、毛髮狀態與當下狀況影響，無法保證完全沒有感覺。服務前可先討論顧慮，過程中也應能表達需要停下或調整。' },
          { question: '生理期可以安排私密處除毛嗎？', answer: '不同工作室可能有不同政策，個人舒適度與當下狀況也不同。請在預約前直接向工作室確認，不要將一般資訊視為特定工作室的服務承諾。' },
          { question: '多久需要再做一次？', answer: '毛髮生長週期與整理偏好因人而異。維持頻率應依實際狀況與服務者確認，本站目前不提供固定週期或保證性建議。' },
        ],
        closing: { eyebrow: 'READY WHEN YOU ARE', title: '先了解，再決定', body: '如果是第一次，也可以先整理妳在意的部位與問題，再透過 LINE 私密諮詢。' },
      },
      en: {
        meta: { title: 'Professional Waxing | MIKI', description: 'An introduction to professional waxing, preparation, aftercare, and common questions.' },
        number: '01', label: 'WAXING', title: 'Professional Waxing',
        lead: 'Clear communication and respect for personal boundaries can make waxing feel informed, considered, and entirely your choice.',
        overview: { eyebrow: 'ABOUT THE CARE', title: 'Begin with what you need', body: ['Waxing may cover intimate areas, underarms, arms, legs, facial areas, or other parts of the body, depending on the services available and your preferences.', 'Skin condition, hair growth, comfort, and priorities differ for everyone. The exact service, process, and suitability should be confirmed through a consultation or before treatment.'] },
        suitable: { eyebrow: 'IS IT FOR YOU?', title: 'When a conversation may help', body: ['If you are looking for a considered approach to hair removal—or exploring intimate waxing for the first time—you can begin by discussing the area, your expectations, and any concerns.'], points: ['You are new to waxing and want to understand the process', 'Privacy and communication matter to you', 'You want clear preparation and aftercare guidance', 'You have an area in mind but have not chosen a service yet'] },
        process: { eyebrow: 'THE PROCESS', title: 'What to expect', body: ['A service begins by confirming the area, your current skin condition, and anything you would like the practitioner to know. Each next step should be explained, and your request to pause or adjust should be respected.', 'Mikami Studio’s professional practice includes advanced LYCON training and women’s waxing with Italwax. Exact timing and suitability are confirmed privately for each visit.'] },
        preparation: { eyebrow: 'BEFORE YOUR VISIT', title: 'Preparing with care', body: ['Before booking, share relevant changes in your skin, products used on the area, or anything else the practitioner should know. If the area is noticeably uncomfortable, check with the studio before arranging a service.'], points: ['Allow enough time so your visit does not feel rushed', 'Choose clothing that feels comfortable and practical for the area', 'Do not assume preparation is identical for every body area', 'Ask in advance if you are unsure about hair length or cleansing'] },
        aftercare: { eyebrow: 'AFTERCARE', title: 'Keep post-service care gentle', body: ['Post-service sensations vary. A gentle routine that minimizes friction is a sensible starting point, followed by guidance that is appropriate to your actual service and circumstances.', 'If discomfort persists or concerns you, seek suitable professional advice rather than relying only on general information online.'] },
        faqTitle: 'Waxing questions',
        faqs: [
          { question: 'Where should I begin if this is my first wax?', answer: 'Start with the area you are considering, any previous experience, and what concerns you most. You can ask questions before deciding on a full service.' },
          { question: 'Does waxing hurt?', answer: 'Sensation varies with the area, individual sensitivity, hair, and your condition that day. A pain-free experience cannot be guaranteed. You should be able to voice concerns and ask to pause or adjust.' },
          { question: 'Can intimate waxing be booked during menstruation?', answer: 'Studio policies and individual comfort vary. Confirm directly with the studio before booking rather than treating general information as a service commitment.' },
          { question: 'How often should I return?', answer: 'Hair-growth cycles and personal preferences vary. Timing should be discussed for your circumstances; this site does not currently state a fixed interval or guaranteed recommendation.' },
        ],
        closing: { eyebrow: 'READY WHEN YOU ARE', title: 'Understand first. Decide in your own time.', body: 'If this is your first visit, begin with the areas and questions that matter to you, then consult privately through LINE.' },
      },
    },
  },
  intimateCare: {
    slug: 'intimate-care', variant: 'offset',
    image: {
      src: 'images/services/intimate-care-texture.webp', width: 1600, height: 2000,
      alt: { zh: '淺色背景上的白色保養乳霜質地特寫', en: 'Close-up of white skincare cream texture on a pale surface' },
    },
    content: {
      zh: {
        meta: { title: '私密肌保養｜MIKI', description: '以專業、尊重且克制的方式，了解私密肌的保濕、乾燥、觸感與日常保養。' },
        number: '02', label: 'INTIMATE CARE', title: '私密肌保養', lead: '把私密肌視為肌膚的一部分，以不評斷、不誇張的方式，溫和理解乾燥、觸感與日常保養需求。',
        overview: { eyebrow: 'ABOUT THE CARE', title: '私密保養，也可以很自然', body: ['私密肌保養著重於細緻部位的日常照顧，可從保濕、乾燥、觸感、看起來暗沉或除毛後的保養需求開始了解。', '這類服務不應建立在羞恥、身體比較或追求單一外觀標準上，也不取代醫療診斷或治療。'] },
        suitable: { eyebrow: 'IS IT FOR YOU?', title: '妳可以先談談這些需要', body: ['如果妳對細緻部位的日常保養不確定，或希望在不被評斷的情況下了解適合自己的照顧方式，可以先進行諮詢。'], points: ['在意乾燥或粗糙觸感', '想了解除毛後的溫和保養', '希望建立較簡單的日常照顧方式', '想先釐清保養服務與醫療需求的差別'] },
        process: { eyebrow: 'THE PROCESS', title: '尊重界線的服務方式', body: ['服務前會先說明照顧範圍、步驟與隱私安排，並在取得同意後進行。妳可以提出問題、表達不自在，或要求暫停。', 'Mikami Studio 採女性專屬預約服務；實際品項、時間與適合度會依當下肌膚狀況於 LINE 諮詢確認。'] },
        preparation: { eyebrow: 'BEFORE YOUR VISIT', title: '來訪前', body: ['請誠實告知目前的肌膚感受、近期除毛或保養情況，以及正在使用於該部位的產品。若有疼痛、破皮、持續搔癢或其他令人擔心的狀況，應先尋求適當的專業判斷。'], points: ['不需要為了服務追求「完美」狀態', '有任何隱私或界線需求，可在預約前提出', '不要在不確定時自行疊加刺激性產品', '服務是否適合應依當下狀況確認'] },
        aftercare: { eyebrow: 'AFTERCARE', title: '讓保養保持簡單', body: ['服務後以溫和、減少摩擦與不過度疊加產品為原則。個別產品與頻率應以實際服務內容及專業說明為準。', '肌膚外觀與觸感會受許多因素影響，不應期待單次服務帶來保證性的改變。'] },
        considerations: { eyebrow: 'A GENTLE NOTE', title: '保養不等於治療', body: ['美容保養可關注乾燥、保濕、觸感與健康外觀，但不能診斷或治療疾病。當症狀持續、加劇或讓妳擔心時，請尋求合適的醫療專業協助。'] },
        faqTitle: '私密肌保養常見問題',
        faqs: [
          { question: '私密肌保養主要在照顧什麼？', answer: '可聚焦於保濕、乾燥、觸感、看起來暗沉與日常維持。具體服務內容仍應以工作室確認後的資訊為準。' },
          { question: '除毛後可以立刻做保養嗎？', answer: '安排方式會受到除毛方法、當下肌膚感受與實際服務內容影響。請向工作室說明近期除毛狀況，再確認合適時間。' },
          { question: '保養可以處理持續不適嗎？', answer: '美容保養不取代醫療。若有持續疼痛、搔癢、破皮或其他令妳擔心的症狀，應先尋求適當的醫療協助。' },
        ],
        closing: { eyebrow: 'CARE, WITHOUT JUDGMENT', title: '照顧肌膚，不需要迎合誰的標準', body: '妳可以先透過 LINE 談談乾燥、觸感或日常保養上的困惑，再按照自己的步調決定。' },
      },
      en: {
        meta: { title: 'Intimate Care | MIKI', description: 'A professional, respectful introduction to hydration, dryness, texture, and everyday care for delicate intimate skin.' },
        number: '02', label: 'INTIMATE CARE', title: 'Intimate Care', lead: 'Intimate skin is still skin. Care can address dryness, texture, and daily comfort without judgment, exaggeration, or a prescribed beauty standard.',
        overview: { eyebrow: 'ABOUT THE CARE', title: 'Intimate care can feel entirely normal', body: ['Care for delicate intimate areas may focus on hydration, dryness, texture, dull-looking skin, or gentle post-wax maintenance.', 'It should never be rooted in shame, comparison, or a single ideal appearance. Beauty care is also not a substitute for medical diagnosis or treatment.'] },
        suitable: { eyebrow: 'IS IT FOR YOU?', title: 'Concerns you may wish to discuss', body: ['If you are unsure how to care for delicate skin—or want guidance in a setting free from judgment—a consultation can help clarify what belongs to everyday care.'], points: ['Dryness or a rough-feeling texture', 'Questions about gentle post-wax care', 'A wish for a simpler everyday routine', 'Uncertainty about the boundary between beauty care and medical needs'] },
        process: { eyebrow: 'THE PROCESS', title: 'Care that respects boundaries', body: ['The care area, steps, and privacy arrangements are explained before anything begins and care proceeds only with consent. You can ask questions, voice discomfort, or request a pause.', 'Mikami Studio works by appointment for women. Products, timing, and suitability are confirmed privately on LINE for your current skin condition.'] },
        preparation: { eyebrow: 'BEFORE YOUR VISIT', title: 'Before you arrive', body: ['Share how the skin currently feels, any recent waxing or care, and products used on the area. Pain, broken skin, persistent itching, or another worrying change should be assessed by an appropriate professional first.'], points: ['You do not need to achieve a “perfect” state before care', 'Privacy or boundary preferences can be raised in advance', 'Avoid layering potentially irritating products when unsure', 'Suitability should be confirmed from your current condition'] },
        aftercare: { eyebrow: 'AFTERCARE', title: 'Keep care uncomplicated', body: ['Favor a gentle routine, less friction, and fewer unnecessary layers after a service. Specific products and frequency should reflect the actual care provided and appropriate professional guidance.', 'Appearance and texture are influenced by many factors. A single service should not be expected to guarantee a particular change.'] },
        considerations: { eyebrow: 'A GENTLE NOTE', title: 'Skincare is not medical treatment', body: ['Beauty care may support hydration, texture, and healthy-looking skin, but it cannot diagnose or treat a condition. If symptoms persist, worsen, or concern you, seek suitable medical guidance.'] },
        faqTitle: 'Intimate-care questions',
        faqs: [
          { question: 'What does intimate skincare focus on?', answer: 'It may focus on hydration, dryness, texture, dull-looking appearance, and simple maintenance. Exact services should be confirmed with the studio.' },
          { question: 'Can care be booked immediately after waxing?', answer: 'Timing depends on the waxing method, how your skin feels, and the actual service. Tell the studio about recent waxing and confirm an appropriate time.' },
          { question: 'Can skincare address persistent discomfort?', answer: 'Beauty care does not replace medical care. Persistent pain, itching, broken skin, or another worrying symptom should be assessed by an appropriate medical professional.' },
        ],
        closing: { eyebrow: 'CARE, WITHOUT JUDGMENT', title: 'Care does not need to follow anyone else’s standard.', body: 'Begin with questions about dryness, texture, or everyday care through a private LINE consultation.' },
      },
    },
  },
  areolaCare: {
    slug: 'areola-care', variant: 'quiet',
    image: {
      src: 'images/services/areola-care-usft-soft.webp', width: 1320, height: 1108,
      alt: { zh: 'USFT 養色技術師準備專業養色精華的操作細節', en: 'Close-up of a USFT technician preparing professional color-nourishing serum' },
    },
    content: {
      zh: {
        meta: { title: '乳暈美肌｜MIKI', description: '以肌膚保養角度了解乳暈部位的保濕、乾燥、觸感與健康外觀維持。' },
        number: '03', label: 'AREOLA CARE', title: '乳暈美肌', lead: '以細緻肌膚保養的角度，關注保濕、乾燥、觸感與健康外觀，不承諾特定顏色或永久改變。',
        overview: { eyebrow: 'ABOUT THE CARE', title: '回到肌膚本身', body: ['乳暈美肌屬於細緻部位的美容保養，可從乾燥、保濕、觸感、看起來暗沉與日常維持等方向了解。', '自然膚色本來就有個人差異，也可能受到多種因素影響。服務不應將特定顏色設定為唯一正確的結果。'] },
        suitable: { eyebrow: 'IS IT FOR YOU?', title: '先釐清妳在意的是什麼', body: ['如果妳在意乾燥、觸感，或只是想了解更溫和的日常保養，可以先談需求與期待，確認美容保養能做與不能做的範圍。'], points: ['希望加強細緻部位的保濕照顧', '在意乾燥或粗糙觸感', '對看起來暗沉感到困惑，想先了解保養方向', '希望避開誇大或保證性的美白說法'] },
        process: { eyebrow: 'THE PROCESS', title: '清楚說明，取得同意', body: ['這是高度重視隱私與個人界線的服務。進行前會說明照顧範圍、步驟與隱私安排，並在取得同意後進行。', '服務由美國 FT 養色技術師提供；實際適合度、操作範圍與居家照顧會先於 LINE 私密諮詢確認。'] },
        preparation: { eyebrow: 'BEFORE YOUR VISIT', title: '來訪前的溝通', body: ['請說明近期的肌膚感受、使用產品與任何變化。若部位有疼痛、破皮、持續搔癢、分泌物或其他令人擔心的情形，請先尋求合適的醫療協助。'], points: ['不使用來源不明或宣稱快速改色的產品', '不為了赴約而過度清潔或摩擦肌膚', '任何隱私與界線需求都可以事先提出', '對服務期待有疑問時，先詢問再決定'] },
        aftercare: { eyebrow: 'AFTERCARE', title: '溫和維持，不追求立即改變', body: ['服務後的照顧應保持溫和，避免不必要的摩擦或自行混用刺激性產品。實際建議需依提供的服務與個人狀況確認。', '本站不承諾粉嫩、漂白、永久改色或立即轉變。保養語言應始終聚焦在保濕、觸感與健康外觀。'] },
        considerations: { eyebrow: 'REALISTIC CARE', title: '尊重自然差異', body: ['膚色與外觀存在自然差異。專業保養應提供清楚、克制的資訊，讓妳依自身需要做選擇，而不是製造對正常身體特徵的焦慮。'] },
        faqTitle: '乳暈美肌常見問題',
        faqs: [
          { question: '乳暈美肌等於美白或改變顏色嗎？', answer: '不是。本站將服務定位為細緻肌膚保養，著重保濕、乾燥、觸感與健康外觀，不承諾特定顏色、漂白或永久改變。' },
          { question: '一次服務就會看到明顯變化嗎？', answer: '肌膚狀態與外觀受許多因素影響，不能保證單次或特定結果。實際服務目標應在諮詢時以克制、合理的方式說明。' },
          { question: '什麼狀況不適合只做美容保養？', answer: '若有疼痛、破皮、持續搔癢、分泌物或其他令妳擔心的變化，美容服務不能取代醫療判斷，請先尋求合適的醫療協助。' },
        ],
        closing: { eyebrow: 'GENTLE, INFORMED CARE', title: '妳可以按照自己的步調了解', body: '先透過 LINE 說明在意的肌膚感受與期待，再決定是否需要保養。' },
      },
      en: {
        meta: { title: 'Areola Care | MIKI', description: 'A skincare-led approach to hydration, dryness, texture, and maintaining healthy-looking areola skin.' },
        number: '03', label: 'AREOLA CARE', title: 'Areola Care', lead: 'A skincare-led approach to hydration, dryness, texture, and healthy-looking skin—without promises of a specific color or permanent change.',
        overview: { eyebrow: 'ABOUT THE CARE', title: 'Return the focus to skin', body: ['Areola care is beauty care for delicate skin. It may focus on dryness, hydration, texture, dull-looking appearance, and simple maintenance.', 'Natural color differs from person to person and can be influenced by many factors. No single color should be presented as the only correct outcome.'] },
        suitable: { eyebrow: 'IS IT FOR YOU?', title: 'Clarify what matters to you', body: ['If dryness or texture concerns you—or you simply want to understand gentler everyday care—begin by discussing your expectations and the boundaries of a beauty service.'], points: ['You want to support hydration in a delicate area', 'Dryness or rough-feeling texture concerns you', 'You have questions about a dull-looking appearance', 'You prefer to avoid exaggerated whitening or color claims'] },
        process: { eyebrow: 'THE PROCESS', title: 'Clear explanation and consent', body: ['Privacy and personal boundaries are essential. The area, steps, and privacy arrangements are explained clearly, and care proceeds only with consent.', 'Care is provided by a US FT color-care technician. Suitability, treatment area, and home-care expectations are confirmed privately through LINE first.'] },
        preparation: { eyebrow: 'BEFORE YOUR VISIT', title: 'What to discuss beforehand', body: ['Share recent skin sensations, products used, and any changes. Pain, broken skin, persistent itching, discharge, or another worrying change should be assessed by an appropriate medical professional first.'], points: ['Avoid unverified products promising rapid color change', 'Do not over-cleanse or scrub the skin before a visit', 'Privacy and boundary preferences can be raised in advance', 'Ask questions before deciding when expectations are unclear'] },
        aftercare: { eyebrow: 'AFTERCARE', title: 'Maintain gently, without chasing immediacy', body: ['Keep care gentle and avoid unnecessary friction or combining potentially irritating products without guidance. Specific advice should reflect the actual service and your circumstances.', 'This site does not promise pinkening, bleaching, permanent color change, or instant transformation. Care language remains focused on hydration, texture, and healthy-looking skin.'] },
        considerations: { eyebrow: 'REALISTIC CARE', title: 'Respect natural variation', body: ['Skin color and appearance vary naturally. Professional care should offer clear, restrained information so that you can choose for yourself—not create anxiety around normal body features.'] },
        faqTitle: 'Areola-care questions',
        faqs: [
          { question: 'Is areola care the same as whitening or changing color?', answer: 'No. This site positions the service as care for delicate skin, focused on hydration, dryness, texture, and healthy-looking appearance. It does not promise a specific color, bleaching, or permanent change.' },
          { question: 'Will one service create a visible transformation?', answer: 'Skin condition and appearance are influenced by many factors, so a single or specific result cannot be guaranteed. Goals should be explained realistically during consultation.' },
          { question: 'When is beauty care not enough?', answer: 'Pain, broken skin, persistent itching, discharge, or another concerning change requires appropriate medical guidance. Beauty care cannot replace medical assessment.' },
        ],
        closing: { eyebrow: 'GENTLE, INFORMED CARE', title: 'Learn at your own pace.', body: 'Begin with the skin sensations and expectations that matter to you through LINE, then decide whether care feels appropriate.' },
      },
    },
  },
};

export const serviceNavigation: Record<Locale, { label: string; items: { key: ServiceKey; name: string }[] }> = {
  zh: { label: '服務項目', items: [{ key: 'waxing', name: '熱蠟除毛' }, { key: 'intimateCare', name: '私密肌保養' }, { key: 'areolaCare', name: '乳暈美肌' }] },
  en: { label: 'Services', items: [{ key: 'waxing', name: 'Waxing' }, { key: 'intimateCare', name: 'Intimate Care' }, { key: 'areolaCare', name: 'Areola Care' }] },
};
