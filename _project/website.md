# Website Notes — Stop Overthinking Your Irons

## Live URL
- Temporary: https://mthompsm.github.io/Golf-Site/
- Real domain: TBD (buy at namecheap.com)

## GitHub
- Repo: github.com/mthompsm/Golf-Site
- Live branch: gh-pages
- Dev branch: claude/golf-instruction-website-nqcjF

## Tech Stack
- Pure HTML / CSS / JavaScript
- No frameworks, no dependencies
- Hosted on GitHub Pages (free)
- Future: add custom domain

---

## Pages

| Page | File | Purpose |
|------|------|---------|
| Home | index.html | Main sales/conversion page |
| 7 Lessons | lessons.html | Full lesson detail |
| Range Plan | range-plan.html | 40-minute structured practice |
| My Story | about.html | Author story — key trust builder |
| Contact | contact.html | Support / questions |

---

## Buy Buttons (Need Gumroad Links)

Currently placeholder links. Update when Gumroad is set up:

**In index.html — update these hrefs:**
```html
<!-- PDF button -->
<a href="#gumroad-pdf" ...>Buy PDF — $9.99</a>

<!-- Bundle button -->
<a href="#gumroad-bundle" ...>Buy Bundle — $24.99</a>
```

Just provide the Gumroad links and Claude updates them in minutes.

---

## Design

- Color scheme: Deep green (#1a3a2a), Gold (#c9a84c), White
- Font: Georgia (headings), System UI (body)
- Mobile responsive with hamburger menu
- Scroll animations on cards and lesson rows
- Sticky navigation bar

---

## Things Still To Do on Website

- [ ] Review and approve colors/design
- [ ] Add real Gumroad links to buy buttons
- [ ] Add custom domain once purchased
- [ ] Consider adding testimonials section once collected
- [ ] Hide or mark bundle as "Coming Soon" until videos are ready
- [ ] Add Google Analytics (optional — tracks visitor behavior)
- [ ] Submit to Google Search Console after domain is live

---

## DNS Setup (When Domain is Ready)

In Namecheap DNS settings, add:
```
A record → 185.199.108.153
A record → 185.199.109.153
A record → 185.199.110.153
A record → 185.199.111.153
```

Then in GitHub: Settings → Pages → Custom Domain → enter domain → Save

---

## Hosting Cost
- GitHub Pages: Free
- Custom domain: ~$12/year (Namecheap)
- Total: ~$1/month
