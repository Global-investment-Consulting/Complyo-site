# Complyo Site

Static marketing site for Complyo -- the compliance operations platform for global financial institutions.

## Local development

1. Install Node.js 18+.
2. Run the dev server (no build tools required):

       npm run dev

3. Open http://localhost:8080 in your browser.

## Configuration

### Contact form (Formspree)
- The contact form in `contact.html` posts to Formspree at `https://formspree.io/f/mblpqkvz`.
- Submissions include a hidden `_subject` field and `_gotcha` honeypot; edit copy as needed.
- Test locally with:

      curl -X POST -H "Accept: application/json" -F name=Test -F email=test@example.com -F message="Hello" https://formspree.io/f/mblpqkvz

### Privacy page
- `privacy.html` documents GDPR handling for contact form data (collection, legal basis, retention, rights).
- Update the “Last updated” timestamp whenever material changes are made.

### Analytics (Plausible)
- The Plausible snippet in each page head is pre-configured for `complyo.eu`.
- The contact form fires the conversion event `ContactFormSubmitted` on successful submission; use it for funnel tracking.
- If you need a different domain, update the `data-domain` attribute (or comment out the script if analytics should remain disabled).

### Status link
- Footer links point to `https://status.complyo.eu`. Adjust the URL in each footer if the status page changes.

### Custom domain
- GitHub Pages uses the `CNAME` file (`www.complyo.eu`). Configure DNS with a CNAME record for `www` pointing to `global-investment-consulting.github.io` and enable HTTPS in the Pages settings.
- Any DNS change may take time to propagate; verify the certificate after the first deploy.

### SEO and sharing assets
- `sitemap.xml` and `robots.txt` live at the repository root and are already configured with canonical URLs.
- Social share cards live at `assets/og-card.png` (PNG) and `assets/og-card.svg`; update both if you refresh branding.
- Every page references `/Complyo-site/assets/og-card.png` via Open Graph metadata.
- A custom `404.html` provides a branded fallback for missing routes.

### CI link checks
- `.github/workflows/link-check.yml` runs the [lychee](https://github.com/lycheeverse/lychee) link checker on pushes and pull requests.
- Re-run the workflow from the GitHub Actions tab if you need to validate fixes for broken links locally.

## Project structure

```
.
├─ assets/             # Brand logo and hero illustration
├─ css/styles.css      # Shared styles and focus/skip link utilities
├─ js/main.js          # Navigation toggle and runtime helpers
├─ *.html              # Static marketing pages (including 404.html)
├─ sitemap.xml         # Canonical URLs for search engines
├─ robots.txt          # Crawl directives referencing the sitemap
├─ CNAME               # Custom domain for GitHub Pages
└─ .github/workflows/  # Pages deploy + link check pipelines
```

## Deployment

GitHub Actions deploys the site to GitHub Pages on each push to `main` via `.github/workflows/pages.yml`. Because the site is static, no build step is required: the workflow uploads the repository contents and publishes them directly.

Once the workflow succeeds the site is served from https://global-investment-consulting.github.io/Complyo-site/ (or the configured custom domain).

## License

Released under the MIT License. See [LICENSE](LICENSE) for details.
