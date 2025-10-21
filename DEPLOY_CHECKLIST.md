# 🚀 Quick Deployment Checklist

Use this checklist to deploy Rochvilles & Co. website to production.

---

## Choose Your Platform

- [ ] **Vercel** - Best for static sites, serverless (see DEPLOYMENT.md)
- [ ] **Railway** - Better for Express apps (RECOMMENDED - see DEPLOYMENT_RAILWAY.md)
- [ ] **Other** - Render, Fly.io, DigitalOcean also work

---

## Pre-Deployment (Do Once)

### 1. Database Setup
- [ ] Create Neon PostgreSQL account at neon.tech
- [ ] Create new project in Neon
- [ ] Copy connection string (save it!)
- [ ] Run `npm run db:push` with your Neon URL to create tables

### 2. Generate Secrets
```bash
# Generate SESSION_SECRET
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
- [ ] Copy the generated secret (save it!)

### 3. Prepare Code
- [ ] Push all code to GitHub
- [ ] Ensure `.env` is in `.gitignore` (it should be already)
- [ ] Test build locally: `npm run build`
- [ ] Test production mode locally: `npm start`

---

## Deployment Steps

### For Vercel:

1. **Deploy**
   - [ ] Go to vercel.com and sign in
   - [ ] Click "New Project"
   - [ ] Import your GitHub repo
   - [ ] Add environment variables:
     ```
     DATABASE_URL=your-neon-connection-string
     SESSION_SECRET=your-generated-secret
     NODE_ENV=production
     ```
   - [ ] Click "Deploy"

2. **Custom Domain**
   - [ ] Vercel → Settings → Domains
   - [ ] Add your domain
   - [ ] Update DNS records at your registrar
   - [ ] Wait for verification (5-30 mins)

### For Railway:

1. **Deploy**
   - [ ] Go to railway.app and sign in
   - [ ] New Project → Deploy from GitHub
   - [ ] Select your repo
   - [ ] Add PostgreSQL database (or use Neon)
   - [ ] Add environment variables:
     ```
     DATABASE_URL=your-connection-string
     SESSION_SECRET=your-generated-secret
     NODE_ENV=production
     ```

2. **Custom Domain**
   - [ ] Railway → Settings → Domains
   - [ ] Add custom domain
   - [ ] Update DNS (CNAME or A record)
   - [ ] SSL auto-generates

---

## Post-Deployment

### 1. Create Admin User

**Option A: Direct Database Insert**
```sql
-- Generate password hash at https://bcrypt-generator.com/ (10 rounds)
-- Example password: admin123

INSERT INTO users (username, password, email, role)
VALUES (
  'admin',
  '$2a$10$your-bcrypt-hash-here',
  'admin@rochvilles.co.uk',
  'admin'
);
```

**Option B: Using Node**
```bash
# Generate hash
node -e "console.log(require('bcryptjs').hashSync('YourPassword', 10))"

# Then insert into database using the hash
```

- [ ] Admin user created

### 2. Populate Content

Login to admin portal: `https://yourdomain.com/admin`

- [ ] Add all 26 services (or verify they're there from migration)
- [ ] Add client testimonials (minimum 5-10)
- [ ] Publish tax tip articles (6+ articles recommended)
- [ ] Verify pricing tiers are correct
- [ ] Test quote wizard with different scenarios

### 3. Verify Everything Works

- [ ] Homepage loads
- [ ] All navigation links work
- [ ] Services page shows all services
- [ ] Tax Tips page displays articles
- [ ] Quote wizard calculates correctly
- [ ] Admin login works
- [ ] Can create/edit/delete content from admin
- [ ] Mobile responsive (test on phone)
- [ ] Dark mode toggle works
- [ ] Forms submit properly

### 4. SEO & Analytics

- [ ] Verify page titles are descriptive
- [ ] Meta descriptions present
- [ ] Add Google Analytics (optional)
- [ ] Add Facebook Pixel (optional)
- [ ] Submit sitemap to Google Search Console (optional)

### 5. Domain & SSL

- [ ] Custom domain connected
- [ ] SSL certificate active (green padlock)
- [ ] `www` redirects properly
- [ ] No mixed content warnings

---

## Environment Variables Reference

### Required Variables

| Variable | Example | Where to Get |
|----------|---------|--------------|
| `DATABASE_URL` | `postgresql://user:pass@host/db?sslmode=require` | Neon dashboard or Railway |
| `SESSION_SECRET` | `a1b2c3...32+ random chars` | Generate with crypto command |
| `NODE_ENV` | `production` | Type manually |

### Optional Variables

| Variable | Example | Purpose |
|----------|---------|---------|
| `PORT` | `5000` | Usually auto-set by platform |
| `ADMIN_EMAIL` | `admin@rochvilles.co.uk` | For notifications |

---

## DNS Records Reference

### For Vercel

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | `@` | `76.76.21.21` | 3600 |
| CNAME | `www` | `cname.vercel-dns.com` | 3600 |

### For Railway

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | `www` | `your-app.up.railway.app` | 3600 |

Or use Railway's provided A record for root domain.

---

## Testing Checklist

### Functional Testing

- [ ] Home page loads
- [ ] Services page displays all 26 services
- [ ] Tax Tips shows published articles
- [ ] About page displays correctly
- [ ] Contact information is correct
- [ ] Quote wizard:
  - [ ] Selects business type
  - [ ] Selects turnover
  - [ ] Calculates price correctly
  - [ ] Shows payroll options when employees > 0
  - [ ] Shows additional services
  - [ ] Generates quote summary
  - [ ] Can submit quote request

### Admin Portal Testing

- [ ] Can login with credentials
- [ ] Dashboard displays statistics
- [ ] Services:
  - [ ] View all services
  - [ ] Create new service
  - [ ] Edit existing service
  - [ ] Delete service (test with dummy)
- [ ] Articles:
  - [ ] View all articles
  - [ ] Create new article
  - [ ] Rich text editor works
  - [ ] Can add custom categories
  - [ ] Publish/unpublish toggle
  - [ ] Delete article
- [ ] Testimonials:
  - [ ] View all testimonials
  - [ ] Add testimonial
  - [ ] Edit testimonial
  - [ ] Delete testimonial
- [ ] Quotes:
  - [ ] View submitted quotes
  - [ ] Can filter/search quotes

### Cross-Browser Testing

- [ ] Chrome (Desktop)
- [ ] Safari (Desktop)
- [ ] Firefox (Desktop)
- [ ] Mobile Safari (iPhone)
- [ ] Mobile Chrome (Android)

### Performance

- [ ] Page loads in < 3 seconds
- [ ] Images load properly
- [ ] No console errors
- [ ] No broken links

---

## Monitoring Setup (Optional but Recommended)

### Uptime Monitoring
- [ ] UptimeRobot (free, 5-min checks)
- [ ] Better Uptime (free tier available)

### Analytics
- [ ] Google Analytics
- [ ] Plausible Analytics (privacy-friendly)

### Error Tracking
- [ ] Sentry (free tier available)
- [ ] LogRocket (session replay)

---

## Troubleshooting

### Build Fails
```bash
# Test locally
npm run build

# Check logs in platform dashboard
# Common fixes:
- Clear build cache
- Verify all dependencies in package.json
- Check Node version compatibility
```

### Database Connection Error
```bash
# Verify connection string
# Should include: ?sslmode=require for external DBs
# Test connection locally with same URL
```

### 404 Errors
```bash
# Verify:
- vercel.json routing is correct
- dist/index.js exists after build
- dist/public folder has frontend files
```

### Admin Can't Login
```bash
# Check:
- Admin user exists in database
- Password hash is correct (bcrypt)
- SESSION_SECRET is set
- Database session table exists
```

---

## Rollback Plan

If deployment fails:

### Vercel
1. Vercel → Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

### Railway
1. Railway → Deployments
2. Select previous deployment
3. Click "Redeploy"

### Database
- Neon has automatic backups (7 days retention)
- Can restore to any point in time

---

## Go-Live Checklist

Before announcing the site:

- [ ] All features tested and working
- [ ] Custom domain active with SSL
- [ ] Content populated (services, articles, testimonials)
- [ ] Admin can login and manage content
- [ ] Mobile version tested
- [ ] Contact information correct
- [ ] Quote wizard tested with real scenarios
- [ ] Performance is acceptable
- [ ] No broken links
- [ ] Analytics installed (optional)
- [ ] Uptime monitoring active (optional)

---

## 🎉 You're Live!

Congratulations! Your Rochvilles & Co. website is now live.

### Next Steps

1. **Monitor first week**: Check analytics and uptime
2. **SEO**: Submit to Google Search Console
3. **Marketing**: Announce on social media, email clients
4. **Content**: Regular blog posts (tax tips)
5. **Maintenance**: Monthly updates and security patches

---

## Support Resources

- **Vercel**: https://vercel.com/docs
- **Railway**: https://docs.railway.app
- **Neon**: https://neon.tech/docs

**Need help?** Check the full deployment guides:
- `DEPLOYMENT.md` - Vercel deployment
- `DEPLOYMENT_RAILWAY.md` - Railway deployment

Good luck! 🚀
