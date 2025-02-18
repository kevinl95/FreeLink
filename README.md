# FreeLink

This Netlify template lets you create censorship-resistant redirects. Deploy your own redirect site in seconds.

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

If you don’t want to buy a domain, you can use:

- [Freenom](https://www.freenom.com/) for .tk, .ml, .ga, .cf, .gq domains.
- [EU.org](https://nic.eu.org/) for free .eu.org domains.
- [DuckDNS](https://www.duckdns.org/) for a free subdomain (`yourname.duckdns.org`).

## Why?

Certain platforms censor links to important services. This allows you to generate your own **censorship-resistant link** using a free Netlify account.
