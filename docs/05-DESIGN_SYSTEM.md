# Design System — "Neo-Brutalist skeleton, skeuomorphic objects"

## 0. Source-of-truth precedence
1. **Stitch project** = layout, content, hierarchy, and any explicit colors/type/spacing it already defines.
2. **This doc** = the shared art-direction layer (borders, shadows, tactile components, motifs) and gap-filler for anything Stitch doesn't specify.
3. Conflict in *treatment* (e.g. Stitch uses soft blurred shadows) → default to this doc, and log the difference in `docs/design/design-deltas.md` for the human to decide. Conflict in *content/layout* → Stitch wins.
4. Agents never silently "improve" the design. Differences are logged, not decided.

## 1. The concept in one sentence
The page is raw, loud and structural (brutalism); the *things* on it feel like physical lost-and-found objects (skeuomorphism): tags, stamps, stickers, folders, pressable buttons.

**Core rule: brutalism is the skeleton, skeuomorphism is the accent. Max ONE skeuomorphic "hero object" per screen** (e.g. the luggage tag on item detail). Everything else stays flat-brutal. Mixing both everywhere produces noise and hurts usability.

## 2. Brutalist foundation
- Borders: 2px solid ink on cards/inputs, 3px on primary actions and containers. Radius: 0–4px (squared). No soft rounded-everything.
- Shadows: **hard offset only, no blur**: `--shadow-1: 4px 4px 0 var(--ink)`, `--shadow-2: 8px 8px 0 var(--ink)`.
- Color: flat, saturated blocks on warm paper. No gradients on UI chrome.
- Typography: heavy grotesk for headings, mono for metadata/labels/IDs. Large, uppercase labels allowed; body stays readable (≥16px).
- Layout: visible grid, generous gutters, intentional asymmetry, thick dividers. Raw but aligned; "ugly-on-purpose" never means misaligned by accident.

## 3. Skeuomorphic objects (the accent)
| Object | Used for | Implementation |
|---|---|---|
| **Luggage tag** | item card header / detail hero | CSS clip-path notch + punched hole (radial-gradient) + string via border/pseudo-element |
| **Stamp** | status: LISTED / CLAIM PENDING / VERIFIED / HANDED OVER / EXPIRED | rotated (-4° to 6°) bordered text, inked look via `mix-blend-mode`/opacity, animates in once |
| **Sticker / label** | category badges, "NEW" | flat-colored, slight rotate, hard shadow, peel-corner via gradient |
| **Manila folder** | claim card / custodian review | tabbed container via clip-path |
| **Tactile button** | all primary buttons | hard shadow that collapses on `:active` (translate + shadow shrink) like a physical key |
| **Paper stack** | empty states, lists | 2–3 offset borders behind a card |
Rules: pure CSS/SVG only. **No raster texture images.** Optional paper-grain noise as a ≤2 KB inline SVG data-URI. No heavy `filter: blur`/`backdrop-filter`.

## 4. Tokens (suggested; Stitch values win where defined)
Define ONLY in `apps/web/src/styles/tokens.css` (CSS variables) and map in Tailwind theme. No hex colors anywhere else (enforced by `verify.sh`).
```
--paper:#F4EFE6; --ink:#111111; --white:#FFFFFF;
--found:#3DDC97;  --lost:#FF6B4A; --claim:#4D7CFE; --warn:#FFD93D; --stamp:#D62828;
--border-1:2px; --border-2:3px; --radius:2px;
--shadow-1:4px 4px 0 var(--ink); --shadow-2:8px 8px 0 var(--ink); --shadow-press:1px 1px 0 var(--ink);
--space: 4/8/12/16/24/32/48/64
--font-display:"Space Grotesk"; --font-mono:"JetBrains Mono"  (self-host via next/font)
```
Status → color mapping: listed=found, claim_requested=warn, claim_verified=claim, handed_over=ink on paper, expired/rejected=stamp red. Never color alone: always label text too.

## 5. Component inventory (build as primitives in `components/ui/`, each with all states)
Button (primary/secondary/danger, loading, disabled) · Input/Textarea/Select/FileDrop · Badge/Sticker · Stamp · LuggageTag · ItemCard · Folder · Tabs/Stepper · Toast · Dialog/Sheet · EmptyState · Skeleton · NavBar (top + bottom-tab on mobile) · InstallBanner · OfflineBanner.
States for every interactive one: default, hover, focus-visible, active/pressed, disabled, loading, error.

## 6. Accessibility (non-negotiable)
- Text/background contrast ≥ 4.5:1 (check each token pair; ink on saturated colors is fine, white on yellow is not).
- Focus ring: 3px solid ink + 2px offset, visible on every interactive element. No `outline: none` without replacement.
- Tap targets ≥ 44×44px. Rotated stamps/stickers are decorative-or-labelled: status text must also exist as real text/aria-label.
- `prefers-reduced-motion`: disable stamp-in, press translation becomes color-only.
- Forms: visible labels, inline errors tied with `aria-describedby`.

## 7. Performance budget (mobile, mid-range Android)
No custom fonts beyond 2 families / 4 weights, `font-display: swap`. No images for decoration. Item photos via `next/image`, lazy, sized. JS per route kept minimal; Server Components by default. Animations only on `transform`/`opacity`.

## 8. Motion
Press 80ms · stamp-in 200ms (scale 1.4→1 + slight rotate) once on mount · page transitions none. Respect reduced-motion.

## 9. Do / Don't
DO: thick lines, hard shadows, one tactile hero per screen, real text for status. DON'T: gradients, glassmorphism, blurred shadows, rounded pills everywhere, photo textures, stacking 3 skeuomorphic objects in one view, low-contrast "aesthetic" gray text.
