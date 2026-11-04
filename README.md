# Law Firm Website Template

A responsive law firm website built with Next.js (App Router), TypeScript, and Tailwind CSS v4.
All copy lives in `src/content/` as typed TypeScript, so you can edit content without touching components.

Every value in `[BRACKETS]` is a placeholder. Replace it with real content before launch.

## Commands

```bash
npm install
npm run dev     # local development at http://localhost:3000
npm run build   # production build (must pass before deploying)
npm run start   # serve the production build
npm run lint
```

## Routes

| Route | File | Notes |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Home page with all home sections |
| `/about` | `src/app/about/page.tsx` | Firm overview and leadership |
| `/practice-areas/[slug]` | `src/app/practice-areas/[slug]/page.tsx` | Generated from `src/content/practice-areas.ts` |
| `/insights` | `src/app/insights/page.tsx` | Article cards, newest first |
| `/insights/[slug]` | `src/app/insights/[slug]/page.tsx` | Generated from `src/content/insights.ts` |
| `/contact` | `src/app/contact/page.tsx` | Contact form |
| `/api/contact` | `src/app/api/contact/route.ts` | Form endpoint. Validates and returns success. Sends no email yet. |
| Not found | `src/app/not-found.tsx` | Shown for unknown URLs |

## Where to edit content

| Content | File |
| --- | --- |
| Firm name, tagline, logo alt text, navigation, address, phone, email, hours, social links, legal links, copyright, entry notice text | `src/content/site.ts` |
| Home page: hero, stats, service highlights, practice-area intro, presence carousel, leadership intro, insights intro, closing CTA | `src/content/home.ts` |
| Practice areas (6 entries: name, icon, summary, overview, sections) | `src/content/practice-areas.ts` |
| Insight articles (4 entries: title, excerpt, date, author, body) | `src/content/insights.ts` |
| Leadership profiles (3 entries: name, title, photo, short bio, full bio) | `src/content/leadership.ts` |
| About page copy: intro, overview, mission, values | `src/content/about.ts` |
| Contact page copy: heading, intro, urgent note, success message, disclaimer | `src/content/contact.ts` |
| Insights index header, article footer CTA, practice-area sidebar, not-found copy | `src/content/pages.ts` |
| Placeholder images (portrait, hero) | `public/placeholders/` |
| Landmark illustrations for the presence carousel (India Gate, Charminar, Howrah Bridge, and others) | `src/components/Landmarks.tsx` |
| Design tokens: colors, fonts, spacing, radius | `src/app/globals.css` (`:root` block) |

Practice-area and insight routes come from their content files. Adding an entry creates its page, header dropdown item, and home page card.

## Placeholders to replace

### Site-wide (`src/content/site.ts`)
- Firm name is set to **Sanjay Aggarwal & Associates** (`firmName`), with the logo wordmark in `brand` (`monogram`, `primary`, `secondary`). The logo itself is drawn in `src/components/Logo.tsx`; the browser-tab icon is `src/app/icon.svg`.
- Tagline is set to "Headquartered in Delhi. Present across India." (`tagline`, shown under the footer logo)
- `[STREET ADDRESS]`, `[CITY, STATE ZIP]`, `[PHONE NUMBER]`, `[EMAIL ADDRESS]`
- `[SOCIAL PLATFORM 1–3]` and their `href` values (currently `#`)
- `[DISCLAIMER]`, `[PRIVACY POLICY]`, `[TERMS OF USE]` labels and `href` values (currently `#`)
- `[YEAR]` in the copyright line
- Entry notice (`entryNotice`): the disclaimer shown before the site. The wording is a **draft**; have the firm's counsel review it against the current Bar Council of India rules. The title, intro, list of points, closing line, button label, and `remember` setting are all editable.
- `[CONSULTATION CTA]` (`headerCta`): the button in the header, mobile menu, footer, and practice-area sidebar

### Site-wide (`src/app/layout.tsx`)
- `[SITE TITLE]` and `[SITE DESCRIPTION]` (default metadata; page titles append `| Sanjay Aggarwal & Associates`)

### Home page
- `src/app/page.tsx`: `[HOME PAGE TITLE]` and `[HOME PAGE DESCRIPTION]` (metadata)
- `src/content/home.ts`:
  - Hero: eyebrow, headline, intro, "Contact Us" button and panel label are filled in; the vertical side label `location` (currently New Delhi NCR · Mumbai · Bangalore · Gujarat · Rajasthan) and the hero image (`hero.image`; replace `public/placeholders/hero.svg` with a portrait-orientation photo) remain to review. Hero icon links live in `site.quickContact`.
  - Stats: the **numbers** (`10`, `5`, `12`) and labels (`[YEARS]`, `Partners`, `Associates`). Replace with real figures only.
  - Presence carousel (dark section after practice areas): `practiceStates.eyebrow`, `heading` (currently "Headquartered in Delhi. Present across India."), `intro`, `label` (screen-reader name), `headquartersLabel`, and `items`. Each item has a `name`, a `landmark` illustration, and an optional `image` (a real photo, which replaces the illustration). The first item is the headquarters card.
  - Highlights: eyebrow, heading, intro, 3 titles and descriptions, and the `href` of each "Learn more" link
  - Practice areas section: eyebrow, heading, intro
  - Leadership section: eyebrow, heading, intro
  - Insights section: eyebrow, heading, intro
  - Closing CTA: eyebrow, heading, body, button label
- `src/content/practice-areas.ts`: practice-area names, summaries, overviews, sections (header dropdown and home cards read these)

### Practice areas (`src/content/practice-areas.ts`)
Six entries. For each: `name`, `summary`, `overview` paragraphs, and three `sections` (heading and body). Choose an `icon` from: `scale`, `building`, `home`, `users`, `document`, `shield`.

### Insights (`src/content/insights.ts`)
Ten articles, one per practice area. For each: `slug`, `practiceArea` (a practice-area slug), `title`, `excerpt`, `date` (ISO `YYYY-MM-DD`), `author` (currently Sakshi Bharti), and `body` blocks (`"## Heading"`, `"- bullet"`, or plain paragraph). The page shows the three newest on the home page. Drafts: have the partners verify legal accuracy before launch. Each article gets a cover illustration automatically (`src/components/ArticleImage.tsx`); to use a real photo instead, add `image: { src, alt }` to the article.

### Leadership (`src/content/leadership.ts`)
Three entries. For each: `name`, `title`, `photo.alt`, `shortBio`, and `bio` paragraphs. Replace `public/placeholders/portrait.svg` with real headshots. Use `next/image`-optimized files, for example `public/team/name.jpg`, and update `photo.src`.

### About page
- `src/app/about/page.tsx`: `[ABOUT PAGE TITLE]` and `[ABOUT PAGE DESCRIPTION]` (metadata)
- `src/content/about.ts`: eyebrow, heading, overview heading, intro, overview paragraphs, mission heading and body, three values, leadership copy

### Insights pages
- `src/app/insights/page.tsx`: `[INSIGHTS PAGE TITLE]` and `[INSIGHTS PAGE DESCRIPTION]` (metadata)
- `src/content/pages.ts` (`insightsIndex`, `articleCta`): header copy, empty-state message, and article footer CTA
- Article titles and descriptions come from `src/content/insights.ts`

### Contact page
- `src/app/contact/page.tsx`: `[CONTACT PAGE TITLE]` and `[CONTACT PAGE DESCRIPTION]` (metadata)
- `src/content/contact.ts`: heading, intro, urgent note, success message, `[OTHER / NOT SURE LABEL]`, and disclaimer
- The practice-area dropdown is built from `src/content/practice-areas.ts`. The server validates against the same list.

### Not-found page
- `src/content/pages.ts` (`notFound`): eyebrow, heading, message, button labels, metadata
- `src/app/not-found.tsx` shows the copy from `pages.notFound`

## Contact form: wiring up email

`src/app/api/contact/route.ts` validates the submission and returns success. **It does not send email yet.** Find the `TODO` comment there and connect your email service (for example Resend, SendGrid, Amazon SES, or a CRM). Before going live, also add:

- Spam protection (a honeypot field or Cloudflare Turnstile)
- Rate limiting
- No logging of personal data

Validation rules are shared between the form and the server in `src/lib/contact.ts`.

## Design tokens

Edit `src/app/globals.css`:

- **Colors:** `--brand-primary`, `--brand-accent`, `--brand-surface`, `--brand-ink`, and related values in `:root`. Tailwind utilities are generated from them (`bg-primary`, `text-accent`, `border-border`, and so on).
- **Fonts:** Cormorant Garamond (display serif) and Inter (body), loaded with `next/font/google` in `src/app/layout.tsx`. Fonts are downloaded at build time and self-hosted, so `npm run build` needs network access. To change typefaces, swap the two font imports in `layout.tsx`; `--font-heading-family` and `--font-body-family` in `globals.css` pick them up.
- **Spacing and layout:** `--space-gutter`, `--space-section`, `--site-max-width`, `--radius-base` (0 for square corners)
- **Utilities** defined in the same file: buttons (`btn-primary`, `btn-accent`, `btn-secondary`, `btn-on-dark`), `eyebrow` (small letterspaced labels), `link-draw` (underline that draws in on hover), and `bg-columns` (faint vertical lines on dark sections). Entrance animations `animate-rise` and `animate-fade-in` respect reduced-motion settings.
- **Inner-page headers** share one component: `src/components/PageHero.tsx`.

## Notes

- Pages use Cache Components (`cacheComponents` in `next.config.ts`). Date formatting uses fixed input dates, so pages prerender statically.
- The entry notice (disclaimer) is rendered in `src/app/layout.tsx`, so it appears on whichever page a visitor lands on first. How long a click on Proceed is remembered is set by `entryNotice.remember` in `src/content/site.ts`: `"never"` (the default) shows it on every refresh and new visit, `"session"` shows it once per browser session, and `"forever"` shows it once per browser (stored in `localStorage` under `entry-notice-acknowledged`). Clicking links inside the site never brings it back.
- Unknown practice-area and insight slugs render the not-found page. The HTTP status may be 200, not 404, because the page streams. Search engines still see the `noindex` tag. Fix this at the hosting layer if needed.
- No database or CMS is used. Content changes require a rebuild and redeploy.
