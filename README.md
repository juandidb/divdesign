# DiDesign Landing

Modern bilingual React + Vite site for the DivDesign studio.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages deploy

- The workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds the site on every push to `main` and publishes the `dist` folder to GitHub Pages using the official `actions/deploy-pages` action.
- Make sure the repository Settings → Pages source is set to **GitHub Actions** (it happens automatically the first time the workflow deploys).
- To trigger a deploy manually, either push new commits to `main` or run the workflow via the "Run workflow" button in the Actions tab.
- The Vite `base` option is already set to `/divdesign/`, so assets resolve correctly when served from `https://<user>.github.io/divdesign/`.
