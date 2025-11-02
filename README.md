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

### Analytics (Plausible)
- The Plausible snippet in each page head is pre-configured for `complyo.eu`.
- If you need a different domain, update the `data-domain` attribute (or comment out the script if analytics should remain disabled).

### Status link
- Footer links point to `https://status.complyo.eu`. Adjust the URL in each footer if the status page changes.

### Custom domain
- GitHub Pages uses the `CNAME` file (`www.complyo.eu`). In DNS, create a CNAME record for `www` pointing to `global-investment-consulting.github.io`.
- After updating DNS, visit the repository settings and confirm the custom domain plus HTTPS enforcement.

### SEO and sharing assets
- `sitemap.xml` and `robots.txt` live at the repository root and are already configured with canonical URLs.
- Each page includes Open Graph and Twitter metadata. Replace the temporary logo reference with a dedicated 1200x630 image at `assets/og-card.png` when available.
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
