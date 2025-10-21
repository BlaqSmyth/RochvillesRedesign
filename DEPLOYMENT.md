# Deployment Guide for Rochvilles & Co. Website

This guide covers deploying your accounting website to production using **Vercel + Neon PostgreSQL** or alternative platforms.

---

## 🎯 Quick Overview

**Tech Stack:**
- Frontend: React + Vite + Tailwind CSS
- Backend: Express.js + Node.js
- Database: PostgreSQL (Neon)
- Session Store: PostgreSQL

---

## 📋 Pre-Deployment Checklist

### ✅ Before You Start

1. **Create accounts** (all free tiers available):
   - [ ] [Vercel](https://vercel.com) - Frontend & Backend hosting
   - [ ] [Neon](https://neon.tech) - PostgreSQL database
   - [ ] [GitHub](https://github.com) - Code repository

2. **Prepare your code**:
   - [ ] Push all code to GitHub repository
   - [ ] Ensure no sensitive data in code (API keys, passwords)
   - [ ] Test locally that `npm run build` works

---

## 🗄️ Step 1: Set Up Neon Database

### Create Database

1. Go to [console.neon.tech](https://console.neon.tech)
2. Click **"Create Project"**
3. Choose:
   - **Project name**: `rochvilles-production`
   - **Region**: Choose closest to your users (e.g., EU for UK clients)
   - **PostgreSQL version**: Latest (15+)
4. Click **"Create Project"**

### Get Connection String

1. In your Neon project, click **"Dashboard"**
2. Find the **"Connection Details"** section
3. Copy the connection string (looks like):
   ```
   postgresql://username:password@ep-xxx.region.aws.neon.tech/neondb?sslmode=require
   ```
4. **Save this** - you'll need it for Vercel

### Initialize Database Schema

**From your local machine:**

1. Create `.env` file with your Neon connection string:
   ```bash
   DATABASE_URL=postgresql://your-neon-connection-string
   SESSION_SECRET=generate-random-32-character-string
   NODE_ENV=production
   ```

2. Push database schema to Neon:
   ```bash
   npm run db:push
   ```

3. **Verify** in Neon dashboard that tables were created:
   - articles
   - services
   - testimonials
   - pricing_tiers
   - business_types
   - payroll_packages
   - additional_services
   - quotes
   - session (created automatically)
   - users

### Create Admin User

You'll need to create the admin account directly in the database:

1. Go to Neon dashboard → **SQL Editor**
2. Run this SQL (change username/password):
   ```sql
   -- Generate password hash (example: "admin123")
   -- Use bcrypt online tool: https://bcrypt-generator.com/
   -- Set rounds to 10
   
   INSERT INTO users (username, password, email, role)
   VALUES ('admin', '$2a$10$YourBcryptHashHere', 'admin@rochvilles.co.uk', 'admin');
   ```

3. **Alternative**: Use this script to create admin user:
   ```bash
   node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('YourPasswordHere', 10));"
   ```
   Then insert the hash into the SQL above.

---

## 🚀 Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to [vercel.com](https://vercel.com)** and sign in
2. Click **"Add New Project"**
3. **Import your GitHub repository**:
   - Click "Import" next to your repo
   - If not listed, click "Adjust GitHub App Permissions"

4. **Configure Build Settings**:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

5. **Add Environment Variables**:
   Click "Environment Variables" and add:
   
   | Name | Value |
   |------|-------|
   | `DATABASE_URL` | Your Neon connection string |
   | `SESSION_SECRET` | Random 32+ character string |
   | `NODE_ENV` | `production` |

   **Generate SESSION_SECRET**:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

6. Click **"Deploy"**
7. Wait 2-3 minutes for build to complete
8. You'll get a URL like: `https://rochvilles-xxxxx.vercel.app`

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variables
vercel env add DATABASE_URL
vercel env add SESSION_SECRET
vercel env add NODE_ENV

# Deploy again with env vars
vercel --prod
```

---

## 🌐 Step 3: Connect Custom Domain

### Get Domain Ready

**What you need from your domain provider:**
- Access to DNS management panel
- Ability to add A/CNAME records OR change nameservers

### Add Domain in Vercel

1. Go to your Vercel project → **Settings** → **Domains**
2. Enter your domain: `rochvilles.co.uk`
3. Click **"Add"**

### Configure DNS Records

Vercel will show you which records to add. Choose one method:

#### Method 1: Using Nameservers (Easiest)

**In your domain registrar** (GoDaddy, Namecheap, etc.):
1. Find "Nameservers" or "DNS" settings
2. Change to Vercel's nameservers:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
3. Save and wait 24-48 hours for propagation

#### Method 2: Using DNS Records

**In your domain registrar's DNS management**:

Add these records:

| Type | Name/Host | Value | TTL |
|------|-----------|-------|-----|
| A | `@` | `76.76.21.21` | 3600 |
| CNAME | `www` | `cname.vercel-dns.com` | 3600 |

### Verify Domain

1. Wait 5-30 minutes for DNS propagation
2. Check Vercel dashboard - should show ✅ "Valid"
3. Visit your domain - should load your site!

---

## 🔧 Step 4: Post-Deployment Tasks

### Populate Initial Data

**Important**: Your database has the schema but might need initial data.

1. **Add Services** (if not already in database):
   - Login to admin portal: `https://yourdomain.com/admin`
   - Go to Services and add your 26 services

2. **Add Testimonials**:
   - Admin → Testimonials
   - Add client testimonials

3. **Add Pricing Tiers**:
   - Should already be in database from development
   - Verify in admin portal

4. **Publish Articles**:
   - Admin → Articles
   - Create/publish tax tip articles

### Test Everything

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Services page displays all services
- [ ] Tax tips page shows articles
- [ ] Quote wizard functions properly
- [ ] Admin login works
- [ ] Admin can create/edit content
- [ ] Contact form works (if implemented)
- [ ] Mobile responsive design works
- [ ] Dark mode toggles correctly

### Security Checks

- [ ] SESSION_SECRET is strong and unique
- [ ] DATABASE_URL is not exposed in frontend
- [ ] Admin password is strong
- [ ] HTTPS is enabled (Vercel does this automatically)
- [ ] No development secrets in production

---

## 🔄 Updating Your Site

### Making Changes

1. **Update code locally**
2. **Test locally**: `npm run dev`
3. **Commit to GitHub**:
   ```bash
   git add .
   git commit -m "Update services page"
   git push
   ```
4. **Vercel auto-deploys** from GitHub (takes 2-3 minutes)

### Database Changes

If you modify the schema in `shared/schema.ts`:

```bash
# Test locally first
npm run db:push

# If it works, Vercel will use the same DATABASE_URL
# and schema will be updated on next deployment
```

---

## ⚠️ Important Notes

### Vercel Limitations

**⚠️ Potential Issue**: Vercel is designed for serverless functions, not traditional Express servers. Your app might have issues with:
- Session persistence across serverless function invocations
- Long-running connections
- WebSocket support (if added later)

### Alternative: Railway (Recommended for Express Apps)

If you encounter issues with Vercel, consider **Railway.app**:

**Benefits**:
- ✅ Better for traditional Express servers
- ✅ Persistent processes (better for sessions)
- ✅ Easy PostgreSQL integration
- ✅ Simple environment variable management
- ✅ Free tier available

**Quick Railway Deployment**:

1. Go to [railway.app](https://railway.app)
2. "Start a New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Add environment variables (same as Vercel)
5. Railway auto-detects Node.js and deploys
6. Add custom domain in Railway dashboard

---

## 📞 Support Resources

### If Deployment Fails

**Common Issues**:

1. **Build Error**: Check Vercel build logs
   - Usually missing dependencies
   - Run `npm install` and `npm run build` locally to test

2. **Database Connection Error**:
   - Verify DATABASE_URL is correct
   - Ensure it includes `?sslmode=require`
   - Check Neon database is not paused (free tier auto-pauses)

3. **404 on routes**:
   - Check `vercel.json` routing configuration
   - Ensure `dist/index.js` exists after build

4. **Session issues**:
   - Verify SESSION_SECRET is set
   - Check PostgreSQL session table was created

### Getting Help

- **Vercel Docs**: https://vercel.com/docs
- **Neon Docs**: https://neon.tech/docs
- **Railway Docs**: https://docs.railway.app (alternative platform)

---

## 🎉 Success Checklist

Before announcing your site is live:

- [ ] Custom domain working (e.g., rochvilles.co.uk)
- [ ] All pages load without errors
- [ ] Admin portal accessible and functional
- [ ] Database populated with services, testimonials, pricing
- [ ] Quote wizard calculates correctly
- [ ] Mobile version looks good
- [ ] Contact information is correct
- [ ] Footer links work
- [ ] Analytics/tracking installed (Google Analytics, etc.)
- [ ] SSL certificate active (green padlock in browser)

---

## 📊 Monitoring & Maintenance

### Regular Tasks

**Weekly**:
- Check Neon database usage (free tier: 0.5 GB storage)
- Review Vercel analytics for traffic

**Monthly**:
- Update dependencies: `npm update`
- Review and update content (articles, services)
- Check for security updates

### Backup Strategy

**Database Backups** (Neon):
1. Neon has automatic backups (7 days on free tier)
2. For manual export:
   - Neon dashboard → Your project → "Restore"
   - Or use `pg_dump` command

---

## 💰 Cost Estimate

### Free Tier Limits

**Vercel Free**:
- ✅ Unlimited deployments
- ✅ 100 GB bandwidth/month
- ✅ Custom domain
- ✅ SSL certificate

**Neon Free**:
- ✅ 0.5 GB storage
- ✅ 3 projects
- ✅ Auto-suspend after inactivity

**Total Monthly Cost**: **£0** for moderate traffic

### If You Exceed Free Tier

**Vercel Pro**: £20/month
**Neon Scale**: ~£10-20/month (depends on usage)

---

## 🚀 Next Steps

1. ✅ Complete database setup
2. ✅ Deploy to Vercel
3. ✅ Connect custom domain
4. ✅ Populate content
5. ✅ Test thoroughly
6. 🎉 **Go Live!**

---

**Questions?** Review the troubleshooting section or consult the platform documentation linked above.

**Good luck with your deployment!** 🎉
