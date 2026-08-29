# MIKI Website

Static Astro website for a women’s waxing and intimate-skincare studio. The site supports Traditional Chinese and English through the `?lang=zh` and `?lang=en` query parameters.

## Deployment

GitHub Pages deploys automatically whenever the `main` branch is updated. The workflow in `.github/workflows/deploy.yml`:

1. checks out the repository;
2. installs Node.js 22 and enables the npm cache;
3. installs the locked dependencies with `npm ci`;
4. runs `npm run check` and `npm run build`;
5. uploads `./dist` as a GitHub Pages artifact; and
6. deploys the artifact through the `github-pages` environment.

For a GitHub project site, the expected URL format is:

```text
https://<github-user>.github.io/<repo-name>/
```

The workflow obtains the deployment origin and base path from `actions/configure-pages`, then passes them to Astro as `ASTRO_SITE` and `ASTRO_BASE`. No username or repository name is hardcoded.

The workflow also passes the current commit SHA as `PUBLIC_ASSET_VERSION`. Replaceable files in `public/images/` keep stable filenames for easy editing, while their generated URLs receive a deployment-specific `?v=` value so browsers request the latest photography after each release.

In the GitHub repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.

### Custom domain later

GitHub Pages can continue to host the site after a custom domain is introduced. Configure the domain in **Settings → Pages**, update the required DNS records, and let `actions/configure-pages` provide the resulting deployment origin and base path. The Astro configuration does not require a custom domain today.
