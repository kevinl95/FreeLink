# FreeLink

This Netlify template lets you create censorship-resistant redirects. Deploy your own redirect site in seconds.

## Why?

Certain platforms censor links to important services. This allows you to generate your own **censorship-resistant link** using a free Netlify account.

Why not just use a link shortener? Platforms can easily censor link shorteners, just like they can the link you're trying to post. FreeLink hopes to create a game of whack-a-mole with unique domains per user that are too hard to censor.

## Deploy to Netlify

Click the button below to deploy this project:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kevinl95/FreeLink)

## Setup

1. Click **"Deploy to Netlify"** above.
2. Enter the **URL** you want to redirect to when prompted.
3. Set up a **custom domain** in Netlify settings.

By default, Netlify gives you a free subdomain like `your-site.netlify.app`, but you can connect your own domain for better branding and stability.

### Option 1: Buy a New Domain in Netlify

1. Go to your Netlify Dashboard → Domain Settings.
2. Click "Add a Custom Domain" → "Register a New Domain".
3. Follow the steps to purchase a domain and Netlify will handle the setup for you.

### Option 2: Use an Existing Domain

If you already own a domain (from Namecheap, Google Domains, etc.):

1. Go to your Netlify Dashboard → Domain Settings.
2. Click "Add a Custom Domain" and enter your domain name.
3. Follow the instructions to update your domain’s DNS settings:
    - Set a CNAME record pointing `www.yourdomain.com` to `your-site.netlify.app`.
    - (Optional) Set an A record pointing `yourdomain.com` to Netlify’s IP (found in their docs).
4. Wait for the DNS changes to propagate (usually a few minutes to an hour).

### Option 3: Use a Free Domain

### 🌍 Free Domain Options  
If you want to use a custom domain without paying, here are some free options:  

- **[InfinityFree](https://infinityfree.net/domains/)** – Provides free `.epizy.com` and `.rf.gd` subdomains.  
- **[DuckDNS](https://www.duckdns.org/)** – Free dynamic DNS with subdomains (`yourname.duckdns.org`).  
- **[No-IP](https://www.noip.com/)** – Free subdomains like `yourname.ddns.net` (requires renewal every 30 days).  
- **[Dynu](https://www.dynu.com/)** – Free subdomains with no monthly renewal requirement.  
- **[EU.org](https://nic.eu.org/)** – Free `.eu.org` domains (requires manual approval but works worldwide).  

### 💰 Cheap Domain Options  
If you want full control over your domain, you can get one for **$1–$5 per year**:  

- **[Namecheap](https://www.namecheap.com/)** – Frequently offers $1 `.xyz` or `.online` domains.  
- **[Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)** – No markup, sells at wholesale prices.  
- **[Porkbun](https://porkbun.com/)** – Regularly has $1–$3 domain deals.  
