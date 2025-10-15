# Rochvilles & Co Accountants - Marketing Website

## Overview

This is a professional marketing website for Rochvilles & Co, an accounting firm based at 411 Ilford Lane, Ilford, Essex IG1 2SN, serving London and surrounding areas. The site showcases their services including tax planning, bookkeeping, payroll, contractor accounting, compliance, and financial services. Built as a modern single-page application with multiple routes, it features animated components, testimonials, interactive calculators, and comprehensive service information pages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server with HMR support
- **Wouter** for client-side routing (lightweight React Router alternative)
- **TanStack Query** (React Query) for server state management and data fetching

**UI Framework & Styling**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Framer Motion** for advanced animations and parallax effects
- Custom design system following "new-york" shadcn style with professional accounting aesthetics

**Design System**
- Color palette emphasizes trust and professionalism with deep corporate blue primary colors
- Light/Dark mode support with localStorage persistence
- Typography uses Inter font family throughout
- Animation library includes hover effects, parallax scrolling, and view-triggered animations
- Responsive breakpoints following Tailwind standards

**Component Architecture**
- Reusable animated components (AnimatedServiceCard, AnimatedStatsSection, ParallaxHero)
- Composite UI components (Header, Footer, CTASection)
- Interactive features (TestimonialCarousel, InteractiveTaxCalculator)
- Page-level components for each route (HomePage, ServicesPage, etc.)

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with TypeScript
- ESM module system (type: "module" in package.json)
- Custom middleware for request logging and JSON response capture
- Error handling middleware with status code detection

**Development Setup**
- Vite middleware integration for SSR in development mode
- Hot Module Replacement (HMR) support
- Custom logging system with timestamp formatting
- Replit-specific plugins for development (cartographer, dev-banner, runtime error overlay)

**API Structure**
- Routes registered through `registerRoutes` function
- API endpoints prefixed with `/api`
- HTTP server created and returned for potential WebSocket upgrades

**Data Layer**
- Interface-based storage abstraction (`IStorage`)
- In-memory storage implementation (`MemStorage`) using Maps
- Designed for easy migration to persistent database (Drizzle ORM configured)

### Data Storage Solutions

**Current Implementation**
- In-memory storage using JavaScript Map for development/demo purposes
- User entity with id, username, and password fields

**Database Ready**
- **Drizzle ORM** configured for PostgreSQL
- **Neon Database** serverless driver installed
- Schema defined in `shared/schema.ts` with Zod validation
- Migration system configured with drizzle-kit
- Database URL expected via environment variable

**Session Management**
- **connect-pg-simple** installed for PostgreSQL session storage
- Ready for Express session middleware integration

### External Dependencies

**Core Libraries**
- `@neondatabase/serverless`: Serverless PostgreSQL driver for edge/serverless environments
- `drizzle-orm`: TypeScript ORM with type-safe query builder
- `drizzle-zod`: Zod schema integration for validation

**UI Component Libraries**
- `@radix-ui/*`: Comprehensive set of unstyled, accessible UI primitives (accordion, dialog, dropdown, etc.)
- `framer-motion`: Production-ready animation library
- `embla-carousel-react`: Carousel/slider functionality
- `cmdk`: Command menu component
- `vaul`: Drawer component

**Form & Validation**
- `react-hook-form`: Performant form state management
- `@hookform/resolvers`: Validation resolver integration
- `zod`: TypeScript-first schema validation

**Utilities**
- `class-variance-authority`: CVA for component variant management
- `clsx` & `tailwind-merge`: Conditional className utilities
- `date-fns`: Date manipulation and formatting
- `nanoid`: Unique ID generation

**Development Tools**
- `@replit/vite-plugin-*`: Replit development experience enhancements
- `tsx`: TypeScript execution for development server
- `esbuild`: Fast bundler for production builds

**Assets**
- Stock images stored in `attached_assets/stock_images/` directory
- Images imported directly in components using Vite's asset handling