# 🚀 Deployment Guide - Rochvilles & Co. Website

**Quick Start**: Deploy this application on **Railway** - the recommended platform for Express.js apps.

⚠️ **NOT compatible with Vercel** (requires major refactoring for serverless)

---

## ⚠️ Important: Platform Compatibility

### ✅ Recommended Platform

This is a **traditional full-stack Express.js application** with persistent sessions.

**Railway** ⭐ THE RECOMMENDED PLATFORM
- Perfect for Express apps with persistent sessions
- Built-in PostgreSQL database
- Simple one-click deployment
- Free tier ($5/month credit)
- Automatic SSL certificates
- **[Complete Guide: DEPLOYMENT_RAILWAY.md](./DEPLOYMENT_RAILWAY.md)**

### 📌 Alternative Platforms (Optional)

If Railway doesn't meet your needs, these platforms also support Express + PostgreSQL:

- **Render** - Good Node.js support, free tier available
- **Fly.io** - Container-based deployment, global distribution
- **DigitalOcean App Platform** - Full PaaS solution

### ❌ NOT Recommended

**Vercel** - Does NOT support this application without major refactoring:
- Vercel uses serverless functions, this app uses `server.listen()`
- Session management incompatible with serverless
- Would require complete backend rewrite

---

## 📚 Documentation

Choose your deployment platform:

### Primary Guide (Recommended)
- **[DEPLOYMENT_RAILWAY.md](./DEPLOYMENT_RAILWAY.md)** - Complete Railway deployment guide ⭐

### Alternative Platforms
- **Render.com** - Similar to Railway, good Node.js support
- **Fly.io** - Good for containerized deployments
- **DigitalOcean App Platform** - Full PaaS solution

### Quick Reference
- **[DEPLOY_CHECKLIST.md](./DEPLOY_CHECKLIST.md)** - Step-by-step checklist

---

## 🎯 Quick Deployment (Railway)

### 1. Prerequisites
```bash
# Ensure code is pushed to GitHub
git push origin main

# Ensure build works locally
npm run build
```

### 2. Deploy to Railway

1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Add PostgreSQL database
6. Set environment variables:
   ```
   DATABASE_URL=(auto-provided by Railway PostgreSQL)
   SESSION_SECRET=(generate with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
   NODE_ENV=production
   ```
7. Deploy! 🚀

### 3. Initialize Database

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login and link
railway login
railway link

# Push database schema
railway run npm run db:push
```

### 4. Add Custom Domain

1. Railway → Settings → Domains
2. Add your domain
3. Update DNS at your registrar
4. SSL auto-generates

---

## 🗄️ Database: Neon PostgreSQL

### Option A: Use Railway's PostgreSQL (Recommended)
- Automatically configured
- DATABASE_URL provided automatically
- Easy backups

### Option B: Use Neon (External)
1. Create account at [neon.tech](https://neon.tech)
2. Create new project
3. Copy connection string
4. Add to Railway environment variables

---

## 📋 Environment Variables

Required for all platforms:

| Variable | Value | How to Get |
|----------|-------|------------|
| `DATABASE_URL` | `postgresql://...` | Railway PostgreSQL or Neon |
| `SESSION_SECRET` | 32+ random characters | `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |
| `NODE_ENV` | `production` | Type manually |

---

## 🔧 Tech Stack

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Express.js + Node.js
- **Database**: PostgreSQL (Neon or Railway)
- **Session**: PostgreSQL session store
- **Build**: Vite (frontend) + esbuild (backend)

---

## 📁 Project Structure

```
├── client/          # React frontend
├── server/          # Express backend
├── shared/          # Shared types & schemas
├── dist/            # Build output (generated)
│   ├── public/      # Frontend build
│   └── index.js     # Backend bundle
└── attached_assets/ # Images & assets
```

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your DATABASE_URL

# Push database schema
npm run db:push

# Start development server
npm run dev
```

Access at: http://localhost:5000

---

## 🏗️ Production Build

```bash
# Build both frontend and backend
npm run build

# Test production build locally
npm start
```

Output:
- `dist/public/` - Frontend static files
- `dist/index.js` - Backend server bundle

---

## 📊 Post-Deployment

### Create Admin User

```sql
-- Generate password hash at https://bcrypt-generator.com/ (10 rounds)

INSERT INTO users (username, password, email, role)
VALUES (
  'admin',
  '$2a$10$your-bcrypt-hash-here',
  'admin@rochvilles.co.uk',
  'admin'
);
```

### Populate Content

Login to admin at: `https://yourdomain.com/admin`

- Add services
- Add testimonials  
- Publish articles
- Configure pricing

---

## 🧪 Testing

```bash
# Type checking
npm run check

# Build test
npm run build

# Production test
npm start
```

---

## 📈 Monitoring

Recommended tools:
- **Uptime**: UptimeRobot (free)
- **Analytics**: Google Analytics or Plausible
- **Errors**: Sentry (free tier)

---

## 🔐 Security Checklist

- [ ] `SESSION_SECRET` is strong (32+ random characters)
- [ ] `DATABASE_URL` includes `?sslmode=require`
- [ ] Admin password is strong
- [ ] No secrets committed to Git
- [ ] HTTPS enabled (automatic on Railway)

---

## 💰 Cost Estimate

### Railway Free Tier
- **$5 credit per month** (free)
- Covers most small-medium traffic sites

### If You Exceed Free Tier
- ~$10-20/month for moderate traffic
- Database storage is usually the largest cost

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Test locally first
npm run build

# Check logs in Railway dashboard
```

### Database Connection Error
```bash
# Verify DATABASE_URL is set
# Should include ?sslmode=require for Neon
# Railway PostgreSQL works automatically
```

### Admin Can't Login
```bash
# Verify:
# 1. Admin user exists in database
# 2. SESSION_SECRET is set  
# 3. Session table exists (auto-created)
```

---

## 📞 Support

- **Railway Docs**: https://docs.railway.app
- **Neon Docs**: https://neon.tech/docs
- **This Project**: See detailed guides in this folder

---

## 🎉 Ready to Deploy?

1. ✅ Read **[DEPLOYMENT_RAILWAY.md](./DEPLOYMENT_RAILWAY.md)**
2. ✅ Follow **[DEPLOY_CHECKLIST.md](./DEPLOY_CHECKLIST.md)**
3. ✅ Deploy to Railway
4. 🎉 Go live!

---

## ❓ Why Not Vercel?

Vercel is designed for:
- Static sites
- Serverless functions (must be stateless)
- Next.js applications

This application uses:
- Traditional Express server with `server.listen()`
- Persistent session management
- Long-running processes

To deploy on Vercel, you would need to:
1. Refactor entire backend to serverless functions
2. Replace session management with JWT or external session store
3. Rewrite middleware to be stateless
4. Handle routing completely differently

**Result**: Not worth the effort. Use Railway instead! 🚂

---

**Happy deploying!** 🚀
