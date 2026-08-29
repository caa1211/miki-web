# Replaceable Image Inventory

Marketing photography lives in `public/images/` so it can be replaced without editing Astro components. Keep filenames stable and replace an image with the same or larger dimensions.

| File | Page / section | Visual role | Ratio | Minimum size | Subject and crop |
| --- | --- | --- | --- | --- | --- |
| `home/hero-campaign.jpg` | Home hero | Campaign portrait | 1:1 source; displayed as a tall editorial crop | 1200 × 1200 recommended | Woman, natural skin and skincare in warm window light. Keep face and product inside the centre 70%; mobile crops vertically. |
| `home/closing-skin.jpg` | Home closing; intimate-care editorial break | Closing skin campaign / body detail | 3:2 source; displayed tall on home | 1800 × 1200 | Natural shoulder and skin in soft light. Homepage crops near the centre-right; service page uses a wide crop. |
| `shared/skincare-products.jpg` | Home visual break | Product / treatment detail | 3:2 | 1600 × 1067 | Neutral skincare products or real treatment preparation. Displayed as a wide, near-full-bleed visual break. |
| `shared/serum-hands.jpg` | Home philosophy detail; waxing editorial break | Treatment / aftercare detail | 3:2 source; displayed 3:4 or 16:9 | 1800 × 1200 | Hands applying serum in soft light. Keep the dropper and hands inside the central two-thirds. |
| `services/waxing-legs.webp` | Waxing and home service 01 | Body / skin detail | 3:2 source | 1600 × 1067 | Natural leg skin in quiet light. Preserve legs within the middle two-thirds. |
| `services/intimate-care-texture.webp` | Intimate care and home service 02 | Skincare texture | 4:5 | 1600 × 2000 | Abstract cream or tactile skincare texture; no explicit body imagery. |
| `services/areola-care-usft-soft.webp` | Areola care hero and home service 03 | USFT serum preparation | 330:277 | 1320 × 1108 | Official USFT close-up of serum preparation. Preserve the hands, bottle, and dropper around the centre. |
| `services/areola-care-usft.webp` | Unused fallback | USFT materials archive | 512:339 | 1024 × 678 | Official USFT color models and professional materials. Kept as a fallback and not currently loaded. |
| `services/areola-care-texture.webp` | Unused fallback | Abstract skincare texture | 3:2 source | 1200 × 800 recommended | Warm abstract hand-and-serum image from the earlier direction; retained only as a replaceable fallback. |
| `services/reserve/areola-care-usft-model-detail.webp` | Areola-care editorial break | USFT technique detail | 440:523 | 1320 × 1569 | Official technique demonstration on a tasteful color model; crop vertically around the model and tool. |
| `services/reserve/areola-care-usft-workspace.webp` | Unused reserve | Professional workspace portrait | Portrait | 1320 × 1633 | Official USFT working portrait. Do not present it as Mikami Studio photography. |

## Still needed from the studio

- Real treatment preparation or hands-at-work photography.
- A private, clean studio/environment photograph.
- A genuine Mikami Studio product or equipment still life without visible client information.
- A real Mikami Studio closing campaign photograph to replace the current stock shoulder detail.

Do not add explicit intimate imagery, client cases, certificates containing personal data, or identifiable clients without documented permission. Chinese and English normally share the same photography; localized alt text belongs in `src/i18n/`.
