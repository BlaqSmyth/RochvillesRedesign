# Render + Supabase Deployment Guide

**Complete guide** for deploying Rochvilles & Co. website using **Render** (hosting) + **Supabase** (PostgreSQL database).

This combination provides a **100% free deployment** for small-medium traffic sites! 🎉

---

## 🎯 Why Render + Supabase?

### Render (Hosting)
- ✅ **Free tier**: Permanent free hosting (spins down after 15 min inactivity)
- ✅ **Express support**: Perfect for traditional Node.js servers
- ✅ **Auto-deployment**: Deploys from GitHub automatically
- ✅ **Free SSL**: Automatic HTTPS certificates
- ✅ **Easy setup**: Simple environment variable management

### Supabase (Database)
- ✅ **Free PostgreSQL**: 500MB database storage
- ✅ **Connection pooling**: Built-in for better performance
- ✅ **Dashboard**: Visual database management
- ✅ **Automatic backups**: Daily backups included
- ✅ **Extras**: Auth, storage, real-time (if needed later)

**Total cost: $0/month** ✅

---

## 📋 Prerequisites

- [ ] GitHub account with your code pushed
- [ ] Domain name (optional, for custom domain)

---

## Part 1: Set Up Supabase Database

### 1. Create Supabase Account

1. Go to [supabase.com](https://supabase.com)
2. Click **"Start your project"**
3. Sign in with GitHub

### 2. Create New Project

1. Click **"New Project"**
2. Fill in details:
   - **Name**: `rochvilles-production`
   - **Database Password**: Generate a strong password (save it!)
   - **Region**: Choose closest to your users (e.g., `eu-west-1` for UK)
   - **Pricing Plan**: Free
3. Click **"Create new project"**
4. Wait 2-3 minutes for database to initialize

### 3. Get Database Connection String

1. In Supabase dashboard, click **"Project Settings"** (gear icon)
2. Go to **"Database"** tab
3. Scroll to **"Connection string"** section
4. Select **"URI"** tab
5. Copy the connection string (looks like):
   ```
   postgresql://postgres:[YOUR-PASSWORD]@db.xxx.supabase.co:5432/postgres
   ```
6. Replace `[YOUR-PASSWORD]` with the database password you created
7. **Save this connection string** - you'll need it for Render

**Important**: Your final `DATABASE_URL` should look like:
```
postgresql://postgres:your-actual-password@db.xxx.supabase.co:5432/postgres
```

### 4. Enable Connection Pooling (Recommended)

For better performance with serverless/free tier:

1. In Supabase → **"Database"** settings
2. Find **"Connection Pooler"** section
3. Copy the **"Connection string"** under "Transaction mode"
4. Use this pooled connection string instead (recommended for production)

Format:
```
postgresql://postgres.xxx:[PASSWORD]@aws-0-[region].pooler.supabase.com:6543/postgres
```

---

## Part 2: Initialize Database Schema

Before deploying to Render, we need to create the database tables.

### Option 1: From Your Local Machine (Recommended)

1. **Create local `.env` file** with Supabase connection:
   ```bash
   DATABASE_URL=postgresql://postgres:password@db.xxx.supabase.co:5432/postgres
   SESSION_SECRET=any-random-string-for-now
   NODE_ENV=development
   ```

2. **Push database schema**:
   ```bash
   npm run db:push
   ```

3. **Verify tables created**:
   - Go to Supabase dashboard → **"Table Editor"**
   - You should see tables: `users`, `articles`, `services`, `testimonials`, `pricing_tiers`, etc.

### Option 2: Using Supabase SQL Editor

1. Supabase dashboard → **"SQL Editor"**
2. Run Drizzle migrations manually (not recommended, use Option 1)

---

## Part 3: Deploy to Render

### 1. Create Render Account

1. Go to [render.com](https://render.com)
2. Click **"Get Started"**
3. Sign up with GitHub

### 2. Create New Web Service

1. Click **"New +"** → **"Web Service"**
2. Click **"Connect account"** to link GitHub (if not already)
3. Find and select your repository
4. Click **"Connect"**

### 3. Configure Web Service

Fill in the deployment settings:

**Basic Settings:**
- **Name**: `rochvilles` (or your preferred name)
- **Region**: Choose closest to users (e.g., `Frankfurt (EU Central)` for UK)
- **Branch**: `main` (or your default branch)
- **Root Directory**: (leave blank)
- **Runtime**: `Node`

**Build Settings:**
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`

**Instance Type:**
- Select **"Free"** ✅

### 4. Add Environment Variables

Click **"Advanced"** to expand environment variables section.

Add these variables:

| Key | Value | Where to Get |
|-----|-------|--------------|
| `DATABASE_URL` | Your Supabase connection string | From Supabase (Part 1, Step 3) |
| `SESSION_SECRET` | Random 32+ character string | Generate below |
| `NODE_ENV` | `production` | Type manually |

**Generate SESSION_SECRET**:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copy the output and paste as `SESSION_SECRET` value.

### 5. Deploy

1. Click **"Create Web Service"**
2. Render will:
   - Clone your repository
   - Install dependencies
   - Build your application
   - Start the server
3. First deploy takes 3-5 minutes
4. Watch the logs in real-time

### 6. Test Your Deployment

1. Once deployed, Render gives you a URL like: `https://rochvilles.onrender.com`
2. Click the URL to test your site
3. Verify homepage loads correctly

---

## Part 4: Create Admin User

You need to create an admin account to access the CMS.

### Generate Password Hash

**Option 1: Online Tool**
1. Go to [bcrypt-generator.com](https://bcrypt-generator.com/)
2. Enter your desired password
3. Set rounds to `10`
4. Click "Hash"
5. Copy the generated hash

**Option 2: Command Line**
```bash
node -e "console.log(require('bcryptjs').hashSync('YourPasswordHere', 10))"
```

### Insert Admin User

1. Go to Supabase dashboard → **"SQL Editor"**
2. Click **"New query"**
3. Paste this SQL (replace the hash with yours):

```sql
INSERT INTO users (username, password, email, role)
VALUES (
  'admin',
  '$2a$10$your-bcrypt-hash-here',
  'admin@rochvilles.co.uk',
  'admin'
);
```

4. Click **"Run"**
5. Verify in **"Table Editor"** → `users` table

### Test Admin Login

1. Go to your site: `https://your-app.onrender.com/admin`
2. Login with:
   - Username: `admin`
   - Password: (the one you hashed)
3. ✅ Should access admin portal

---

## Part 5: Custom Domain Setup

### 1. Add Domain in Render

1. In Render dashboard → Your service
2. Go to **"Settings"** tab
3. Scroll to **"Custom Domain"**
4. Click **"Add Custom Domain"**
5. Enter your domain: `rochvilles.co.uk`
6. Click **"Save"**

Render will show you DNS records to add.

### 2. Configure DNS at Your Domain Registrar

Log into your domain provider (GoDaddy, Namecheap, etc.) and add these records:

**For root domain (`rochvilles.co.uk`):**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | `@` | Render's IP (shown in dashboard) | 3600 |

**For www subdomain:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | `www` | `your-app.onrender.com` | 3600 |

### 3. Wait for DNS Propagation

- DNS changes take 5 minutes to 48 hours
- Usually happens within 30 minutes
- Check status in Render dashboard

### 4. Enable HTTPS

1. Once DNS is verified, Render automatically provisions SSL certificate
2. Your site will be accessible via `https://rochvilles.co.uk`
3. ✅ Free SSL certificate from Let's Encrypt

---

## Part 6: Populate Content

### Login to Admin Portal

URL: `https://your-domain.com/admin`

### Add Content

1. **Services** (should already be there from migration)
   - Verify all 26 services are present
   - Edit if needed

2. **Testimonials**
   - Add client testimonials
   - Include name, company, role, feedback, rating

3. **Articles (Tax Tips)**
   - Create tax tip articles
   - Use rich text editor
   - Publish when ready

4. **Pricing** (should already be configured)
   - Verify pricing tiers
   - Test quote wizard

---

## 🔧 Post-Deployment Configuration

### Enable Render Auto-Deploy

Render auto-deploys from GitHub by default. Every `git push` triggers a new deployment.

**To manually deploy:**
1. Render dashboard → Your service
2. Click **"Manual Deploy"** → **"Deploy latest commit"**

### Monitor Your Application

**Render Dashboard:**
- **Logs**: Real-time application logs
- **Metrics**: CPU, memory usage
- **Events**: Deployment history

**Supabase Dashboard:**
- **Database**: Browse tables, run queries
- **Logs**: Database query logs
- **Usage**: Storage and bandwidth metrics

---

## 💰 Cost & Usage Monitoring

### Free Tier Limits

**Render Free Tier:**
- ✅ Unlimited bandwidth
- ✅ Auto-spin down after 15 min inactivity
- ✅ Spins up on request (takes ~30 seconds)
- ⚠️ 750 hours/month (enough for one service)

**Supabase Free Tier:**
- ✅ 500 MB database storage
- ✅ Unlimited API requests
- ✅ 50,000 monthly active users
- ✅ Daily backups (7 days retention)

### When You Might Need to Upgrade

**Render Paid Plan ($7/month):**
- No auto-sleep (always on)
- Faster builds
- More compute resources

**Supabase Pro ($25/month):**
- 8 GB database storage
- 7-day Point-in-Time Recovery
- Daily backups (30 days retention)

---

## 🎨 Optimize Free Tier Performance

### 1. Prevent Render Sleep (Optional)

Your app spins down after 15 min inactivity. To keep it warm:

**UptimeRobot (Free):**
1. Sign up at [uptimerobot.com](https://uptimerobot.com)
2. Add monitor:
   - **URL**: `https://your-app.onrender.com`
   - **Interval**: 5 minutes
3. This pings your site every 5 min, keeping it warm ✅

### 2. Optimize Database

Add indexes for frequently queried fields (in Supabase SQL Editor):

```sql
-- Speed up article queries
CREATE INDEX idx_articles_published ON articles(published);
CREATE INDEX idx_articles_category ON articles(category);

-- Speed up service queries
CREATE INDEX idx_services_category ON services(category);
CREATE INDEX idx_services_published ON services(published);
```

---

## 🔄 Updating Your Site

### Code Changes

1. **Make changes locally**
2. **Test**: `npm run dev`
3. **Commit and push to GitHub**:
   ```bash
   git add .
   git commit -m "Update services page"
   git push origin main
   ```
4. **Render auto-deploys** (2-3 minutes)
5. Check deployment in Render dashboard

### Database Schema Changes

If you modify `shared/schema.ts`:

1. **Update schema locally**
2. **Push to database**:
   ```bash
   DATABASE_URL=your-supabase-url npm run db:push
   ```
3. **Deploy code** (git push)

---

## 🐛 Troubleshooting

### Build Fails on Render

**Check:**
- Render → Logs tab for error messages
- Verify `npm run build` works locally
- Check all dependencies in `package.json`

**Common fixes:**
```bash
# Test locally
npm install
npm run build
npm start
```

### Database Connection Error

**Check:**
1. `DATABASE_URL` is correctly set in Render environment variables
2. Supabase database is not paused (shouldn't happen on free tier)
3. Connection string includes the correct password
4. Try connection pooler URL instead of direct connection

**Test connection:**
```bash
# Local test
DATABASE_URL=your-supabase-url npm run db:push
```

### App Crashes on Start

**Check Render logs:**
- Missing environment variable (usually `SESSION_SECRET`)
- Database connection failing
- Port binding (Render sets `PORT` automatically)

**Verify environment variables:**
- `DATABASE_URL` ✅
- `SESSION_SECRET` ✅
- `NODE_ENV=production` ✅

### Site is Slow (First Load)

This is normal for free tier:
- Render spins down after 15 min inactivity
- First request takes ~30 seconds (cold start)
- Subsequent requests are fast

**Solutions:**
1. Use UptimeRobot to keep warm (see optimization section)
2. Upgrade to Render paid plan ($7/month, no sleep)

### Admin Can't Login

**Check:**
1. Admin user exists in Supabase → Table Editor → `users`
2. Password hash is correct (bcrypt)
3. `SESSION_SECRET` is set in Render
4. Session table exists (auto-created by `connect-pg-simple`)

---

## ✅ Deployment Checklist

Before going live:

- [ ] Supabase database created and accessible
- [ ] Database schema pushed (`npm run db:push`)
- [ ] Admin user created in database
- [ ] Render web service deployed successfully
- [ ] All environment variables set (`DATABASE_URL`, `SESSION_SECRET`, `NODE_ENV`)
- [ ] Site accessible via Render URL
- [ ] Custom domain configured (if using)
- [ ] SSL certificate active
- [ ] Admin portal login works
- [ ] All pages load correctly
- [ ] Services populated (26 services)
- [ ] Testimonials added
- [ ] Articles published
- [ ] Quote wizard tested and working
- [ ] Mobile responsive verified
- [ ] Dark mode toggle works

---

## 📊 Monitoring & Maintenance

### Weekly Tasks
- [ ] Check Render deployment status
- [ ] Review Supabase usage (database size)
- [ ] Check application logs for errors

### Monthly Tasks
- [ ] Update dependencies: `npm update`
- [ ] Review and update content (new articles)
- [ ] Check for security updates
- [ ] Backup database (Supabase has automatic backups)

### Recommended Tools

**Uptime Monitoring:**
- UptimeRobot (free, 5-min checks)
- Better Uptime (free tier)

**Analytics:**
- Google Analytics
- Plausible (privacy-friendly)

**Error Tracking:**
- Sentry (free tier available)

---

## 🆘 Support Resources

- **Render Docs**: https://render.com/docs
- **Render Community**: https://community.render.com
- **Supabase Docs**: https://supabase.com/docs
- **Supabase Discord**: https://discord.supabase.com

---

## 🎉 Success!

Your Rochvilles & Co. website is now live on **Render + Supabase**!

### Next Steps

1. ✅ **Test everything** thoroughly
2. 📊 **Set up monitoring** (UptimeRobot)
3. 📈 **Add analytics** (Google Analytics)
4. 🎯 **Promote your site** to clients
5. 📝 **Regular content updates** via admin portal

### Advantages of This Setup

- ✅ **$0/month** for small-medium traffic
- ✅ **Auto-deployment** from GitHub
- ✅ **Free SSL** certificates
- ✅ **Scalable** (upgrade when needed)
- ✅ **Professional** database with backups
- ✅ **Easy to manage** via dashboards

---

**Congratulations on your deployment!** 🚀

Your professional accounting website is now serving clients worldwide!
