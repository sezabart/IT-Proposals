import { cp, mkdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import ghpages from 'gh-pages'

/**
 * Publish the MobiDIS Future Demo to GitHub Pages.
 *
 * The demo is one self-contained HTML file (`demo/index.html`): no build step,
 * no external requests. GitHub Pages is already configured for this repo
 * (gh-pages branch + custom domain proposals.seza.si), so we stage just that
 * file plus the CNAME and publish it to the branch root.
 *
 * The React proposal app in `src/`/`dist/` is untouched and can be published
 * again with `npm run build && npx gh-pages -d dist --cname proposals.seza.si`.
 */

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const stage = path.join(root, '.deploy')
const cname = 'proposals.seza.si'

await rm(stage, { recursive: true, force: true })
await mkdir(stage, { recursive: true })

await cp(path.join(root, 'demo', 'index.html'), path.join(stage, 'index.html'))
await writeFile(path.join(stage, 'CNAME'), `${cname}\n`)
await writeFile(path.join(stage, '.nojekyll'), '')

await new Promise((resolve, reject) => {
  ghpages.publish(
    stage,
    {
      branch: 'gh-pages',
      repo: 'https://github.com/sezabart/IT-Proposals.git',
      dotfiles: true,
      message: 'Deploy MobiDIS Future Demo',
    },
    (error) => (error ? reject(error) : resolve()),
  )
})

console.log(`\nPublished https://${cname}/`)
