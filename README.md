# IT-Proposals

The GitHub Pages site **https://proposals.seza.si/** currently serves the
**MobiDIS Future Demo** — a single self-contained HTML file (`demo/index.html`,
~3.4 MB, no build step, no external requests, works offline).

## Deploy the demo

```bash
npm install
npm run deploy        # publishes demo/index.html to the gh-pages branch
```

GitHub Pages is already configured for this repo (gh-pages branch + custom
domain `proposals.seza.si`); the deploy script stages `index.html` + `CNAME`
and pushes the branch root.

## Restore the proposal site

The original React proposal app is untouched in `src/` and `dist/`:

```bash
npm run deploy:proposal   # build + publish dist/ to gh-pages
```

## Where the demo comes from

It is built in the MobiDIS repo at `explorations/crowd-cam`:
`npm run build:standalone` produces `release/index.html`. Copy that file over
`demo/index.html` here and run `npm run deploy`.
