# Design & Layout Plan — Vakantiehuis Hirondelle

> A blueprint for the rebuild. Defines what the site says, how it's organised, and how it looks — *before* any code is written, so the result stays coherent.

---

## 1. Design Goals

In order of priority:

1. **Make the visitor feel the place.** Within 5 seconds of landing, they should sense: "this is a charming, romantic French countryside escape." Photography does most of this work.
2. **Build trust quickly.** Real reviews, real photos, clear pricing, clear contact. No fake polish.
3. **Make contact effortless.** A booking/contact CTA is always within one tap, no matter where the visitor scrolls.
4. **Stay simple.** No carousels that fight the user, no popups, no animations that delay content. White space, large photos, clear typography.
5. **Work beautifully on a phone.** Most casual holiday browsing happens on mobile. Mobile is the primary canvas; desktop is a wider variant of it.

### Tone of voice
Warm, sincere, low-key. Not salesy. The site whispers, it doesn't shout.

---

## 2. Visual Identity

### Colour palette

A warm, earthy palette built around the existing brand colour (`#d0b3af`). Cream backgrounds, warm-near-black text, dusty rose accents, deeper terracotta for actions.

| Role | Hex | Tailwind class hint | Usage |
|---|---|---|---|
| Background (page) | `#FAF7F2` | `bg-stone-50` (custom) | Default page background — warm off-white, not pure white |
| Surface (cards) | `#FFFFFF` | `bg-white` | Cards, form fields |
| Ink (primary text) | `#2B2420` | `text-stone-900` (custom) | Body text, headings |
| Muted (secondary) | `#6B5F58` | `text-stone-500` | Captions, meta info, dates |
| Accent (brand) | `#D0B3AF` | `bg-rose-300` (custom) | Section dividers, soft highlights, badges |
| Accent dark | `#A87567` | `bg-rose-700` (custom) | Buttons, links on hover, focus rings |
| Border | `#E8DFD6` | `border-stone-200` (custom) | Dividers, card borders |
| Success | `#7A8B6F` | n/a | Sage green for "available" calendar state (optional) |

We'll define these as Tailwind custom colours in a small `<script>` config block so they're available as utilities (e.g. `bg-cream`, `text-ink`, `bg-clay-700`).

### Typography

Two families. A refined serif for character, a clean sans for legibility.

| Use | Font | Source | Why |
|---|---|---|---|
| Display + Headings | **Cormorant Garamond** | Google Fonts | Elegant, French-feeling, free, available on Google Fonts |
| Body + UI | **Inter** | Google Fonts | Clean, neutral, excellent legibility at every size |

Fallbacks: `serif` for Cormorant, `system-ui, sans-serif` for Inter.

**Type scale (mobile → desktop):**

| Element | Mobile | Desktop | Family |
|---|---|---|---|
| Hero title (`h1`) | 2.5rem (40px) | 4.5rem (72px) | Cormorant, weight 500 |
| Section heading (`h2`) | 1.75rem (28px) | 2.5rem (40px) | Cormorant, weight 500 |
| Subheading (`h3`) | 1.25rem (20px) | 1.5rem (24px) | Cormorant, weight 500 |
| Body text | 1rem (16px) | 1.125rem (18px) | Inter, weight 400 |
| Small / meta | 0.875rem (14px) | 0.875rem (14px) | Inter, weight 400 |
| Button label | 0.9375rem (15px) | 1rem (16px) | Inter, weight 500, letter-spacing 0.02em |

Line-height: `1.6` for body, `1.2` for headings.

### Spacing & rhythm

- **Section vertical padding:** `py-16` mobile, `py-24` desktop. Generous breathing room between sections is the single biggest contributor to "elegant".
- **Container width:** max 1100px, centred, with `px-6` mobile / `px-8` desktop side padding.
- **Element gaps:** stick to Tailwind's scale (4, 6, 8, 12, 16). Don't invent custom gaps.

### Imagery treatment

- Slight rounded corners (`rounded-lg`, ~8px) on all images — softer, more editorial feel.
- Subtle shadow on cards (`shadow-sm`), never heavy drop-shadows.
- Photos go edge-to-edge in their containers — no white margin around images inside cards.
- Hover on clickable images: gentle zoom (`scale-105`) over 300ms.

### Iconography

Keep Font Awesome (already integrated, reliable). Use it sparingly — only where icons clearly aid scanning (facility lists, contact info, social).

---

## 3. Page Layout — Section by Section

A long single-page layout. Each section answers one question for the visitor.

### Section A — Sticky top navigation
**Question answered:** "How do I get around?"

- Slim bar, semi-transparent cream background with backdrop blur.
- Logo / site name on the left (text-only: "Hirondelle" in Cormorant).
- Links on the right: Huis · Omgeving · Prijzen · Beoordelingen · Contact.
- A dark "Boek nu" button on the far right (always visible — primary conversion path).
- On mobile: collapses to a hamburger that drops a full-screen overlay menu.

### Section B — Hero
**Question answered:** "What is this and is it for me?"

Layout:
- Full-width image of the front of the house (`web_front_image.webp`), with a soft cream overlay at the bottom.
- Centred over the image: small overline text "PICARDIE · FRANKRIJK", then the title "Vakantiehuis Hirondelle" in large Cormorant, then the tagline beneath.
- Below the image: a row of 4 quick facts (4 personen · 3 slaapkamers · op 15 min van het strand · vanaf €495/week) — gives the value prop at a glance.
- Two CTAs side by side: primary dark "Direct boeken" (scrolls to booking form) + secondary outlined "Bekijk het huis" (scrolls to gallery).

### Section C — Story / Welkom
**Question answered:** "What's the feeling of this place?"

- Two-column on desktop (text left, single warm photo right — e.g. interior detail or garden). Stacked on mobile.
- Heading: "Welkom in Bouillancourt" in Cormorant.
- The italic hero paragraph from the original ("Dit schattig vakantiehuis dateert uit ca. 1900…") + the longer "Ontdek dit gezellige…" copy.
- Decorative `zwaluw.png` at the bottom centre as a small flourish.

### Section D — Het Huis (gallery + details)
**Question answered:** "Show me the house."

- Heading: "Het Huis" with a short intro line.
- **Photo gallery:** responsive masonry / mosaic grid. 1 column mobile, 2 cols tablet, 3 cols desktop. Uses all the WebP images. Click → lightbox (lightweight library or simple JS).
- **Details grid below:** 2 columns mobile, 3-4 columns desktop. Each item is an icon + label (4 personen, 3 slaapkamers, etc.). Clean, minimal — no table borders.
- **Bedrooms** as 3 simple cards side by side.
- **Faciliteiten** in 3 grouped lists (Basisvoorzieningen / Buiten / Entertainment) with checkmark icons. Tucked into a collapsible "Bekijk alle voorzieningen" toggle to keep the page tight.

### Section E — Omgeving
**Question answered:** "What's around the house?"

- Heading: "De Omgeving"
- 4 cards in a responsive grid (1 col mobile, 2 cols tablet, 4 cols desktop):
  - Each card: photo, name, distance badge, 2-line description (truncated), Maps link as outlined button.
  - Bouillancourt · Saint Valéry sur Somme · Le Crotoy · Abbeville.
- **No carousel** (the original Flickity carousel is one of the things we're simplifying away).
- Below the cards: an embedded Leaflet map showing the house location.

### Section F — Beoordelingen
**Question answered:** "Can I trust this?"

- Heading: "Wat gasten zeggen"
- A summary stat: average rating (8.3/10) + "Gebaseerd op 6 beoordelingen via Natuurhuisje.nl"
- A clean grid of review cards (1 col mobile, 2 cols desktop). Each card: stars, name, dates, score, the quote about the location and the quote about the house separated.
- 3 reviews shown by default, "Toon alle beoordelingen" button reveals the rest.

### Section G — Prijzen & Beschikbaarheid
**Question answered:** "What does it cost and when can I come?"

- Heading: "Prijzen & Beschikbaarheid"
- **Price table:** 3 simple rows (Hoogseizoen / Middenseizoen / Laagseizoen) — clean, no zebra striping. Tooltip-on-tap explains the periods.
- Below: a small note about extra costs (borg, schoonmaak, energie) in muted text.
- The Styled Calendar embed below the prices, in a card with a soft border.

### Section H — Boeken
**Question answered:** "How do I book?"

- Heading: "Reserveer je verblijf"
- A short reassuring line: "Vul het formulier in en we nemen binnen 24 uur contact op."
- Form in a single-column layout on mobile, two-column on desktop. Fields:
  - Naam · Achternaam (row)
  - Email · Telefoon (row)
  - Volwassenen · Kinderen (row)
  - Aankomst → Vertrek (date range)
  - Notitie (textarea)
  - Akkoord checkbox
  - Submit button: dark, full width on mobile.
- Floating cream tint on the section background to set it apart visually.

### Section I — Contact
**Question answered:** "What if I just have a question?"

- Heading: "Vragen?"
- Two-column on desktop. Left: contact info (email link, address line, response time note). Right: a smaller "Stuur een bericht" form (Naam, Email, Onderwerp, Bericht).

### Section J — Footer
- Small, dark cream background.
- Centre: "Hirondelle" wordmark in Cormorant.
- Row: Instagram + Facebook icons (linked).
- Tiny line: "© 2026 Vakantiehuis Hirondelle · Powered by Shan".
- That's it. No link soup.

---

## 4. Component Patterns

These are the reusable visual primitives. Once defined, every section uses them — that's how we get coherence.

### Buttons

| Variant | Look |
|---|---|
| Primary | Dark warm brown (`#2B2420`) bg, cream text, `rounded-md`, `px-6 py-3`, hover lifts to a slightly lighter shade |
| Secondary | Transparent bg, 1px ink border, ink text, hover fills to ink |
| Tertiary / link | Underlined, accent-dark colour, no background |

All buttons: `font-medium`, slight letter-spacing, smooth `transition-colors duration-200`.

### Cards

- Surface: `bg-white`
- Border: `1px solid #E8DFD6`
- Radius: `rounded-lg`
- Padding: `p-6` (interior content)
- Shadow: none by default, `shadow-md` on hover for interactive cards

### Form fields

- White background, 1px stone-200 border, `rounded-md`, `px-4 py-3`.
- Focus state: 2px accent-dark ring, no harsh blue browser default.
- Labels above fields, small caps optional for elegance (`uppercase text-xs tracking-wider text-stone-500`).
- Error state: subtle dusty-red border, message in small text below.

### Section headers

- Small overline above heading: 12px Inter uppercase, letter-spacing wide, accent-dark colour.
- Heading: Cormorant, large, weight 500.
- Optional 1-line subhead in muted body type.
- Thin horizontal rule (`border-stone-200`) below the header block.

### Image gallery item

- `rounded-lg` corners
- `aspect-[4/3]` or `aspect-square` depending on grid cell
- `object-cover`
- Hover: `scale-105` over 300ms with `overflow-hidden` parent

---

## 5. Responsive Strategy

**Breakpoints (Tailwind defaults):**
- Default = mobile (< 640px)
- `sm:` 640px+
- `md:` 768px+
- `lg:` 1024px+
- `xl:` 1280px+

**Approach:** mobile-first — write base styles for phone, then add `md:` and `lg:` overrides. Test in this order: 375px → 768px → 1280px.

**Layout transitions:**
- 1 column → 2 columns at `md`
- 2 columns → 3-4 columns at `lg` (gallery, area cards, facility lists)
- Hero text size scales smoothly using clamp-like Tailwind responsive classes (`text-4xl md:text-6xl lg:text-7xl`)
- Sticky nav: full text on `md+`, hamburger on `< md`

**The 40% sidebar in the original is gone.** It eats real estate and breaks responsive layouts. The new design is a single full-width column.

---

## 6. Interaction & Motion

Sparse, purposeful, never showy.

- **Smooth scroll** on anchor links.
- **Subtle hovers:** colour transitions (200ms), image zoom on gallery items (300ms), card lift (shadow change) on hover.
- **Sticky nav** appears with a soft fade when the user scrolls past the hero.
- **Form validation** inline, on blur — never on every keystroke.
- **No loading spinners**, **no carousel auto-rotate**, **no popups**.
- Respect `prefers-reduced-motion`: disable transitions for users who request it.

---

## 7. Accessibility Baseline

Non-negotiable, easy to bake in from the start:

- Single `<h1>` per page, then `<h2>` for sections, `<h3>` for subsections.
- All images have meaningful `alt` text (or `alt=""` for purely decorative ones like the swallow).
- Form fields have visible `<label>` elements, not just placeholders.
- Colour contrast: ink-on-cream tested at 4.5:1 minimum.
- Focus styles visible on every interactive element.
- Tab order matches visual order.
- The booking CTA is reachable in ≤2 tabs from the top.

---

## 8. SEO Hooks Built Into the Design

Things the layout must support so SEO improvements (from `IMPROVEMENT_PLAN.md`) work cleanly:

- Single `<h1>` in the hero.
- Section anchors (`#huis`, `#omgeving`, etc.) used for nav and Schema.org.
- Reviews rendered as visible HTML (so Schema.org `Review` markup works).
- Address rendered as visible text (so `LodgingBusiness` Schema can reference real DOM).
- All images use `<img>` with `width`, `height`, `alt`, and `loading="lazy"` (except hero).
- Pricing visible as text (not an image), so Google can read `priceRange`.

---

## 9. What We're NOT Doing (deliberately)

To keep the site simple and elegant:

- ❌ No image carousel for the area section (replaced by a card grid)
- ❌ No animated splash / intro
- ❌ No dark mode toggle (out of scope for a holiday rental)
- ❌ No multi-language switcher in v1 (Dutch only — can add later if needed)
- ❌ No live chat widget
- ❌ No cookie banner pre-built — only added if analytics requires it under GDPR
- ❌ No popups asking for email
- ❌ No 40%-width fixed sidebar from the original

---

## 10. Build Order (recommended)

When we start coding, build in this order so we can review the look at each step:

1. Tailwind theme config (colours, fonts in a `<script>` config block)
2. Top navigation
3. Hero
4. Footer (so the page has top + bottom anchors)
5. Story / Welkom section
6. Het Huis (gallery + details)
7. Omgeving (cards + map)
8. Beoordelingen
9. Prijzen & Beschikbaarheid
10. Boeken (form)
11. Contact
12. Apply SEO meta tags + Schema.org from `IMPROVEMENT_PLAN.md`
13. Image optimisation pass
14. Final mobile + desktop QA

---

## 11. Decisions (locked in)

- **Domain:** `https://oomes.nl/picardie/` — subdirectory of the main `oomes.nl` site. All canonical URLs, Open Graph URLs, and Schema.org `url` fields use this path.
- **Logo:** wordmark "Hirondelle" in Cormorant + small swallow icon (`zwaluw.png`) beside or above the text.
- **Review attribution:** the "afkomstig van Natuurhuisje.nl" line is **removed**. Reviews are presented as our own.
- **Calendar:** TBD — keep the styledcalendar embed for now; revisit later. Layout reserves a card slot for whatever ends up there.
- **Response time:** **no promise made.** Drop "binnen 24 uur" entirely. The booking section just says "Vul het formulier in en we nemen contact op."
