# Product Specification

## Project

Premium Women's Waxing & Intimate Skincare Website

Status: Initial product specification

---

## Overview

This project is a modern static website for a professional women's beauty
studio specializing in waxing and intimate skincare.

Primary service categories:

- professional waxing
- Brazilian / intimate waxing
- intimate skincare
- areola skincare / brightening care
- female body care

The website is primarily a content, brand, education, and booking-conversion
website.

It is not an e-commerce platform and does not require a backend for the
initial release.

---

## Primary Goal

The primary goal is to build enough trust and comfort for a visitor to
contact the studio or book a treatment.

The website should communicate:

1. professionalism
2. privacy
3. hygiene
4. gentle care
5. respect
6. female-friendly service
7. skincare expertise
8. clear expectations before treatment

The visitor should feel:

> "I feel comfortable trusting this studio."

---

## Secondary Goals

The website should also:

- explain treatments clearly
- reduce anxiety for first-time visitors
- answer common questions
- explain preparation and aftercare
- establish a premium brand identity
- make booking easy
- provide useful search-engine-readable content
- work well on mobile devices

---

## Target Audience

Primary audience:

Women approximately 20–45 years old.

Visitors may:

- be considering waxing for the first time
- be considering Brazilian waxing
- feel nervous about intimate treatments
- care strongly about hygiene
- care strongly about privacy
- want professional intimate skincare
- have concerns about dryness or skin texture
- be concerned about dull-looking or uneven-looking skin
- want to understand the treatment before booking
- prefer discreet communication before making an appointment

The experience must never make the visitor feel judged or embarrassed.

---

## Brand Positioning

The desired positioning is:

**Editorial skincare brand  
× Boutique beauty studio  
× Private wellness experience**

The website should NOT feel like:

- a stereotypical pink beauty salon
- a medical clinic
- a cosmetic surgery website
- an adult website
- a sexual wellness store
- a generic spa template
- a generic AI-generated landing page

---

# Services

## Waxing

Professional waxing services may include:

- Brazilian / intimate waxing
- underarm
- arms
- legs
- facial areas
- other body areas

Content should explain where appropriate:

- what the treatment is
- who it may be suitable for
- preparation
- treatment process
- expected treatment duration when real information becomes available
- aftercare
- recommended maintenance
- common questions

Do not invent prices or treatment duration.

---

## Intimate Care

Professional skincare for delicate intimate areas.

Content may focus on:

- hydration
- dryness
- texture
- dull-looking skin
- post-wax skincare
- regular skin maintenance
- gentle treatment

The tone must remain professional and discreet.

---

## Areola Care

Primary navigation terminology:

**乳暈美肌**

English:

**Areola Care**

This service should be positioned as professional skincare for delicate skin.

Content may discuss:

- hydration
- dryness
- texture
- dull-looking appearance
- softness
- gentle skincare
- maintaining healthy-looking skin

Avoid exaggerated cosmetic claims.

Do not promise specific color changes or permanent results.

For SEO or explanatory content, terminology such as "乳暈粉嫩保養" may be
used carefully when appropriate, but the primary brand terminology should
remain more refined.

---

# Sitemap

Initial sitemap:

```text
/
Home

/waxing
Waxing / 熱蠟除毛

/intimate-care
Intimate Care / 私密肌保養

/areola-care
Areola Care / 乳暈美肌

/about
About / 關於我們

/faq
FAQ / 常見問題

/privacy
Privacy / 隱私權政策
```

Additional pages should only be introduced when there is a clear content or
SEO need.

---

# Navigation

Desktop navigation should remain simple.

Suggested structure:

```text
BRAND

服務
關於我們
常見問題

中文 | EN

預約
```

Services may expose:

```text
熱蠟除毛
私密肌保養
乳暈美肌
```

Mobile navigation should use a compact accessible menu.

---

# Homepage Information Architecture

The initial homepage should approximately follow this narrative.

## 1. Header

Minimal navigation.

Primary CTA:

**Book / 預約**

---

## 2. Hero

The hero should sell trust and brand positioning before individual
treatments.

Initial Chinese content direction:

> 自在，  
> 從好好照顧自己開始。

Supporting concept:

Professional waxing and intimate skincare in a comfortable, private, and
respectful environment.

Primary CTA:

> 預約保養

Secondary CTA:

> 探索服務

Avoid leading the first screen with aggressive treatment or whitening
language.

---

## 3. Brand Statement

Concept:

**Care, Without Judgment**

The section should communicate that skincare is personal and does not exist
to satisfy someone else's beauty standard.

Use generous whitespace.

This section does not necessarily require imagery.

---

## 4. Services

Introduce:

01 — Waxing  
02 — Intimate Care  
03 — Areola Care

Prefer editorial alternating image/text layouts over a generic three-card
grid.

Each service should lead to its dedicated content page.

---

## 5. Trust

Communicate the importance of:

- professionalism
- privacy
- hygiene
- personalized care

Do not invent certifications or operational procedures that have not been
provided by the business.

---

## 6. Studio / Experience

Use strong photography and concise copy to communicate:

- calm
- cleanliness
- privacy
- comfort

Actual studio photography should eventually be preferred over generic stock
photography.

---

## 7. FAQ Preview

Possible topics:

- How should I prepare for my first waxing appointment?
- Does waxing hurt?
- Can waxing be performed during menstruation?
- How often should waxing be done?
- Who may benefit from intimate skincare?

Final answers must be reviewed for factual accuracy before publication.

---

## 8. Final Booking CTA

Concept:

**Ready When You Are**

Chinese content direction:

> 給自己一段  
> 舒服照顧肌膚的時間。

The CTA should feel inviting rather than aggressive.

Supporting concept:

> 第一次來嗎？也歡迎先聊聊妳的需求。

---

# Booking

The primary conversion action is booking or contacting the studio.

Possible channels:

- LINE
- Instagram
- telephone
- external booking service

Exact business information is not yet defined.

Booking destinations must therefore be configurable rather than invented.

Suggested configuration direction:

```ts
siteConfig = {
  brandName: "",
  bookingUrl: "",
  lineUrl: "",
  instagramUrl: "",
  phone: "",
  address: ""
}
```

Do not assume all channels will eventually be used.

---

# Internationalization

Internationalization is a core requirement, not an optional enhancement.

Every future component and content structure must support both Traditional
Chinese and English.

Supported languages:

```text
zh
en
```

URL behavior:

```text
/?lang=zh
/?lang=en

/waxing?lang=zh
/waxing?lang=en

/intimate-care?lang=zh
/intimate-care?lang=en
```

Default:

```text
zh
```

If `lang` is missing or unsupported, use Traditional Chinese.

---

## Language Content Architecture

Do not create separate implementations of pages for each language.

Use a centralized content/localization layer.

Possible structure:

```text
src/
  i18n/
    zh.ts
    en.ts
    index.ts
```

or another clean equivalent proposed during implementation.

Shared localized content includes:

- navigation
- buttons
- service names
- headings
- descriptions
- FAQ
- booking CTA
- footer
- metadata
- accessibility labels

The implementation should make it difficult to accidentally create a
Chinese-only component.

---

## Language Switcher

Suggested visual treatment:

```text
中文 | EN
```

or:

```text
中 | EN
```

Do not use flags.

Switching languages must:

- remain on the same page
- preserve the current pathname
- change the `lang` query parameter
- preserve other relevant query parameters
- visibly indicate the current language
- remain keyboard accessible

Example:

```text
/waxing?lang=zh
```

becomes:

```text
/waxing?lang=en
```

---

# SEO

SEO is important because service information may attract organic search
traffic.

Each page should support:

- localized page title
- localized meta description
- canonical URL
- Open Graph metadata
- appropriate heading hierarchy
- descriptive internal links
- meaningful image alt text
- structured content

HTML language:

Traditional Chinese:

```text
zh-Hant-TW
```

English:

```text
en
```

Because language selection uses query parameters, implementation must define
a deliberate strategy for:

- canonical URLs
- alternate language URLs
- hreflang
- duplicate-content handling

Do not accidentally canonicalize both languages in a way that prevents the
English version from being indexed if language-specific indexing is desired.

Document the final SEO strategy before production launch.

---

# Content Tone

Traditional Chinese:

- natural Taiwan usage
- calm
- warm
- professional
- discreet
- not overly commercial

English:

- natural editorial English
- concise
- warm
- sophisticated
- not literal translation

Both languages should avoid:

- shame
- judgment
- sexualized language
- fear-based marketing
- exaggerated beauty promises
- medical claims without appropriate evidence

---

# Photography

Photography is a core part of the product experience.

Preferred subjects:

- natural skin texture
- shoulders
- back
- legs
- hands
- professional treatment process
- skincare products
- towels
- clean treatment environment
- natural window light
- soft shadows
- warm neutral environments

Avoid:

- lingerie photography
- sexualized poses
- explicit intimate body closeups
- exaggerated retouching
- obvious smiling stock models
- pink spa clichés
- flower petals and candle clichés

The imagery should communicate skincare and care rather than sexuality.

---

# Accessibility

Target:

**WCAG AA**

Important requirements:

- readable typography
- sufficient contrast
- keyboard navigation
- semantic HTML
- logical heading structure
- visible focus states
- accessible navigation
- appropriate touch targets
- meaningful image alternatives
- reduced-motion support
- accessible language switching

---

# Performance

The site should feel fast on mobile networks.

Prefer:

- static HTML
- optimized responsive images
- modern image formats
- lazy loading below the fold
- minimal JavaScript
- minimal third-party scripts
- sensible font loading
- minimal dependencies

Avoid sacrificing performance for decorative animation.

---

# Technology

Preferred stack:

```text
Astro
TypeScript
Tailwind CSS
minimal JavaScript
```

Rendering:

**Static generation**

Hosting:

**GitHub Pages**

Deployment:

**GitHub Actions**

No backend is required for the initial release.

---

# Deployment

Expected production workflow:

```text
Developer / Codex
       ↓
git commit
       ↓
git push main
       ↓
GitHub Actions
       ↓
Astro build
       ↓
dist/
       ↓
GitHub Pages
```

Deployment should require no manual build step after normal pushes to main.

The site should eventually support a custom domain while continuing to use
GitHub Pages for hosting.

---

# Out of Scope for Initial Release

Unless requirements change, the first release does not require:

- user accounts
- authentication
- database
- online payment
- shopping cart
- custom backend
- admin dashboard
- complex CMS
- customer portal
- appointment management backend