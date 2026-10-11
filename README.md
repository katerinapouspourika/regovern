# ReGovern

Website for ReGovern, an internal audit company.

- Project brief, design direction and open questions: [docs/brief.md](docs/brief.md)
- Design references: [docs/design-references/](docs/design-references/)
- Conventions for contributors and Claude Code: [CLAUDE.md](CLAUDE.md)

## Branches

| Branch               | Purpose                                                           |
| -------------------- | ----------------------------------------------------------------- |
| `main`               | Approved releases only.                                           |
| `dev`                | Integration branch. Branches from `main`.                         |
| `feature/*`, `fix/*` | One piece of work each. Branch from `dev`, merge back into `dev`. |

`dev` is merged into `main` once the client approves.
