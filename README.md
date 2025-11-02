# Complyo Site

Static marketing site for Complyo — the compliance operations platform for global financial institutions.

## Local development

1. Install Node.js 18+.
2. Install dependencies (none required) and run the dev server:

       npm run dev

3. Open http://localhost:8080 in your browser.

## Project structure

        .
        ├── assets/               # Brand logo and hero illustration
        ├── css/styles.css        # Global styles shared across pages
        ├── js/main.js            # Navigation toggle and runtime helpers
        ├── *.html                # Static pages for the marketing site
        └── .github/workflows     # GitHub Pages deployment workflow

## Deployment

This repository is configured to deploy with GitHub Pages using GitHub Actions. On each push to the main branch the Pages workflow:

1. Configures the Pages environment.
2. Uploads the repository contents as the static artifact.
3. Deploys to the GitHub Pages environment.

No additional build step is required because the site is entirely static. Once the workflow succeeds the site is served from https://<org>.github.io/Complyo-site/.

## License

Released under the MIT License. See [LICENSE](LICENSE) for details.
