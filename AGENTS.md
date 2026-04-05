# AGENTS.md

## Repository overview

- This repository is a small Node.js project with a single runtime entrypoint at `src/index.js`.
- `npm start` runs the app once with Node.
- `npm run dev` runs the same entrypoint in watch mode.
- `assets/styles.css` exists as a static stylesheet, but it is not currently wired into a browser app from `src/index.js`.
- `README.md` is minimal and should not be treated as the source of truth for setup or validation steps.

## Project structure

- `src/`: application source code.
- `assets/`: static assets such as CSS.
- `.vscode/`: editor launch, task, and recommendation files.
- `package.json`: npm scripts and package metadata.

## Working conventions

- Keep changes aligned with the current plain JavaScript + Node setup.
- Do not introduce frameworks, build tooling, or dependencies unless the task clearly requires them.
- When adding dependencies, use npm and let it update `package-lock.json`.
- Prefer updating or adding npm scripts in `package.json` rather than relying on undocumented one-off commands.
- Treat `.vscode` settings as editor guidance, not as a substitute for repository policy.

## Code style

Follow `.editorconfig`:

- UTF-8 charset.
- LF line endings.
- Final newline required.
- Trim trailing whitespace except in Markdown.
- Use spaces with 2-space indentation.

Additional guidance:

- Keep changes ASCII-first unless a file already uses non-ASCII content naturally.
- Match the existing language of the touched file. This repo already contains Spanish user-facing text.
- Prefer small, direct implementations over abstraction-heavy patterns.

## Commands

- Install dependencies: `npm install`
- Run once: `npm start`
- Run in watch mode: `npm run dev`
- Current test script: `npm test`

## Testing guidance

- `npm test` is currently a placeholder script that prints `Sin pruebas configuradas` and exits successfully. Do not treat it as meaningful validation by itself.
- For runtime changes, at minimum run `npm start` and confirm the modified behavior directly.
- If a task adds logic complex enough to justify automated coverage, add focused tests and update `package.json` accordingly instead of relying on the placeholder script.
- Run the smallest high-signal check for the area you changed; avoid adding broad tooling unless it provides clear value.

## Environment and ignored files

- Environment files such as `.env`, `.env.local`, and `.env.*.local` are gitignored.
- Build output directories such as `dist/` and `build/` are gitignored.
- Do not commit secrets or generated artifacts unless the task explicitly calls for them.

## Cursor Cloud specific instructions

- Before changing behavior, inspect `package.json` to confirm the expected npm script or entrypoint.
- If you change runtime behavior in `src/index.js`, verify it with `npm start`.
- If you add a new recurring command (test, lint, build, etc.), document it in this file so later agents can use it consistently.
- Do not claim comprehensive automated coverage unless you added or ran a real test suite.
