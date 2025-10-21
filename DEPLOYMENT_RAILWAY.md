# Railway Deployment Guide

**This is the recommended deployment platform** for Rochvilles & Co. website.

Railway is the ideal platform for this full-stack Express.js application with persistent sessions and PostgreSQL database.

---

## 🚂 Why Railway?

Railway is a modern platform that handles full-stack Node.js apps excellently, with built-in PostgreSQL support.

### ✅ Key Benefits

- ✅ **Perfect for Express**: Traditional server processes with persistent connections
- ✅ **Session management**: Real processes keep sessions stable and secure
- ✅ **Built-in PostgreSQL**: One-click database integration
- ✅ **WebSocket ready**: Support for real-time features if needed
- ✅ **Free tier**: $5 free credit monthly (enough for small business sites)
- ✅ **Auto-deployment**: Deploys automatically from GitHub
- ✅ **Free SSL**: Automatic HTTPS certificates

---

## 📋 Step-by-Step Deployment

### 1. Create Railway Account

1. Go to [railway.app](https://railway.app)
2. Click **"Login"**
3. Sign in with GitHub

### 2. Create New Project

1. Click **"New Project"**
2. Choose **"Deploy from GitHub repo"**
3. Select your repository: `your-username/rochvilles-website`
4. Railway automatically detects Node.js

### 3. Add PostgreSQL Database

**Option A: Use Railway's PostgreSQL (Recommended)**

1. In your project, click **"+ New"**
2. Select **"Database"** → **"Add PostgreSQL"**
3. Railway creates a database and provides `DATABASE_URL` automatically
4. Copy the connection string from the **"Connect"** tab

**Option B: Use Neon (External PostgreSQL)**

1. Create account at [neon.tech](https://neon.tech)
2. Create new project and copy connection string
3. Add `DATABASE_URL` manually in Railway environment variables
4. Ensure connection string includes `?sslmode=require`

### 4. Configure Environment Variables

1. Click on your service (web app)
2. Go to **"Variables"** tab
3. Click **"+ New Variable"** and add:

| Variable | Value | How to Get |
|----------|-------|------------|
| `DATABASE_URL` | `postgresql://...` | From Railway PostgreSQL or Neon |
| `SESSION_SECRET` | Random 32+ chars | Generate with command below |
| `NODE_ENV` | `production` | Type manually |

**Generate SESSION_SECRET**:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 5. Configure Build Settings

Railway auto-detects your setup, but verify:

1. Go to **"Settings"** tab
2. Under **"Build"** section:
   - **Build Command**: `npm run build` ✅ (auto-detected)
   - **Start Command**: `npm start` ✅ (auto-detected)
3. Under **"Deploy"** section:
   - **Root Directory**: `/` ✅
   - **Restart Policy**: Always restart ✅

### 6. Initialize Database Schema

**Option 1: From Railway CLI**

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

**Option 2: Manually via SQL**

1. In Railway, click your PostgreSQL database
2. Go to **"Query"** tab
3. Upload/paste your schema SQL or use Drizzle Studio

**Option 3: From Local with Railway Database**

```bash
# Get DATABASE_URL from Railway
# Copy it and create .env file locally
DATABASE_URL=postgresql://railway-url-here

# Push schema
npm run db:push
```

### 7. Deploy

1. Railway auto-deploys on every GitHub push
2. Check **"Deployments"** tab for progress
3. Wait 2-3 minutes for first build
4. Click the generated URL to view your site!

---

## 🌐 Custom Domain Setup

### Add Your Domain

1. In Railway project → **"Settings"** → **"Domains"**
2. Click **"+ Custom Domain"**
3. Enter your domain: `rochvilles.co.uk`

### Configure DNS (Choose One Method)

#### Method 1: CNAME (Subdomain - Recommended)

**Best for**: `www.rochvilles.co.uk` or `app.rochvilles.co.uk`

In your domain registrar's DNS settings:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | `www` | `your-app.up.railway.app` | 3600 |

#### Method 2: A Record (Root Domain)

**Best for**: `rochvilles.co.uk` (no www)

Railway provides an IP address for A records:

1. Railway will show the IP after you add the domain
2. Add in your DNS:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | `@` | Railway's IP | 3600 |

### SSL Certificate

- ✅ **Automatic**: Railway generates SSL certificate within minutes
- ✅ **Free**: Let's Encrypt certificate
- ✅ **Auto-renewal**: Handles certificate renewals

---

## 🔄 Post-Deployment

### Create Admin User

SSH into Railway or use local connection to Railway database:

```bash
# Using Railway CLI
railway run node

# Then in Node console:
const bcrypt = require('bcryptjs');
const hash = bcrypt.hashSync('YourAdminPassword', 10);
console.log(hash);
```

Then insert into database:
```sql
INSERT INTO users (username, password, email, role)
VALUES ('admin', 'paste-bcrypt-hash-here', 'admin@rochvilles.co.uk', 'admin');
```

### Populate Data

1. Login to admin portal: `https://yourdomain.com/admin`
2. Add services, testimonials, articles, pricing
3. Test quote wizard

---

## 💰 Pricing

### Free Tier

Railway offers:
- ✅ **$5 credit per month** (free)
- ✅ Enough for small-medium traffic sites
- ✅ Pay only for what you use

### Typical Costs

**Light usage** (personal site, small business):
- ~$2-5/month (often covered by free credit)

**Medium usage** (active business site):
- ~$10-15/month

**What uses credits**:
- Server uptime (most of cost)
- Database storage and queries
- Network egress (bandwidth)

### Cost Optimization

**If exceeding free tier**:
1. **Enable sleep mode**: Railway can sleep app after inactivity
2. **Optimize database**: Archive old data, add indexes
3. **Use caching**: Add Redis for frequently accessed data

---

## 🔧 Maintenance

### View Logs

1. Railway dashboard → Your service
2. **"Logs"** tab shows real-time output
3. Filter by error/warn/info

### Monitor Usage

1. **"Metrics"** tab shows:
   - CPU usage
   - Memory usage
   - Network traffic
2. **"Usage"** tab shows billing

### Database Backups

**Automatic**:
- Railway PostgreSQL includes daily backups (14 days retention)

**Manual Export**:
```bash
# Using Railway CLI
railway run pg_dump $DATABASE_URL > backup.sql
```

### Update Application

```bash
# Push to GitHub
git add .
git commit -m "Update services"
git push

# Railway auto-deploys (2-3 minutes)
```

---

## ⚙️ Advanced Configuration

### Custom Build

Create `railway.json` (optional):

```json
{
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm run build"
  },
  "deploy": {
    "startCommand": "npm start",
    "restartPolicyType": "ALWAYS"
  }
}
```

### Health Checks

Add health endpoint in your Express app:

```javascript
// In server/routes.ts
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});
```

Configure in Railway → Settings → Health Check:
- **Path**: `/health`
- **Port**: `5000`

---

## 🐛 Troubleshooting

### Build Fails

**Check**:
1. Logs in Railway dashboard
2. Verify `npm run build` works locally
3. Check all dependencies in package.json

**Common fixes**:
```bash
# Locally test production build
npm run build
npm start
```

### Database Connection Error

**Check**:
1. `DATABASE_URL` is set in Railway variables
2. Railway PostgreSQL is running (not paused)
3. Connection string includes `?sslmode=require` for external DBs

**Fix**:
- For Railway PostgreSQL: Use the connection string from "Connect" tab
- For Neon: Ensure string has `?sslmode=require` at end

### App Crashes on Start

**Check logs**:
1. Railway → Logs tab
2. Look for error messages

**Common issues**:
- Missing `SESSION_SECRET`
- Invalid `DATABASE_URL`
- Port binding (Railway sets PORT automatically)

---

## ✅ Deployment Checklist

Before going live:

- [ ] Database deployed and accessible
- [ ] All environment variables set
- [ ] Database schema pushed (`npm run db:push`)
- [ ] Admin user created
- [ ] Application deploys successfully
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Admin portal accessible
- [ ] All pages load correctly
- [ ] Services/testimonials/pricing populated
- [ ] Quote wizard works
- [ ] Mobile responsive verified

---

## 🎉 Success!

Your Rochvilles & Co. website is now live on Railway!

**Next steps**:
1. Monitor usage in first week
2. Add analytics (Google Analytics, Plausible)
3. Set up uptime monitoring (UptimeRobot, Better Uptime)
4. Regular content updates via admin portal

**Questions?** Check Railway docs: https://docs.railway.app

---

## 📞 Support

- **Railway Discord**: https://discord.gg/railway
- **Railway Docs**: https://docs.railway.app
- **Status Page**: https://status.railway.app

Good luck! 🚂
