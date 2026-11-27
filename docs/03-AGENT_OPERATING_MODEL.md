# Agent Operating Model

## 1. Vocabulary (learn these precisely)
- **Rules**: always-on or path-scoped guardrails (`AGENTS.md`, `.agents/rules/`). Passive.
- **Skills**: task-specific playbooks the agent loads when relevant (`.agents/skills/*/SKILL.md`). Agent-triggered.
- **Workflows**: repeatable procedures you trigger by slash command (`/plan`, `/build`, `/review`, `/retro`).
- **Harness**: everything around the model that gives feedback and enforces limits: `scripts/verify.sh`, tests, linters, type checks, pre-commit, CI, permissions. The harness decides what "done" means, not the model.
- **Loop**: plan → build → verify → (fix, max 3) → review → human merge.
- **Guardrail**: an automated check or permission that makes a mistake impossible or loudly visible. Prefer these over written rules.
- **Observability**: being able to see what agents did and why: task files, git history, Antigravity plan/walkthrough artifacts, `docs/agent-log.md`.

## 2. The golden loop
```
 you: goal ─► /plan (Planner) ─► task file ─► YOU approve
                                      │
                                      ▼
                         /build (Builder, branch)
                          ▲        │
              fix (max 3) └─ verify.sh ◄─┘   red→fix, green→next
                                      │ green
                                      ▼
                    /review (Reviewer, fresh context)
                                      │ approve
                                      ▼
                       YOU read diff ─► merge ─► CI
                                      │ agent erred?
                                      ▼
                             /retro → improve harness
```

## 3. Roles (start with 3; add more only when a concrete pain appears)
| Role | Does | Must not | Where |
|---|---|---|---|
| Planner | writes task files | write code | Antigravity, `/plan` |
| Builder | implements one approved task | merge, expand scope | Antigravity, `/build` |
| Reviewer | independent read-only critique | edit code | Hermes (different model/context), `/review` prompt |
Later candidates: Test-writer, Security auditor (RLS/uploads), DevOps (CI/deploy), Docs.

**Why separate reviewer?** A model reviewing its own session shares its blind spots. A fresh context, ideally a different model, catches different things.

## 4. Multi-agent rules
1. Communicate through files (task file, PR), not through chat memory.
2. One writer per path at a time. Parallel builders use separate `git worktree`s and non-overlapping scopes.
3. Reviewers and planners are read-only on source.
4. A human gate sits between plan→build and review→merge. Gates are listed in AGENTS.md.
5. Don't add agents to look sophisticated. Add one when a single agent repeatedly fails at a specific thing.

## 5. Where Hermes fits
- Reviewer / second opinion (`prompts/01-hermes-reviewer.md`) on a different model than your builder.
- Background and recurring jobs later: dependency audits, daily `verify.sh` on `main`, summarising CI failures.
- Caution: Hermes can create and improve its own skills and keeps memory across sessions. Treat any auto-created skill as untrusted until you read it; don't let it write into `.agents/` or `AGENTS.md` unreviewed. Keep its approval/permission settings strict on the terminal. Check the Hermes docs page on Context Files to confirm it loads `AGENTS.md` in your version, and confirm with `hermes doctor` after install.

### Hermes memory & skills protocol (your reviewer-learns plan, made safe)
- Hermes' own memory and self-created skills live in `~/.hermes/` (outside the repo). Let it learn there freely: review patterns, recurring mistakes, your preferences.
- **Hermes never edits `AGENTS.md`, `.agents/`, `scripts/verify.sh` or `docs/`.** It proposes. Its review output includes a section "Proposed harness changes" (rule/skill/check + why). You decide, then run `/retro` so the change lands via a normal PR.
- Reason: a reviewer that rewrites the rules governing the builder can quietly lower the bar. Keep authority over the rules with the human.
- Every few weeks, skim `~/.hermes/skills/` and prune anything wrong or stale.

## 6. Permissions & safety posture for Antigravity
- Start with review-before-execute for terminal commands; relax only for read-only commands you trust.
- Keep browser/terminal allowlists tight. No access to production credentials from the IDE, ever.
- Use a dedicated dev Supabase project / local stack; never point agents at production data.

## 7. Metrics to watch (your loop's observability)
First-pass verify rate · average fix iterations · reviewer BLOCKERs per PR · number of human interventions · failures logged in `agent-log.md` per week. If a number gets worse, fix the harness.

## 8. Working agreement with yourself
You approve plans, read every diff, and can explain each changed file. If you can't, ask the agent to teach you before merging. That is the actual learning loop.
