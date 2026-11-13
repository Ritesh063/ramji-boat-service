# 🚀 How to Host This Website on Google (Complete Guide)

This website is statically optimized and pre-configured to be hosted directly on **Google's infrastructure** with **Google Firebase Hosting** (Recommended) or **Google Cloud Storage / Cloud Run**.

---

## 🌟 Method 1: Google Firebase Hosting (Recommended)

Google Firebase Hosting is Google's official, fastest, and most cost-effective platform for hosting modern React/Vite websites.

### Why Google Firebase Hosting?
- **100% Free Tier:** Generous free monthly bandwidth and storage.
- **Global Google CDN:** Ultra-fast page loading from Google edge servers around the world.
- **Free Automatic SSL Certificate:** HTTPS is automatically provisioned and renewed by Google.
- **Custom Domain Support:** Connect `ramjiboatservices.com` with 1 click.
- **Zero Server Maintenance:** Fully managed by Google.

---

### Step-by-Step Instructions:

#### Step 1: Install Firebase CLI
Open PowerShell or your terminal and run:
```bash
npm install -g firebase-tools
```

#### Step 2: Log in to Your Google Account
```bash
firebase login
```
A Google authentication window will open in your browser. Log in with your preferred Google account.

#### Step 3: Create a Free Project in Firebase
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **"Add project"**.
3. Name it: `ramji-boat-services` (or your chosen name).
4. (Optional) Disable Google Analytics or enable it if you want visitor tracking.
5. Click **"Create Project"**.

#### Step 4: Link Your Project
In your project folder (`e:\Varanashi nav booking`), initialize or verify your project:
```bash
firebase use --add
```
Select the project you just created in the Firebase console.

*(Note: `firebase.json` is already created for you in the project directory, pointing to the `dist` folder!)*

#### Step 5: Build and Deploy to Google
Run:
```bash
# 1. Build the production files
npm run build

# 2. Deploy to Google Hosting
firebase deploy
```

Once the command finishes, you will see your live Google URL:
```text
✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/ramji-boat-services/overview
Hosting URL: https://ramji-boat-services.web.app (or .firebaseapp.com)
```

---

## 🌐 Connecting a Custom Domain (e.g. `www.ramjiboatservices.com`)

1. Open your project in [Firebase Console](https://console.firebase.google.com/).
2. Navigate to **Hosting** in the left menu.
3. Click **"Add Custom Domain"**.
4. Enter your domain name (e.g., `ramjiboatservices.com` or `www.ramjiboatservices.com`).
5. Copy the DNS records (A Records or CNAME) shown by Google and paste them into your domain registrar (GoDaddy, Namecheap, Hostinger, Google Domains, etc.).
6. Google will automatically verify your domain and issue a free SSL certificate within a few hours.

---

## 📈 Ranking on Google (Local SEO & Google Search Console)

To ensure Ramji Boat Services ranks on Google when tourists search for *"Varanasi boat ride"* or *"Ganga aarti boat booking"*:

### 1. Submit to Google Search Console
1. Visit [Google Search Console](https://search.google.com/search-console).
2. Add your website URL (`https://your-domain.web.app` or your custom domain).
3. Under **Sitemaps**, enter:
   `https://your-domain.web.app/sitemap.xml`
4. Click **Submit**. Google will crawl all pages, images, and Schema markup immediately.

### 2. Connect with Google Business Profile (Google Maps)
1. Go to [Google Business Profile](https://www.google.com/business/).
2. Create or claim **"Ramji Boat Services"**.
3. Set Category: **Boat Tour Agency** or **Tour Operator**.
4. Set Address: **Madarwan, Samneghat, Lanka, BHU, Varanasi, Uttar Pradesh 221005**.
5. Set Phone: **8299027010**.
6. Set Website link to your deployed Google Hosting URL.
7. Add photos of the Big Boat and Small Boat.

---

## ☁️ Method 2: Google Cloud Storage (Bucket Hosting)

If you prefer using pure Google Cloud Platform (GCP):
1. Open [Google Cloud Console](https://console.cloud.google.com/).
2. Create a bucket named after your domain (e.g. `www.ramjiboatservices.com`).
3. Set public access (`allUsers` as `Storage Object Viewer`).
4. Set Website Configuration:
   - Index page: `index.html`
   - Error page: `index.html`
5. Upload the contents of the `dist/` directory using `gcloud storage`:
   ```bash
   gcloud storage cp -r dist/* gs://www.ramjiboatservices.com/
   ```

---

## 🐳 Method 3: Google Cloud Run (Containerized)

If you want a containerized deployment:
1. A simple `Dockerfile` using Nginx alpine can serve the `dist/` folder.
2. Build and push to Google Artifact Registry:
   ```bash
   gcloud run deploy ramji-boat-services --source .
   ```

---

## 📞 Questions & Support
For any questions regarding customization or deployment, refer to the developer guide in `README.md`.
