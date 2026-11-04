# Project memory

## Product intent & audience

- HILMAN EV (hilmanev.com) — Indian electric vehicle company.
- Products: ROCK (dumper/electric mining vehicle, has gallery), RAMBO, RAMBO COOL (latter two specs/photos unknown).
- Audience: potential customers, mining/industrial fleet buyers, dealership applicants.

## Brand personality & voice

- Industrial, rugged, reliability-focused tone (mining/ev context).
- Dual CTAs: customer enquiries and dealership applications.

## Visual design & UX direction

- Single-page dark theme with emerald accent (designer-chosen palette; original site palette not recovered).
- Sticky header: HILMAN logo, section links, "Enquire Now" + "Apply for Dealership" buttons, mobile menu.
- Full-screen hero slideshow using site's 4 original images.
- "Why HILMAN" section with 4 feature icons (batteries, motors, cost, customer experience) — lucide-react.
- Product cards; ROCK has gallery thumbnails, RAMBO/RAMBO COOL text-only (no photos yet).
- About section + dealership CTA + footer with office phone numbers.
- Enquiry form as modal popup; supports both customer and dealership submissions.
- Images reused from original site via URLs (not downloaded locally).
- Built with Vite + React + Tailwind + lucide-react; `@/` alias to `src/`.

## Decisions, constraints & rationale

- Built as single-page app (all sections on one page) for unified theme consistency.
- Removed inconsistent colors from original site; replaced with one dark+emerald palette.
- Supabase enquiries table created: public insert only, no public read access.
- Env vars: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` (Bolt standard names; none pre-existed).
- RAMBO and RAMBO COOL pages unreachable during research → placeholder taglines, no specs/photos.
- Social media links omitted (URLs unknown).

## Open questions & assumptions

- Need RAMBO + RAMBO COOL specs, descriptions, and photos.
- Need social media URLs (Facebook, Instagram, YouTube, LinkedIn).
- Original site color palette unknown — current emerald/dark scheme is a placeholder; confirm or provide original.
- Layout untested visually (no browser preview available).
- Assumption: single-page layout acceptable vs original multi-page site.