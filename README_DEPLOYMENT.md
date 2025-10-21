# 🚀 Deployment Guide - Rochvilles & Co. Website

**Platform**: Render + Supabase (100% Free!)

This application is deployed using **Render** for hosting and **Supabase** for PostgreSQL database.

⚠️ **NOT compatible with Vercel** (requires serverless architecture)

---

## ✅ Why Render + Supabase?

This is a **traditional full-stack Express.js application** with persistent sessions.

**Render + Supabase** offers:
- ✅ **$0/month** - Permanent free tier
- ✅ Professional PostgreSQL with dashboard (Supabase)
- ✅ Auto-deployment from GitHub
- ✅ Automatic SSL certificates
- ✅ Easy database management
- ✅ Built-in connection pooling

---

## 📚 Complete Deployment Guide

**👉 Follow the step-by-step guide**: **[DEPLOYMENT_RENDER_SUPABASE.md](./DEPLOYMENT_RENDER_SUPABASE.md)**

This comprehensive guide covers:
1. ✅ Supabase database setup
2. ✅ Render web service deployment
3. ✅ Environment variables configuration
4. ✅ Database schema initialization
5. ✅ Admin user creation
6. ✅ Custom domain setup
7. ✅ Troubleshooting & monitoring

---

## 🎯 Quick Overview

### 1. Set Up Database (Supabase)
- Create Supabase account
- Create new project
- Get PostgreSQL connection string
- Configure connection pooling

### 2. Deploy Application (Render)
- Connect GitHub repository
- Configure build & start commands
- Add environment variables
- Auto-deploy from GitHub

### 3. Initialize & Configure
- Push database schema
- Create admin user
- Populate content via CMS
- Connect custom domain

---

## 📋 Environment Variables Required

| Variable | Description | Where to Get |
|----------|-------------|--------------|
| `DATABASE_URL` | PostgreSQL connection string | Supabase dashboard |
| `SESSION_SECRET` | 32+ random characters | Generate: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |
| `NODE_ENV` | Set to `production` | Type manually |

---

## 🔧 Tech Stack

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Express.js + Node.js
- **Database**: PostgreSQL (Supabase)
- **Hosting**: Render
- **Session**: PostgreSQL session store
- **Build**: Vite (frontend) + esbuild (backend)

---

## 💰 Cost Breakdown

### Render Free Tier
- ✅ **Free forever**
- ⚠️ Spins down after 15 min inactivity
- ⚠️ First request after sleep takes ~30 seconds
- ✅ Unlimited bandwidth

**Tip**: Use [UptimeRobot](https://uptimerobot.com) (free) to ping your site every 5 minutes and prevent sleep.

### Supabase Free Tier
- ✅ **Free forever**
- ✅ 500 MB database storage
- ✅ Unlimited API requests
- ✅ 50,000 monthly active users
- ✅ Daily backups (7 days retention)

**Total Cost: $0/month** 🎉

---

## 📁 Project Structure

```
├── client/                  # React frontend
├── server/                  # Express backend
├── shared/                  # Shared types & schemas
├── dist/                    # Build output (generated)
│   ├── public/             # Frontend build
│   └── index.js            # Backend bundle
└── DEPLOYMENT_RENDER_SUPABASE.md  # Complete deployment guide
```

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Supabase DATABASE_URL

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

## 🔐 Security Checklist

- [ ] `SESSION_SECRET` is strong (32+ random characters)
- [ ] `DATABASE_URL` uses connection pooling
- [ ] Admin password is strong
- [ ] No secrets committed to Git (.gitignore configured)
- [ ] HTTPS enabled (automatic on Render)

---

## 📈 Post-Deployment Monitoring

### Recommended Tools
- **Uptime**: [UptimeRobot](https://uptimerobot.com) (free, prevents cold starts)
- **Analytics**: Google Analytics or Plausible
- **Errors**: Sentry (free tier)

### Dashboards
- **Render**: Monitor deployment logs, resource usage
- **Supabase**: Database queries, storage, backups

---

## 🆘 Troubleshooting

### Build Fails on Render
```bash
# Test locally first
npm run build

# Check Render logs for specific error
# Common issues: missing dependencies, environment variables
```

### Database Connection Error
- Verify `DATABASE_URL` is set in Render
- Use Supabase connection pooler URL (recommended)
- Check Supabase database is not paused

### Admin Can't Login
- Verify admin user exists in Supabase (Table Editor → users)
- Check `SESSION_SECRET` is set in Render
- Session table auto-created by `connect-pg-simple`

### Site is Slow (First Load)
- Normal for Render free tier (cold start ~30 seconds)
- Set up UptimeRobot to ping every 5 minutes
- Or upgrade to Render paid plan ($7/month for always-on)

---

## 📞 Support Resources

- **Render Docs**: https://render.com/docs
- **Render Community**: https://community.render.com
- **Supabase Docs**: https://supabase.com/docs
- **Supabase Discord**: https://discord.supabase.com
- **Project Guide**: [DEPLOYMENT_RENDER_SUPABASE.md](./DEPLOYMENT_RENDER_SUPABASE.md)

---

## 🎉 Ready to Deploy?

1. ✅ Code pushed to GitHub
2. ✅ Read **[DEPLOYMENT_RENDER_SUPABASE.md](./DEPLOYMENT_RENDER_SUPABASE.md)**
3. ✅ Follow the step-by-step guide
4. 🎉 Go live!

---

## ❓ Why Not Vercel?

Vercel is designed for:
- Static sites
- Serverless functions (stateless)
- Next.js applications

This application uses:
- Traditional Express server with `server.listen()`
- Persistent session management
- Long-running processes

**Not compatible without complete backend rewrite.**

---

**Happy deploying!** 🚀
