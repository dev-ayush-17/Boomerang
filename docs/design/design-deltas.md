# Design deltas (Stitch vs design system)
Agents append here; the human decides. Never silently resolve.

| Screen/component | Stitch says | Design system says | Agent default applied | Human decision |
|---|---|---|---|---|
| Card/Container Corners | `rounded-md` (8-12px) and `rounded-full` pills | `0-4px` squared brutalist radius | Squared `2-4px` borders, no rounded-full pills | Pending |
| Shadows | Soft blurred CSS shadows / subtle borders | Hard offset only: `4px 4px 0 var(--ink)` | Hard 4px/8px offset shadows without blur | Pending |
| Typography | `Noto Serif` + `PT Sans` (literary/editorial) | `Space Grotesk` + `JetBrains Mono` (heavy grotesk & mono) | `Space Grotesk` headings + Mono metadata | Pending |
| Palette | Muted organic forest green (`#07241A`, `#ECF6F0`) & terracotta (`#9E3F24`) | Saturated flat blocks on warm paper (`#F4EFE6`, `#3DDC97`, `#FF6B4A`) | Saturated flat blocks on `--paper` background | Pending |
| Handover Mode | "Verify & Chat" tab unlocking direct peer student chat | Custodian Desk verification & handover only | Custodian desk verification flow (no unauthenticated peer chat) | Pending |
