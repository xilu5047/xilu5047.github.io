# Xiaobin Lu — Academic Homepage (No-photo edition)

Source for **https://xilu5047.github.io/**.

A responsive, typography-focused academic personal homepage. No photo or photo reference is used. The site includes research interests, peer-reviewed publications, research and industry experience, education, teaching, academic peer reviewing (The Web Conference / WWW and AusDM), contact links, and a separate printable `cv.html` page.

## Deploy on GitHub Pages

Repository: `https://github.com/xilu5047/xilu5047.github.io`

The GitHub Pages source should be `Deploy from a branch` → `main` → `/(root)`.

If replacing the previous photo-based version, from Terminal:

```bash
cd ~/Projects/xilu5047.github.io
unzip -o ~/Downloads/xiaobin-lu-academic-homepage-no-photo.zip -d .
rm -f assets/profile.jpg
git status --short
git add -A
git commit -m "Redesign academic homepage without profile photo; add reviewer service"
git push
```

Important: extraction updates pages and styles without erasing the Git history. The `rm -f` removes the previously uploaded photo from the repository on the next push; it does not remove a copy elsewhere on your Mac.

## Files

- `index.html` — personal website
- `styles.css` — site styling, responsive layout
- `script.js` — mobile navigation and footer year
- `cv.html` — print-friendly academic CV
- `cv.css` — CV styling and print rules
- `assets/favicon.svg` — abstract text logo (not a personal photo)
- `.nojekyll`, `sitemap.xml`, `robots.txt` — GitHub Pages metadata

## Updating content

Edit `index.html` for website content and `cv.html` for the CV. Review dates and the reviewer service descriptions before public release, and include conference year or track only when verified.

To preview locally, use `open index.html` on macOS.
