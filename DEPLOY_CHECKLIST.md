# 🚀 Quick Deployment Checklist - Railway

Use this checklist to deploy Rochvilles & Co. website to **Railway** (recommended platform).

**⚠️ Note**: This app does NOT work on Vercel. Use Railway, Render, or Fly.io.

---

## Pre-Deployment (Do Once)

### 1. Prepare Code
- [ ] All code pushed to GitHub
- [ ] Ensure `.env` is in `.gitignore` (should be already)
- [ ] Test build locally: `npm run build`
- [ ] Test production mode: `npm start`

### 2. Generate Secrets
```bash
# Generate SESSION_SECRET
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
- [ ] Copy the generated secret (save it securely!)

---

## Railway Deployment Steps

### 1. Create Railway Project

- [ ] Go to [railway.app](https://railway.app) and sign in with GitHub
- [ ] Click **"New Project"**
- [ ] Select **"Deploy from GitHub repo"**
- [ ] Choose your repository
- [ ] Railway auto-detects Node.js ✅

### 2. Add PostgreSQL Database

**Option A: Railway PostgreSQL (Recommended)**
- [ ] In your project, click **"+ New"**
- [ ] Select **"Database"** → **"PostgreSQL"**
- [ ] Railway auto-configures `DATABASE_URL` ✅

**Option B: Use External Neon Database**
- [ ] Create account at [neon.tech](https://neon.tech)
- [ ] Create new project
- [ ] Copy connection string
- [ ] Add manually to Railway environment variables

### 3. Configure Environment Variables

- [ ] Click on your service (web app)
- [ ] Go to **"Variables"** tab
- [ ] Add these variables:

| Variable | Value |
|----------|-------|
| `DATABASE_URL` | Auto-provided by Railway PostgreSQL OR your Neon URL |
| `SESSION_SECRET` | Your generated 32+ character secret |
| `NODE_ENV` | `production` |

### 4. Initialize Database Schema

**Using Railway CLI** (recommended):
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Link to your project
railway link

# Push database schema
railway run npm run db:push
```

**Alternative - Local Connection**:
- [ ] Copy `DATABASE_URL` from Railway
- [ ] Create local `.env` with that URL
- [ ] Run `npm run db:push` locally

### 5. Deploy

- [ ] Railway auto-deploys from GitHub
- [ ] Check **"Deployments"** tab for progress
- [ ] Wait 2-3 minutes for first build
- [ ] ✅ Deployment complete!
- [ ] Click generated URL to test

---

## Custom Domain Setup

### 1. Add Domain in Railway

- [ ] Railway project → **"Settings"** → **"Domains"**
- [ ] Click **"+ Custom Domain"**
- [ ] Enter your domain: `rochvilles.co.uk`

### 2. Configure DNS at Your Registrar

**For www subdomain** (recommended):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | `www` | `your-app.up.railway.app` | 3600 |

**For root domain**:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | `@` | IP from Railway | 3600 |

- [ ] DNS records added
- [ ] Wait 5-30 minutes for propagation
- [ ] ✅ SSL certificate auto-generates

---

## Post-Deployment Tasks

### 1. Create Admin User

**Generate password hash**:
```bash
# Option 1: bcrypt-generator.com (10 rounds)
# Option 2: Command line
node -e "console.log(require('bcryptjs').hashSync('YourPasswordHere', 10))"
```

**Insert into database**:
```sql
INSERT INTO users (username, password, email, role)
VALUES (
  'admin',
  '$2a$10$your-bcrypt-hash-here',
  'admin@rochvilles.co.uk',
  'admin'
);
```

- [ ] Admin user created in database

### 2. Populate Content

Login to admin: `https://yourdomain.com/admin`

- [ ] Services populated (all 26 services should be there from migration)
- [ ] Testimonials added (minimum 5-10)
- [ ] Tax tip articles published (6+ recommended)
- [ ] Pricing tiers verified
- [ ] Quote wizard tested

### 3. Verify Everything Works

#### Public Site
- [ ] Homepage loads
- [ ] All navigation links work
- [ ] Services page shows all 26 services correctly
- [ ] Tax Tips page displays articles
- [ ] About page content correct
- [ ] Contact information accurate
- [ ] Quote wizard:
  - [ ] Business type selection works
  - [ ] Turnover selection works
  - [ ] Price calculation accurate
  - [ ] Payroll options show when employees > 0
  - [ ] Additional services selectable
  - [ ] Quote summary generates
  - [ ] Can submit quote request

#### Admin Portal
- [ ] Can login with credentials
- [ ] Dashboard displays
- [ ] Services management works (view/edit/delete)
- [ ] Articles management works (create/edit/delete)
- [ ] Rich text editor functions
- [ ] Custom category option works for articles
- [ ] Testimonials management works
- [ ] Quotes list displays submitted quotes

#### Cross-Device
- [ ] Desktop Chrome
- [ ] Desktop Safari/Firefox
- [ ] Mobile (iPhone/Android)
- [ ] Tablet
- [ ] Dark mode toggle works on all devices

### 4. Performance & Security

- [ ] Page loads < 3 seconds
- [ ] Images load properly
- [ ] No console errors (check browser dev tools)
- [ ] No broken links
- [ ] SSL active (green padlock in browser)
- [ ] Custom domain working
- [ ] `www` redirects properly (if configured)

---

## Environment Variables Reference

| Variable | Where to Get | Example |
|----------|--------------|---------|
| `DATABASE_URL` | Railway PostgreSQL or Neon | `postgresql://user:pass@host/db?sslmode=require` |
| `SESSION_SECRET` | Generate with crypto | `a1b2c3d4e5f...` (32+ chars) |
| `NODE_ENV` | Type manually | `production` |

---

## Testing Checklist

### Functional Tests
- [ ] All pages accessible
- [ ] Navigation working
- [ ] Forms submit correctly
- [ ] Quote wizard calculates accurately
- [ ] Admin CMS fully functional
- [ ] Dark mode switches properly
- [ ] Mobile responsive design works

### Data Tests
- [ ] All 26 services display on Services page
- [ ] Published articles show on Tax Tips page
- [ ] Testimonials appear on homepage
- [ ] Pricing tiers calculate correctly
- [ ] Quote submissions save to database

### Performance Tests
- [ ] Lighthouse score > 80 (run in Chrome DevTools)
- [ ] Images optimized/loading
- [ ] No layout shift on load
- [ ] Interactive within 3 seconds

---

## Optional Enhancements

### Monitoring (Recommended)
- [ ] **Uptime monitoring**: UptimeRobot (free)
- [ ] **Analytics**: Google Analytics or Plausible
- [ ] **Error tracking**: Sentry (free tier)

### SEO
- [ ] Submit to Google Search Console
- [ ] Create sitemap.xml
- [ ] Meta descriptions on all pages
- [ ] Open Graph tags for social sharing

### Backup
- [ ] Railway PostgreSQL has automatic backups ✅
- [ ] Or set up manual backup script for Neon

---

## Troubleshooting

### Build Fails in Railway

```bash
# Test locally first
npm run build

# Check:
- Railway logs in dashboard
- Node version compatibility  
- All dependencies in package.json
```

**Common fixes**:
- Clear Railway cache and redeploy
- Verify `package.json` has all required dependencies
- Check build logs for specific error

### Database Connection Error

**Check**:
- [ ] `DATABASE_URL` is set in Railway variables
- [ ] For Neon: URL includes `?sslmode=require`
- [ ] Railway PostgreSQL is running (not paused)
- [ ] Database tables exist (run `npm run db:push`)

### Admin Can't Login

**Check**:
- [ ] Admin user exists in `users` table
- [ ] Password hash is correct (bcrypt)
- [ ] `SESSION_SECRET` is set
- [ ] Session table exists (auto-created by connect-pg-simple)

### App Crashes on Start

**Check Railway logs**:
- [ ] Missing environment variable
- [ ] Database connection failing
- [ ] Port binding issue (Railway sets PORT automatically)

---

## Go-Live Checklist

Final verification before announcing:

- [ ] Custom domain active with SSL
- [ ] All content populated
- [ ] Admin portal accessible and tested
- [ ] Quote wizard tested with real scenarios
- [ ] Mobile version perfect
- [ ] Contact information correct
- [ ] No broken links anywhere
- [ ] Performance acceptable
- [ ] Analytics installed (optional)
- [ ] Uptime monitoring active (optional)
- [ ] Client/stakeholder approval received

---

## Post-Launch

### Week 1
- [ ] Monitor Railway usage/metrics
- [ ] Check for any errors in logs
- [ ] Verify uptime monitoring working
- [ ] Review analytics data

### Ongoing Maintenance
- [ ] **Weekly**: Check Railway metrics and database usage
- [ ] **Monthly**: Update npm dependencies
- [ ] **Monthly**: Add new tax tip articles
- [ ] **Quarterly**: Review and update pricing if needed
- [ ] **As needed**: Add client testimonials

---

## Cost Monitoring

### Railway Free Tier
- ✅ $5 credit per month (free)
- ✅ Usually enough for small-medium traffic

### If Exceeding Free Tier
- Typical cost: $10-20/month
- Monitor in Railway → **"Usage"** tab
- Optimize by:
  - Adding database indexes
  - Archiving old data
  - Optimizing images

---

## 🎉 Launch Day!

When everything above is ✅ checked:

1. **Announce**:
   - Email clients
   - Social media posts
   - Update business cards/materials

2. **Monitor**:
   - Watch Railway logs for issues
   - Check uptime monitoring
   - Review analytics daily for first week

3. **Maintain**:
   - Regular content updates via admin portal
   - Respond to quote requests promptly
   - Keep tax tips current

---

## Support Resources

- **Railway Docs**: https://docs.railway.app
- **Railway Discord**: https://discord.gg/railway
- **Neon Docs**: https://neon.tech/docs (if using Neon)

**Detailed Guides**:
- `README_DEPLOYMENT.md` - Overview and platform recommendations
- `DEPLOYMENT_RAILWAY.md` - Complete Railway deployment guide

---

## ✅ Deployment Complete!

Congratulations! Rochvilles & Co. website is now live! 🎉

**What's Next?**
1. Regular content updates (tax tips, testimonials)
2. Monitor performance and uptime
3. Respond to quote requests
4. Promote the website to clients

Good luck! 🚀
