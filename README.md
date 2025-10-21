# Rochvilles & Co. Accountants - Professional Website

> Modern, full-stack web application for Rochvilles & Co. Accountants with custom CMS, quote wizard, and comprehensive service listings.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)

---

## 🎯 Project Overview

**Rochvilles & Co. Accountants** is a professional accounting firm serving clients nationwide across the UK. This website provides:

- 📊 Comprehensive service catalog (26+ accounting services)
- 💰 Transparent pricing with interactive quote wizard
- 📝 Tax tips and articles blog
- ⭐ Client testimonials
- 🔐 Secure admin CMS for content management
- 📱 Fully responsive, mobile-first design
- 🌓 Dark mode support

**CEO**: Marcelli Oguh (FAIA FCIPA FFA FCMA ChrMgr)  
**Office**: 411 Ilford Lane, Ilford, Essex IG1 2SN, UK

---

## 🚀 Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **TailwindCSS** - Styling
- **shadcn/ui** - Component library
- **TanStack Query** - Data fetching & caching
- **Wouter** - Lightweight routing
- **Framer Motion** - Animations

### Backend
- **Node.js** - Runtime
- **Express** - Web server
- **PostgreSQL** - Database
- **Drizzle ORM** - Type-safe database queries
- **Passport.js** - Authentication
- **bcryptjs** - Password hashing

### Development
- **drizzle-kit** - Database migrations
- **tsx** - TypeScript execution
- **zod** - Schema validation

---

## 📁 Project Structure

```
rochvilles-website/
├── client/                  # Frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── ui/         # shadcn/ui components
│   │   │   └── ...         # Custom components
│   │   ├── pages/          # Page components
│   │   │   ├── admin/      # Admin CMS pages
│   │   │   └── ...         # Public pages
│   │   ├── lib/            # Utilities & helpers
│   │   └── App.tsx         # App entry point
│   └── index.html
│
├── server/                  # Backend application
│   ├── routes.ts           # API routes
│   ├── auth.ts             # Authentication
│   ├── storage.ts          # Database interface
│   ├── index.ts            # Server entry point
│   └── vite.ts             # Vite integration
│
├── shared/                  # Shared code
│   └── schema.ts           # Database schema & types
│
├── scripts/                 # Utility scripts
│   └── migrate-services.ts # Service migration
│
├── .env.example            # Environment template
├── drizzle.config.ts       # Drizzle configuration
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript config
└── vite.config.ts          # Vite configuration
```

---

## 🛠️ Local Development

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org))
- **PostgreSQL** database (local or cloud)
- **npm** or **yarn**

### 1. Clone Repository

```bash
git clone https://github.com/YOUR-USERNAME/rochvilles-website.git
cd rochvilles-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create `.env` file from template:

```bash
cp .env.example .env
```

Edit `.env` with your values:

```env
# Database (local PostgreSQL or cloud)
DATABASE_URL=postgresql://user:password@localhost:5432/rochvilles

# Session secret (generate random string)
SESSION_SECRET=your-random-32-character-secret-here

# Environment
NODE_ENV=development
```

**Generate SESSION_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 4. Initialize Database

Push schema to database:

```bash
npm run db:push
```

### 5. Create Admin User

Generate password hash:

```bash
node -e "console.log(require('bcryptjs').hashSync('YourPassword123', 10))"
```

Insert admin user (use SQL client or psql):

```sql
INSERT INTO users (username, password, email, role)
VALUES (
  'admin',
  '$2a$10$YOUR_HASHED_PASSWORD_HERE',
  'admin@rochvilles.co.uk',
  'admin'
);
```

### 6. Start Development Server

```bash
npm run dev
```

App runs at: **http://localhost:5000**

- Frontend: Vite dev server with hot reload
- Backend: Express server
- Both served on same port ✅

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 5000) |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm start` | Start production server |
| `npm run db:push` | Push database schema changes |
| `npm run db:studio` | Open Drizzle Studio (database GUI) |

---

## 🎨 Features

### Public Features

✅ **Homepage**
- Hero section with CTA
- Service categories overview
- Testimonials carousel
- Tax tips preview
- Contact information

✅ **Services Page**
- 26+ accounting services organized by category
- Detailed service descriptions
- Icon-based visual design
- Quick navigation

✅ **Quote Wizard**
- Interactive multi-step form
- Real-time price calculation
- 9 turnover tiers (£0 to £5M+)
- Employee count-based payroll pricing
- Downloadable quote

✅ **Tax Tips Blog**
- Rich text articles
- Category filtering
- Read more/collapse functionality
- Expert accounting advice

✅ **About Page**
- CEO credentials & qualifications
- Company mission & values
- Professional accreditations

✅ **Contact Page**
- Office location & map
- Contact form
- Phone & email
- Business hours

### Admin CMS Features

🔐 **Secure Authentication**
- Username/password login
- Session-based auth
- Password hashing (bcrypt)

📊 **Content Management**
- **Services**: Add, edit, delete, publish/unpublish
- **Articles**: Rich text editor, categories, publishing
- **Testimonials**: Client feedback management
- **Pricing**: Configure pricing tiers & rates

🎯 **Quote Management**
- View submitted quotes
- Client information access
- Quote details & pricing breakdown

---

## 🚢 Deployment

This application can be deployed to various platforms. Choose based on your needs:

### Recommended Platforms

| Platform | Database | Cost | Best For |
|----------|----------|------|----------|
| **Railway** | Railway PostgreSQL | $5 credit/month (free) | Easiest setup |
| **Render + Supabase** | Supabase PostgreSQL | $0/month (free) | Budget-conscious |

### Deployment Guides

📖 **Start here**: [README_DEPLOYMENT.md](README_DEPLOYMENT.md)

**Platform-specific guides:**
- 🚂 [Railway Deployment](DEPLOYMENT_RAILWAY.md)
- 🎨 [Render + Supabase Deployment](DEPLOYMENT_RENDER_SUPABASE.md)
- ✅ [Quick Checklist](DEPLOY_CHECKLIST.md)

### ⚠️ Platform Compatibility

- ✅ **Railway**: Perfect for Express + PostgreSQL
- ✅ **Render**: Perfect for Express + PostgreSQL
- ✅ **Fly.io**: Compatible
- ✅ **DigitalOcean App Platform**: Compatible
- ❌ **Vercel**: NOT compatible (doesn't support Express servers)
- ❌ **Netlify**: NOT compatible (serverless-only)

---

## 🗄️ Database Schema

### Core Tables

**`users`** - Admin authentication
```typescript
- id (serial)
- username (unique)
- password (hashed)
- email
- role ('admin')
```

**`services`** - Service listings
```typescript
- id (serial)
- name
- description
- category
- icon
- published (boolean)
```

**`articles`** - Tax tips blog
```typescript
- id (serial)
- title
- content (rich text)
- excerpt
- category
- published (boolean)
- author
- publishedAt
```

**`testimonials`** - Client reviews
```typescript
- id (serial)
- clientName
- company
- role
- feedback
- rating (1-5)
```

**`pricing_tiers`** - Quote pricing
```typescript
- id (serial)
- turnoverRange
- basePrice
- payrollPerEmployee
- sortOrder
```

**`quote_requests`** - Customer quotes
```typescript
- id (serial)
- companyName
- contactName
- email
- phone
- turnoverRange
- employeeCount
- requiresPayroll
- additionalServices
- estimatedPrice
- createdAt
```

---

## 🔐 Security

- ✅ Password hashing with bcrypt (10 rounds)
- ✅ Session-based authentication
- ✅ CSRF protection via session cookies
- ✅ SQL injection prevention (parameterized queries)
- ✅ XSS protection (React escaping)
- ✅ Environment variable secrets
- ✅ Secure session storage (PostgreSQL)

**Best Practices:**
- Never commit `.env` file
- Use strong `SESSION_SECRET` (32+ characters)
- Keep dependencies updated
- Use HTTPS in production (automatic with Railway/Render)

---

## 🎨 Design System

### Colors

**Brand Colors:**
- Primary: Teal (`#14b8a6`)
- Accent: Amber (`#f59e0b`)

**UI Colors:**
- Background: White / Dark Gray
- Card: Light Gray / Darker Gray
- Text: Dark Gray / Light Gray
- Border: Subtle gray variations

### Typography

- **Headings**: Bold, clear hierarchy
- **Body**: Readable, professional
- **Mono**: Code snippets (if needed)

### Components

Built with **shadcn/ui**:
- Buttons (5 variants)
- Cards & Containers
- Forms & Inputs
- Dialogs & Modals
- Navigation
- Badges & Pills

---

## 📱 Responsive Design

- ✅ Mobile-first approach
- ✅ Breakpoints: mobile, tablet, desktop
- ✅ Touch-friendly interactions
- ✅ Optimized images
- ✅ Fast loading times

---

## 🧪 Testing

Currently manual testing. Consider adding:

- Unit tests (Jest/Vitest)
- Integration tests (React Testing Library)
- E2E tests (Playwright/Cypress)

---

## 🤝 Contributing

This is a private client project. For authorized contributors:

1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes and test locally
3. Commit: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Create Pull Request

---

## 📄 License

**Proprietary** - © 2025 Rochvilles & Co. Accountants. All rights reserved.

This software is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

---

## 📞 Support

For technical support or questions:

- **Developer**: [Your Name/Company]
- **Client**: Rochvilles & Co. Accountants
- **Email**: admin@rochvilles.co.uk
- **Phone**: [Contact Number]

---

## 🙏 Acknowledgments

Built with:
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [TailwindCSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Drizzle ORM](https://orm.drizzle.team)
- [Express](https://expressjs.com)

---

## 📚 Additional Documentation

- [Deployment Guide](README_DEPLOYMENT.md) - Platform overview
- [Railway Setup](DEPLOYMENT_RAILWAY.md) - Railway-specific
- [Render + Supabase Setup](DEPLOYMENT_RENDER_SUPABASE.md) - Render-specific
- [Deploy Checklist](DEPLOY_CHECKLIST.md) - Pre-flight checks
- [Design Guidelines](design_guidelines.md) - UI/UX standards

---

**Built with ❤️ for Rochvilles & Co. Accountants**
