# Xiaobin Lu — Academic Homepage

A complete, responsive academic personal website for **Xiaobin Lu**, an incoming PhD student (March 2027) at the University of Sydney, researching **Causal Representation Learning from Multiple Distributions**.

Designed as a traditional research homepage, rather than a GitHub repository landing page. No Node.js, build tools, or hosting services are required; GitHub Pages serves the site as static HTML/CSS/JavaScript.

## Sections

- About and academic introduction
- News and updates
- Research interests and current research directions
- Publications (with DOI links and expandable BibTeX)
- Research projects, industry experience
- Education
- Teaching and academic service
- Research methods and technical skills
- Contact information
- A dedicated, print-friendly academic CV at `cv.html`

## Deploy to GitHub Pages

1. In GitHub, open the repository `xilu5047/xilu5047.github.io`.
2. Choose **Add file → Upload files** (if the repository is empty, choose **uploading an existing file**).
3. Extract the ZIP on your computer. Upload the **contents of this folder** to the repository root. Specifically, `index.html` must appear at `xilu5047.github.io/index.html`, *not* inside an additional folder.
4. Click **Commit changes**.
5. Open **Settings → Pages → Build and deployment**.
6. Select **Deploy from a branch**, branch **main**, folder **/ (root)**, and save.
7. Open `https://xilu5047.github.io/` after GitHub publishes the site.

### Replacing an older version

If you already uploaded a prior version, upload/overwrite the new root files (`index.html`, `styles.css`, `script.js`, `README.md`) and add the new `cv.html`, `cv.css`, `robots.txt`, `sitemap.xml`, `assets/favicon.svg`. Remove obsolete assets if desired. Commit all changes.

## Editing content

- `index.html` — all homepage text, research topics, publications, education, and experience.
- `cv.html` — printable academic curriculum vitae, with a **Print / Save as PDF** button.
- `styles.css` — site appearance and mobile responsiveness.
- `cv.css` — printable CV layout.
- `script.js` — theme switching and mobile navigation.

### Profile photo

The left sidebar currently uses a stylised **XL** monogram as a deliberate placeholder; it is not intended to imitate a photograph. To use your own portrait:

1. Add an appropriately cropped image such as `assets/profile.jpg`.
2. Replace the `<div class="portrait">…</div>` markup in `index.html` with:

```html
<img class="portrait" src="assets/profile.jpg" alt="Portrait of Xiaobin Lu" style="object-fit:cover; width:100%;" />
```

A square or approximately 4:5 crop works best. Test desktop and mobile views.

### Accuracy and future changes

- **Incoming PhD** status is shown as *incoming in March 2027*; update it to *PhD Student* once you have commenced.
- CRL projects are framed as *current research interests*, not as accepted or published results.
- Only two confirmed, peer-reviewed publications are listed. Add new papers with confirmed metadata and DOI/arXiv URLs when appropriate.
- Experience and education were drafted from the CV available during site preparation. Verify dates, roles, and any publicly shared information before deployment.
- The CV intentionally omits a phone number.

## Repository structure

```
index.html
cv.html
styles.css
cv.css
script.js
README.md
.nojekyll
robots.txt
sitemap.xml
assets/
  favicon.svg
```

## License

No license is provided by default. All content is © Xiaobin Lu. Add an explicit license only if you want to permit reuse of site source code.
