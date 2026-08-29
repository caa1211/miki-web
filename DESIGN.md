# Design System

Status: Active production direction

This document defines the initial visual and UX direction for the website.

Before major homepage implementation, this direction should be reviewed and refined using `ui-ux-pro-max`.

Research may improve individual decisions such as:

- typography
- color palette
- spacing
- composition
- interaction patterns
- responsive behavior
- conversion UX

However, the core brand positioning should remain intact unless there is a clear reason to change it.

---

# Design Concept

## Quiet Confidence

The visual identity should communicate that professional intimate beauty care can feel completely normal, comfortable, private, and sophisticated.

The visitor should feel:

> "I can trust this place."

rather than:

> "This website is trying hard to sell beauty treatments to me."

## Applied Art Direction: Veiled Peony

The production expression of Quiet Confidence is **Veiled Peony**: a soft, low-chroma evolution of the editorial system that feels feminine and private without becoming decorative or salon-like.

It should be recognizable through:

- powder-peony, muted rose, and deep aubergine-cocoa surfaces
- restrained serif-led hierarchy
- generous, deliberate whitespace
- editorial image crops with softly muted color and selective translucent veil treatments
- fine rules and small typographic labels
- flat, understated calls to action
- asymmetrical but calm compositions

The veil treatment belongs primarily to hero photography and occasional image-led moments. It must not sit behind body copy or reduce legibility. Luxury should come from proportion, material tone, typography, and restraint—not ornament, visual effects, or status-signaling language.

---

# Brand Attributes

Primary attributes:

- calm
- sophisticated
- feminine
- warm
- private
- professional
- respectful
- modern
- trustworthy

Secondary attributes:

- editorial
- tactile
- gentle
- refined
- confident

---

# Visual Positioning

Think:

**Editorial skincare brand  
× Boutique wellness studio  
× Modern female care**

Not:

**Traditional beauty salon**

Not:

**Medical clinic**

Not:

**Adult / sexualized content**

---

# Visual Philosophy

The design should rely primarily on:

1. typography
2. whitespace
3. photography
4. composition
5. subtle color
6. content hierarchy

Decoration should be secondary.

A section does not need a background, border, card, icon, or animation merely because it exists.

Whitespace is an intentional design element.

---

# Initial Color Direction

These colors are starting points and may be refined after UI/UX research.

## Canvas

`#F7EDEF`

Powder ivory with a restrained peony undertone.

Primary page background.

---

## Warm Surface

`#EAD8DA`

Used sparingly to create section separation.

---

## Soft Rose

`#A87981`

Primary feminine accent.

Should be restrained rather than dominant.

---

## Peony Pink

`#C98E99`

The strongest pink in the active palette. Use selectively for primary booking actions with dark cocoa text.

Do not use as normal-sized text on light surfaces.

---

## Dusty Pink

`#D3B4B8`

A secondary accent for fine rules, underlines, and decorative states.

Do not use for normal-sized text on light surfaces because it does not reach WCAG AA contrast there.

---

## Blush Surface

`#F2E2E3`

A pale pink surface used selectively for FAQ fields, hover states, and quiet section contrast.

Pair with primary or cocoa text; do not let it replace the warm neutral foundation.

---

## Deep Rose

`#69464D`

Potential interactive or stronger accent.

Contrast must be verified before use for text.

---

## Cocoa

`#5B4347`

Warm secondary dark tone.

---

## Primary Text

`#3F3033`

Primary typography.

---

## Muted Text

`#725B60`

Secondary content.

Contrast must remain accessible.

---

## Border

`#D8BFC2`

Subtle separators and controls.

---

## White

`#FFFFFF`

Used selectively rather than as the only surface.

---

# Approximate Color Balance

Target visual balance:

- 70% warm ivory / neutral
- 15% white / warm surface
- 10% dark typography
- 5% rose accent

Do not make the website predominantly pink.

Rose should feel intentional when it appears.

Soft Rose is decorative and should not be used for normal-sized text on light surfaces. Interactive text, focus indicators, and buttons must use a separately verified accessible color pairing rather than assuming an accent color is readable.

---

# Typography

Typography should carry much of the brand identity.

Before final implementation, use `ui-ux-pro-max` to research and recommend the final pairing.

---

## Display Direction

Explore sophisticated editorial serif families such as:

- Cormorant Garamond
- DM Serif Display
- similar editorial serif families

Desired qualities:

- elegant
- contemporary
- editorial
- feminine without becoming decorative
- strong at large sizes

Avoid script fonts.

Avoid stereotypical wedding-style typography.

---

## Body Direction

Explore:

- Inter
- Manrope
- Noto Sans TC
- appropriate alternatives

Traditional Chinese must remain highly readable.

A Latin display serif may be paired with a high-quality Traditional Chinese sans-serif instead of forcing matching serif typography everywhere.

### Validated Bilingual Pairing

Use typography by language and role rather than forcing one family to cover every script:

- English display: `Cormorant Garamond` or a comparable restrained editorial serif
- Traditional Chinese display: `Noto Serif TC`
- Traditional Chinese and English body: `Noto Sans TC` with an appropriate system sans-serif fallback

Limit loaded weights and prefer self-hosting before production. Until the final font assets are approved, use robust system fallbacks so typography does not block rendering.

---

# Typography Principles

Hero typography may be large and expressive.

Body typography should prioritize reading comfort.

Avoid:

- ultra-light body weights
- tiny text
- excessive uppercase
- excessive letter spacing
- decorative scripts
- too many font families

Large English editorial words may occasionally function as visual elements, but should not overwhelm the Chinese content.

---

# Layout

Initial maximum content width:

`1200–1280px`

Long-form reading width:

`640–720px`

Use generous vertical spacing.

Sections should breathe.

Desktop layouts may use asymmetry where appropriate.

Avoid making every section centered.

---

# Grid

Use a flexible responsive grid rather than rigid page templates.

Desktop may use approximately:

`12-column conceptual grid`

Tablet and mobile should simplify naturally.

Editorial image/text compositions may intentionally occupy unequal widths.

Example:

- text: 5 columns
- image: 7 columns

or the inverse.

---

# Mobile

Design mobile-first.

Mobile should not feel like a compressed desktop page.

Consider:

- shorter line lengths
- reduced hero scale
- natural image stacking
- clear booking CTA
- comfortable touch targets
- simplified navigation
- sufficient section spacing

Avoid excessive horizontal padding that leaves little room for content.

---

# Spacing

Initial spacing scale:

- 4
- 8
- 12
- 16
- 24
- 32
- 48
- 64
- 96
- 128

Not every value needs to become a formal token.

Large editorial sections should generally use generous vertical spacing.

Whitespace should communicate confidence rather than emptiness.

---

# Borders

Borders should be subtle.

Prefer:

- fine dividers
- understated input borders
- subtle section separators

Avoid:

- heavy boxes
- borders around every section
- excessive outlined cards

---

# Radius

Use restrained corner radius.

Initial direction:

- small: `6px`
- medium: `10–12px`

Large editorial images may use either subtle radius or square corners depending on the final system.

Avoid excessive `24px+` rounded containers.

Avoid turning the entire website into floating rounded rectangles.

---

# Buttons

Buttons should feel refined and confident.

Primary CTA may use:

- dark solid background
- restrained rose background if contrast permits
- simple text treatment
- subtle hover transition

Secondary CTA may use:

- text link
- understated outline
- arrow treatment

Avoid:

- oversized pill buttons
- gradients
- glowing effects
- bouncing hover effects

CTA language should feel inviting rather than aggressive.

Examples:

- 預約保養
- Book Appointment

Secondary examples:

- 探索服務 →
- Explore Services →

---

# Cards

Cards are not forbidden.

They simply should not become the default layout solution.

Use cards only when content genuinely benefits from grouping.

Service presentation should preferably use editorial image/text composition rather than a generic three-card feature grid.

---

# Navigation

Navigation should be minimal.

Desktop direction:

BRAND

服務  
關於我們  
常見問題

中文 | EN

預約 →

The booking action should be visible without dominating the entire header.

Navigation should remain calm and lightweight.

---

# Language Switcher

Preferred visual direction:

`中文 | EN`

or:

`中 | EN`

Avoid flags.

Current language should be visually apparent.

The control must remain accessible.

Do not style the language switcher like a large application toggle.

---

# Hero

The hero should establish trust before selling specific treatments.

Preferred composition:

- small editorial eyebrow
- large headline
- supporting copy
- primary CTA
- secondary CTA
- editorial photography

Desktop may use an asymmetrical text/image layout.

Avoid generic full-screen gradient hero sections.

Avoid putting multiple floating cards over the hero image.

---

# Service Presentation

Primary service groups:

## 01

WAXING  
熱蠟除毛

## 02

INTIMATE CARE  
私密肌保養

## 03

AREOLA CARE  
乳暈美肌

Prefer alternating editorial compositions.

Example:

TEXT | IMAGE

IMAGE | TEXT

TEXT | IMAGE

The number may be used as a subtle editorial element.

---

# Trust Presentation

Trust topics include:

- professionalism
- privacy
- hygiene
- personal care

Do not automatically represent these as four colorful icon cards.

Typography, spacing, rules, or a restrained grid may communicate these ideas more elegantly.

---

# Photography Direction

Photography is a major component of the brand system.

Preferred:

- natural skin texture
- shoulders
- back
- legs
- hands
- professional treatment process
- skincare products
- towels
- clean studio environment
- natural window light
- soft shadows
- warm neutral color grading
- close editorial crops
- tactile materials

The imagery should feel intimate in the sense of personal care, not sexual.

---

# Photography to Avoid

Avoid:

- lingerie photography
- sexualized poses
- explicit intimate body closeups
- provocative framing
- heavily retouched bodies
- artificial perfect skin
- obvious generic smiling stock models
- pink spa clichés
- flower petals
- candle-heavy spa imagery
- excessive marble-and-gold luxury clichés

---

# Image Composition

Prefer editorial crops.

Interesting details may include:

- hands preparing treatment materials
- folded towels
- skin in natural light
- shoulder or back silhouette
- treatment bed details
- skincare textures
- quiet studio corners

Not every image needs to contain a face.

This can improve privacy and strengthen the editorial identity.

---

# Motion

Motion should support calmness.

Allowed examples:

- opacity fade
- `8–16px` translate reveal
- subtle image reveal
- navigation underline
- restrained button hover
- very subtle parallax where justified

Typical duration:

`200–500ms`

Use natural easing.

---

# Reduced Motion

Respect:

`prefers-reduced-motion`

Core information and navigation must never depend on animation.

---

# Motion to Avoid

Avoid:

- scroll-triggered animation on every element
- cursor followers
- bouncing UI
- unnecessary 3D
- large rotating text
- aggressive parallax
- flashy page transitions
- animation that delays reading

---

# Forms

If booking/contact forms are introduced later:

Prefer:

- large readable labels
- clear field boundaries
- minimal fields
- comfortable mobile input
- clear privacy messaging

Do not use placeholder text as the only label.

---

# Accessibility

Target WCAG AA.

Design requirements:

- sufficient text contrast
- visible focus states
- readable body size
- accessible interactive states
- meaningful link treatment
- keyboard-compatible navigation
- sufficient touch targets
- semantic heading hierarchy
- reduced-motion support

Accessibility should be part of the visual system, not a later patch.

---

# Content Design

Copy should feel calm and confident.

Prefer short paragraphs and strong editorial hierarchy.

Avoid overwhelming visitors with dense treatment information on the homepage.

Detailed educational content belongs on service pages and FAQ pages.

---

# Intimate Care Visual Language

Intimate skincare should be treated as normal professional skincare.

The design should communicate:

- care
- privacy
- skin
- comfort
- professionalism

rather than:

- seduction
- sexuality
- embarrassment
- body perfection

---

# Areola Care Visual Language

Areola Care should visually belong to the same skincare system as other services.

Do not create a dramatically pink or sexualized page specifically for this service.

Preferred terminology:

- 乳暈美肌
- Areola Care

Photography should remain abstract, tasteful, and skincare-oriented.

---

# Anti-AI Template Rules

The finished website should not immediately look AI-generated.

Avoid recurring AI design clichés:

- gradient backgrounds
- purple/pink gradient buttons
- glassmorphism
- giant rounded hero containers
- floating decorative cards
- excessive icon + title + paragraph grids
- every section using three columns
- excessive pills
- excessive badges
- random blobs
- fake dashboards
- fake statistics
- invented social proof
- giant quotation marks
- meaningless decorative charts
- every section centered
- animation for the sake of animation

When uncertain, remove decoration rather than add more.

---

# Responsive Design Principles

The site should feel intentionally designed across breakpoints.

Do not treat responsive design as only stacking desktop columns vertically.

## Desktop

Use:

- editorial asymmetry
- generous whitespace
- controlled reading widths
- large imagery
- clear visual hierarchy

## Tablet

Preserve:

- hierarchy
- comfortable spacing
- image importance

Simplify complex compositions where needed.

## Mobile

Prioritize:

- readability
- booking conversion
- navigation clarity
- comfortable touch interactions
- fast loading
- concise visual rhythm

Important CTAs should remain easy to reach without creating intrusive sticky UI unless research strongly supports it.

---

# Booking UX

Booking is the primary conversion goal.

The booking experience should feel low pressure.

Prefer language such as:

- 預約保養
- Book Appointment
- 先聊聊需求
- Ask About a Treatment

Avoid aggressive conversion language such as:

- BUY NOW
- LIMITED OFFER
- ACT NOW
- LAST CHANCE

The user should feel invited rather than pushed.

---

# Homepage Rhythm

The homepage should alternate between:

- text-focused sections
- imagery
- service information
- trust-building content
- whitespace

Avoid repeating the exact same visual pattern section after section.

A desirable rhythm may resemble:

Hero  
↓  
Quiet brand statement  
↓  
Editorial service composition  
↓  
Trust section  
↓  
Large image  
↓  
FAQ  
↓  
Booking CTA

---

# Visual Density

Default to low-to-medium visual density.

Use fewer, stronger elements.

Do not try to fill empty space merely because it exists.

A premium feeling should come from restraint and composition, not from adding more UI.

---

# Iconography

Icons are optional, not required.

If used:

- keep them minimal
- use a coherent visual family
- keep stroke weight restrained
- avoid cute or decorative illustration styles

Do not use icons simply because a section contains multiple points.

Typography may be a better solution.

---

# Decorative Elements

Decorative elements should be rare.

Acceptable examples may include:

- fine rules
- subtle editorial numbering
- small typographic labels
- restrained line details

Avoid:

- floating circles
- organic blobs
- sparkles
- hearts
- flowers
- random abstract shapes
- excessive ornamental lines

---

# Content Hierarchy

Pages should communicate hierarchy clearly through:

1. page title
2. short supporting introduction
3. section headings
4. body copy
5. supporting details
6. CTA

Do not rely on color alone to communicate hierarchy.

---

# Service Page Direction

Service pages should feel editorial and educational rather than transactional.

A typical service page may contain:

1. service hero
2. short overview
3. who the service may suit
4. treatment overview
5. preparation
6. aftercare
7. relevant skincare considerations
8. FAQ
9. booking CTA

Do not force every service into exactly the same visual composition if content length differs.

Maintain system consistency while allowing editorial variation.

---

# FAQ Direction

FAQ content should prioritize reassurance and clarity.

Preferred interaction:

- accessible accordion where useful
- clear visible question text
- generous spacing
- restrained animation

Avoid making the FAQ visually busy.

The FAQ should feel educational, not defensive.

---

# Footer Direction

Footer should remain simple.

Possible content:

- brand name
- primary navigation
- booking link
- social/contact links when real information is available
- privacy policy
- language switcher if useful
- copyright

Avoid turning the footer into a giant sitemap unless content grows significantly.

---

# Bilingual Visual Design

Traditional Chinese and English have different text density and rhythm.

The design must accommodate both without breaking hierarchy.

Do not assume:

- identical line breaks
- identical text widths
- identical heading heights
- identical paragraph lengths

English should not be treated as a secondary afterthought.

Traditional Chinese should not be squeezed merely to match an English composition.

Layouts should tolerate content expansion and contraction gracefully.

---

# SEO-Friendly Design

Visual design should not undermine semantic structure.

Prefer:

- real text over text embedded in images
- semantic headings
- descriptive links
- crawlable service content
- meaningful image alt text
- structured page hierarchy

Do not hide essential content behind interaction-only UI.

---

# Performance-Aware Design

Design choices should respect static-site performance goals.

Prefer:

- optimized images
- responsive image sizes
- limited font weights
- minimal JavaScript
- CSS-based effects
- restrained animation

Avoid design concepts that require heavy animation libraries or large client-side bundles without clear benefit.

---

# Design Review Task

Before implementing the final homepage design, use `ui-ux-pro-max` to review:

1. visual style
2. color palette
3. typography pairing
4. landing page composition
5. beauty and wellness UX patterns
6. responsive behavior
7. accessibility
8. conversion UX
9. bilingual typography
10. mobile booking behavior

The research should answer:

- Does "Quiet Confidence" fit this audience?
- Should the initial palette be adjusted?
- What typography pairing best supports English and Traditional Chinese?
- Which editorial layout patterns fit the content?
- How can the site feel feminine without relying on pink clichés?
- How can intimate skincare feel professional and comfortable?
- How should mobile booking conversion work?
- How should bilingual layouts handle different text lengths?
- Which patterns should be explicitly avoided for this brand?

Update this document with justified improvements before major homepage implementation.

Do not change the core brand positioning merely to follow a design trend.

---

# Final Design Principle

When choosing between:

**more decoration**

and

**better typography, photography, spacing, and hierarchy**

choose the latter.
