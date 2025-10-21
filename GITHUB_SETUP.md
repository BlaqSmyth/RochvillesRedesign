# 📦 GitHub Repository Setup

Quick guide to push your Rochvilles & Co. website to GitHub for deployment.

---

## ✅ Prerequisites

- GitHub account ([Sign up free](https://github.com/signup))
- Git installed locally
- Your code ready on local machine (or Replit)

---

## 🚀 Quick Setup (From Scratch)

### 1. Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Fill in details:
   - **Repository name**: `rochvilles-website` (or your choice)
   - **Description**: Professional website for Rochvilles & Co. Accountants
   - **Visibility**: 
     - **Private** ✅ (recommended - keeps code private)
     - Public (if you want open source)
   - **DO NOT** initialize with README, .gitignore, or license
3. Click **"Create repository"**

### 2. Initialize Git (First Time Only)

If you haven't already initialized git in your project:

```bash
# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: Rochvilles & Co. website"
```

### 3. Connect to GitHub

GitHub will show you commands after creating the repo. Use these:

```bash
# Add GitHub as remote (replace YOUR-USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/rochvilles-website.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/marcellioguh/rochvilles-website.git
git branch -M main
git push -u origin main
```

### 4. Enter Credentials

When prompted:
- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (not your password)

**Generate Token:**
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token (classic)"
3. Name: `Rochvilles Deploy`
4. Expiration: 90 days (or your choice)
5. Scopes: Check `repo` (full control)
6. Click "Generate token"
7. **Copy the token** (you won't see it again!)
8. Use this token as your password when pushing

---

## 🔄 Updating Your Repository

After making changes to your code:

```bash
# Check what changed
git status

# Add changed files
git add .

# Commit with message
git commit -m "Update: describe your changes"

# Push to GitHub
git push origin main
```

**Example workflow:**
```bash
git add .
git commit -m "Fix: Quote wizard pricing calculation"
git push origin main
```

---

## 📂 What Gets Pushed to GitHub?

Your `.gitignore` file prevents sensitive data from being uploaded:

### ✅ Uploaded (Safe)
- All source code (`client/`, `server/`, `shared/`)
- Configuration files (`package.json`, `tsconfig.json`, etc.)
- Documentation (`.md` files)
- Public assets (images, etc.)

### ❌ NOT Uploaded (Protected)
- `.env` files (secrets/passwords)
- `node_modules/` (dependencies)
- `dist/` (build files)
- `*.log` (log files)
- IDE settings

**Important**: NEVER commit your `.env` file! It contains sensitive information.

---

## 🔐 Security Best Practices

### 1. Never Commit Secrets

**DON'T commit:**
- `.env` file
- Database passwords
- API keys
- Session secrets

**These are protected by `.gitignore` ✅**

### 2. Use .env.example Instead

Your repo includes `.env.example`:
```env
DATABASE_URL=postgresql://username:password@hostname/database
SESSION_SECRET=your-random-secret-here
NODE_ENV=production
```

This shows what variables are needed WITHOUT exposing real values.

### 3. Check Before Pushing

Always verify:
```bash
# See what will be committed
git status

# See actual changes
git diff
```

If you see sensitive data, DON'T push! Add to `.gitignore` first.

---

## 🚢 Deploy After Pushing

Once your code is on GitHub:

### For Railway Deployment
1. Go to [railway.app](https://railway.app)
2. "New Project" → "Deploy from GitHub repo"
3. Select `rochvilles-website`
4. Follow [DEPLOYMENT_RAILWAY.md](DEPLOYMENT_RAILWAY.md)

### For Render + Supabase
1. Set up Supabase database first
2. Go to [render.com](https://render.com)
3. "New Web Service" → Connect GitHub
4. Select `rochvilles-website`
5. Follow [DEPLOYMENT_RENDER_SUPABASE.md](DEPLOYMENT_RENDER_SUPABASE.md)

**Both platforms auto-deploy when you push to GitHub!** 🎉

---

## 🔄 Auto-Deployment Workflow

After initial setup, your workflow becomes:

```bash
# 1. Make changes to code
# 2. Test locally
npm run dev

# 3. Commit and push
git add .
git commit -m "Add new feature"
git push origin main

# 4. Platform auto-deploys (2-5 minutes)
# 5. Check deployment in Railway/Render dashboard
# 6. Visit your live site!
```

---

## 🐛 Troubleshooting

### "Remote origin already exists"

If you see this error:
```bash
# Remove existing remote
git remote remove origin

# Add correct remote
git remote add origin https://github.com/YOUR-USERNAME/rochvilles-website.git
```

### Authentication Failed

- Make sure you're using a **Personal Access Token**, not your password
- Token must have `repo` scope
- Generate new token if expired

### Files Not Uploading

Check `.gitignore`:
```bash
# View what's ignored
cat .gitignore

# Force add specific file (if needed)
git add -f filename.txt
```

### Push Rejected

If your local is behind remote:
```bash
# Pull latest changes first
git pull origin main

# Then push
git push origin main
```

---

## 📊 GitHub Repository Settings

### Recommended Settings

After pushing, configure in GitHub:

1. **Settings → General**
   - Disable: "Wikis", "Projects" (unless needed)
   - Enable: "Issues" (for bug tracking)

2. **Settings → Branches**
   - Add branch protection rule for `main`:
     - Require pull request before merging (if team)
     - Require status checks before merging

3. **Settings → Secrets** (for deployment)
   - Add secrets if using GitHub Actions later
   - NOT needed for Railway/Render (they manage secrets)

---

## 👥 Collaborating with Team

If you have other developers:

### Add Collaborators
1. GitHub repo → Settings → Collaborators
2. Add by username/email
3. They can clone:
   ```bash
   git clone https://github.com/YOUR-USERNAME/rochvilles-website.git
   cd rochvilles-website
   npm install
   ```

### Branch Workflow
```bash
# Create feature branch
git checkout -b feature/new-service-page

# Make changes, commit
git add .
git commit -m "Add new service page"

# Push branch
git push origin feature/new-service-page

# Create Pull Request on GitHub
# Review & merge
```

---

## 📋 Quick Reference

### First Time Setup
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/rochvilles-website.git
git push -u origin main
```

### Regular Updates
```bash
git add .
git commit -m "Describe changes"
git push origin main
```

### Check Status
```bash
git status          # What changed?
git log             # Commit history
git remote -v       # Connected repos
```

---

## ✅ Checklist Before First Push

- [ ] `.gitignore` includes `.env` (protected) ✅
- [ ] `.env.example` exists (template) ✅
- [ ] No sensitive data in code ✅
- [ ] README.md exists ✅
- [ ] GitHub repo created
- [ ] Git initialized locally
- [ ] Remote added
- [ ] Code tested locally
- [ ] Ready to push!

---

## 🎉 You're Ready!

Your code is now on GitHub and ready for deployment!

### Next Steps
1. ✅ Code pushed to GitHub
2. 🚀 Deploy to Railway or Render + Supabase
3. 🌐 Connect custom domain
4. 📊 Monitor and maintain

**Choose your deployment platform:**
- [Railway Guide](DEPLOYMENT_RAILWAY.md)
- [Render + Supabase Guide](DEPLOYMENT_RENDER_SUPABASE.md)

---

**Happy coding!** 💻
