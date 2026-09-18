# Genuine Craftworks — website

A small, static site: no build step, no server. Plain HTML, CSS, and JS.

## Before you launch

Open `index.html` and search for `TODO` — three spots need real details:
1. WhatsApp number (in the Contact section)
2. Email address
3. City / location

The six pieces in the gallery right now are placeholder graphics, not
real photos. Replace them before launch — see below.

## Updating the photo gallery (no coding needed)

1. Save your photo into the `images/gallery/` folder.
   Keep the filename simple — no spaces — e.g. `nameplate-07.jpg`.
2. Open `gallery-data.js`.
3. Copy one block, e.g.:
   ```js
   {
     file: "nameplate-07.jpg",
     title: "Engraved housewarming gift",
     note: "Teak, 25 x 15 cm, custom lettering"
   },
   ```
4. Paste it at the **top** of the `GALLERY_ITEMS` list (so newest shows first),
   change the filename, title, and note.
5. Save, then push to GitHub (see below). Azure rebuilds the live site
   automatically within a minute or two.

To remove an old piece, delete its block from `gallery-data.js`. You can
leave the old photo file in the folder — it just won't show.

Photos work best around 1200px wide, landscape or square. Any `.jpg`,
`.png`, or `.svg` works.

## Deploying to Azure Static Web Apps (free tier)

1. Create a free GitHub account if you don't have one, and a new repository
   (e.g. `genuine-craftworks-site`). Upload this whole folder to it.
2. Go to [portal.azure.com](https://portal.azure.com) and sign in
   (a free Azure account works — card required for verification, but the
   Static Web Apps free plan doesn't charge).
3. Search for **Static Web Apps** → **Create**.
4. Choose the **Free** plan, name the app, and pick the region closest to
   your customers (e.g. Central India).
5. Under Deployment details, sign in to GitHub and select your repository
   and branch (usually `main`).
6. Build details: choose **Custom**. Set:
   - App location: `/`
   - Output location: *(leave blank)*
7. Click **Review + create**, then **Create**. Azure adds a GitHub Actions
   workflow file to your repo automatically and deploys the site — this
   takes about two minutes.
8. Your site is live at a URL like `https://<random-name>.azurestaticapps.net`.

From then on, any push to that branch (including gallery updates) redeploys
automatically.

## Adding a custom domain (optional, still free)

In the Azure portal, open your Static Web App → **Custom domains** → **Add**,
and follow the instructions to point your domain's DNS at Azure. SSL is
issued automatically at no extra cost.

## File structure

```
index.html              the page itself
styles.css               all styling
app.js                    renders the gallery, handles the lightbox and mobile menu
gallery-data.js           <- the file you edit to add/remove photos
staticwebapp.config.json  Azure routing config
images/gallery/           photos referenced by gallery-data.js
```
