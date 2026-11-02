import { execFileSync } from 'node:child_process'
import { cp, mkdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * Publish the MobiDIS Future Demo to GitHub Pages.
 *
 * The demo is one self-contained HTML file (`demo/index.html`): no build step,
 * no external requests. GitHub Pages is already configured for this repo
 * (gh-pages branch + custom domain proposals.seza.si), so we stage just that
 * file plus the CNAME and publish it as the branch root.
 *
 * The publish is a forced push from a throwaway repo, so the branch contains
 * exactly what is staged — no leftovers from older deploys (the previous
 * gh-pages branch carried a committed node_modules tree).
 *
 * The React proposal app in `src/`/`dist/` is untouched and can be published
 * again with `npm run deploy:proposal`.
 */

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const stage = path.join(root, '.deploy')
const cname = 'proposals.seza.si'
const repo = 'https://github.com/sezabart/IT-Proposals.git'

await rm(stage, { recursive: true, force: true })
await mkdir(stage, { recursive: true })

await cp(path.join(root, 'demo', 'index.html'), path.join(stage, 'index.html'))
await writeFile(path.join(stage, 'CNAME'), `${cname}\n`)
await writeFile(path.join(stage, '.nojekyll'), '')

const git = (...args) =>
  execFileSync('git', args, { cwd: stage, stdio: ['ignore', 'inherit', 'inherit'] })

git('init', '-q')
git('add', '-A')
git('commit', '-q', '-m', 'Deploy MobiDIS Future Demo')
git('push', '--force', repo, 'HEAD:gh-pages')

console.log(`\nPublished https://${cname}/`)
