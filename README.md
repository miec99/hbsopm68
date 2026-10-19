# hbsopm68.com

Website for the Harvard Business School OPM 68 batch. A plain static site (HTML, CSS, a little JavaScript), hosted free on GitHub Pages with the custom domain `hbsopm68.com`.

## Structure

```
index.html                         Home page: the batch, next event, list of all events
events/bi-annual-meet-dubai-2026/  Bi-Annual Meet (Dubai) event page + calendar (.ics) file
assets/site.css, assets/site.js    Shared styles and scripts (countdown, menu, animations)
assets/downloads/                  Downloadable PDFs (brochures)
assets/img/                        Brochure cover, social share image, favicon
CNAME                              Tells GitHub Pages to serve hbsopm68.com
```

## Adding a new event

1. Copy the folder `events/bi-annual-meet-dubai-2026/` to `events/<new-event-name>/` and edit the text in its `index.html`.
2. Put the event's PDF in `assets/downloads/` and update the download links.
3. On the home page (`index.html`), copy the block between `EVENT ROW TEMPLATE` and `/EVENT ROW` for the new event.
4. Once an event is over, change its tag from `Upcoming` to `Past`, and point the "Next Gathering" feature at the next event.
5. Commit and push. The site updates within a minute or two.

## DNS (DNSOwl)

- A records for `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- CNAME `www` → `miec99.github.io`
