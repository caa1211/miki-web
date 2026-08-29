# Project Instructions

This repository contains a premium women's waxing and intimate skincare
studio website.

Before making product, content, UI, or UX changes, always read:

- `PRODUCT.md`
- `DESIGN.md`

These documents are the source of truth for product and design decisions.

---

## Product Principles

This website represents a professional women's beauty and skincare studio
specializing in waxing and intimate skincare.

The experience should feel:

- professional
- feminine
- calm
- private
- sophisticated
- warm
- trustworthy
- respectful

The website should feel closer to a modern editorial skincare brand or
boutique wellness studio than a traditional beauty salon.

Privacy, professionalism, hygiene, comfort, and trust are core themes.

The website should normalize intimate skincare rather than sexualize it.

---

## UI / UX

For significant UI or UX design work, use the `ui-ux-pro-max` skill.

Before implementing a major new page or visual system:

1. Read `PRODUCT.md`.
2. Read `DESIGN.md`.
3. Use `ui-ux-pro-max` when design research or UX decisions are needed.
4. Follow the established design system.

Do not casually replace the established design direction with a different
style.

If research suggests a meaningful improvement, explain the reasoning before
making a major change to `DESIGN.md`.

---

## Avoid Generic AI Design

Do not introduce generic AI-generated landing page patterns such as:

- excessive rounded cards
- three-card grids everywhere
- giant rounded containers
- glassmorphism
- unnecessary gradients
- decorative blobs
- excessive badges
- excessive icons
- fake statistics
- meaningless testimonials
- excessive centered sections
- excessive animations
- flashy cursor effects

Do not put every piece of content inside a card.

Prefer strong typography, photography, composition, spacing, and hierarchy
over decorative UI.

---

## Business Information

Never invent:

- prices
- addresses
- phone numbers
- LINE accounts
- Instagram accounts
- staff names
- staff qualifications
- certifications
- years of experience
- customer counts
- testimonials
- reviews
- statistics
- treatment results
- medical claims

When real business information is unavailable, use clearly named content or
configuration placeholders.

Never present placeholder information as fact.

---

## Health and Beauty Claims

Use restrained professional skincare language.

Do not make medical or guaranteed cosmetic claims.

Avoid language such as:

- guaranteed whitening
- permanent whitening
- guaranteed pink
- instant transformation
- restoring teenage color
- guaranteed results

Prefer language related to:

- hydration
- texture
- dryness
- dull-looking skin
- gentle care
- maintaining soft skin
- healthy-looking skin
- appearance and skincare

---

## Internationalization

Traditional Chinese and English are core product requirements.

Supported languages:

- `zh` — Traditional Chinese for Taiwan
- `en` — English

Language selection uses the URL query parameter:

- `?lang=zh`
- `?lang=en`

Traditional Chinese is the default language.

If `lang` is absent or unsupported, fall back to Traditional Chinese.

Examples:

- `/?lang=zh`
- `/?lang=en`
- `/waxing?lang=zh`
- `/waxing?lang=en`

Do not duplicate entire page implementations for each language.

Do not hardcode user-facing copy inside reusable UI components when the
content belongs in the localization/content layer.

English content should read like natural editorial English rather than a
literal translation of Chinese.

Traditional Chinese content should be natural for a Taiwan audience.

The language switcher must preserve the current pathname and relevant query
parameters while changing only the language parameter.

Do not use national flags as language selectors.

---

## Technology

Preferred stack:

- Astro
- TypeScript
- Tailwind CSS
- minimal client-side JavaScript

Do not introduce React unless there is a clear technical reason.

Prefer native HTML, CSS, Astro, and browser APIs where appropriate.

Keep dependencies minimal.

Before adding a dependency, consider whether the existing stack can solve
the problem cleanly.

---

## Static Hosting Constraint

The production website must work on GitHub Pages as a static website.

Do not introduce:

- server-side rendering requirements
- runtime middleware
- server-only localization
- databases
- authentication
- backend APIs
- runtime server dependencies

unless explicitly requested.

The language system must work with static hosting.

---

## Engineering Principles

Prefer:

- semantic HTML
- accessible markup
- mobile-first responsive design
- reusable components
- clear content separation
- good Core Web Vitals
- optimized images
- minimal JavaScript
- SEO-friendly markup
- maintainable TypeScript
- simple architecture

Avoid premature abstraction.

This is primarily a content and brand website, not a web application.

---

## Accessibility

Target WCAG AA.

Requirements include:

- sufficient contrast
- semantic HTML
- logical heading hierarchy
- keyboard navigation
- visible focus states
- appropriate touch targets
- meaningful alt text
- reduced-motion support
- accessible navigation
- accessible language switcher

The root HTML `lang` attribute must reflect the active language.

---

## Deployment

Production hosting:

GitHub Pages.

Deployment:

GitHub Actions.

The intended workflow is:

`push to main -> build -> deploy to GitHub Pages`

The production build must remain fully compatible with static hosting.

---

## Working Style

Do not implement large amounts of UI before understanding the relevant
product and design requirements.

For major work:

1. inspect the existing implementation
2. read the relevant project documentation
3. understand the design system
4. make the smallest coherent implementation
5. verify responsive behavior
6. verify accessibility
7. verify both languages
8. verify the static production build

Do not redesign unrelated parts of the website while implementing a focused
task.


## Client-side JavaScript

Client-side JavaScript is allowed.

Use JavaScript when it meaningfully improves:

- language switching
- navigation
- sharing
- interaction
- motion
- visual polish
- progressive enhancement

Prefer lightweight, focused JavaScript.

Do not avoid JavaScript purely for the sake of achieving a zero-JS bundle.

Avoid unnecessary SPA architecture, large client-side frameworks,
or heavy dependencies when simpler browser APIs are sufficient.

React is not forbidden, but should only be introduced when there is a clear
benefit over Astro and native browser APIs.