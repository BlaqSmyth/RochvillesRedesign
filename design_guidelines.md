# Rochvilles & Co Accountants - Design Guidelines

## Design Approach
**Reference-Based with Professional Services Focus**
Drawing inspiration from Stripe's corporate professionalism, Linear's typography clarity, and modern financial services aesthetics. The design emphasizes trust, expertise, and accessibility while maintaining a contemporary edge that differentiates from traditional accounting firm websites.

## Core Design Principles
- Trust through clarity: Clean layouts with excellent hierarchy
- Professional sophistication without stuffiness
- Information accessibility with scannable content
- Credibility through subtle, refined visual touches

## Color Palette

**Light Mode:**
- Primary: 221 83% 25% (Deep corporate blue - trust/stability)
- Secondary: 221 83% 35% (Lighter blue for interactive elements)
- Surface: 0 0% 100% (Pure white backgrounds)
- Surface Secondary: 220 13% 97% (Light gray for cards/sections)
- Text Primary: 222 47% 11% (Near black)
- Text Secondary: 215 16% 47% (Medium gray)
- Accent: 142 76% 36% (Success green for CTAs/positive actions)
- Border: 220 13% 91% (Subtle dividers)

**Dark Mode:**
- Primary: 221 83% 55% (Brightened blue)
- Secondary: 221 70% 45%
- Surface: 222 47% 11% (Deep navy background)
- Surface Secondary: 215 25% 17% (Elevated surfaces)
- Text Primary: 0 0% 98%
- Text Secondary: 220 9% 70%
- Accent: 142 76% 46%
- Border: 215 25% 25%

## Typography
**Font Families:**
- Headings: 'Inter', sans-serif (600-700 weight)
- Body: 'Inter', sans-serif (400-500 weight)
- Accent/Numbers: 'Inter', sans-serif (500-600 weight)

**Scale:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Page Titles: text-4xl md:text-5xl, font-semibold
- Section Headings: text-3xl md:text-4xl, font-semibold
- Card Titles: text-xl md:text-2xl, font-semibold
- Body Large: text-lg, font-normal
- Body: text-base, font-normal
- Small: text-sm, font-normal

## Layout System
**Spacing Primitives:** Primarily use 4, 6, 8, 12, 16, 20, 24 units
- Section padding: py-16 md:py-24 lg:py-32
- Card padding: p-6 md:p-8
- Component gaps: gap-4, gap-6, gap-8
- Container: max-w-7xl mx-auto px-4 md:px-6

## Component Library

**Navigation:**
- Sticky header with backdrop blur
- Logo left, navigation center/right
- Primary CTA button in header (Contact/Get Started)
- Mobile: Hamburger menu with slide-in drawer

**Hero Section:**
- Large professional hero image (office environment, team collaboration, or abstract corporate imagery)
- Image treatment: Subtle dark overlay (bg-black/40) for text legibility
- Headline + subheadline + dual CTAs (Primary: "Get Started", Secondary: "Our Services")
- Trust indicators below CTAs (e.g., "Trusted by 500+ businesses" with client logos)

**Service Cards:**
- 3-column grid (lg:), 2-column (md:), single column (base)
- Icon (from Heroicons) + Title + Description + "Learn More" link
- Subtle hover elevation: hover:shadow-lg transition
- Border treatment: border border-border rounded-lg

**Statistics Section:**
- 4-column layout showcasing key metrics
- Large numbers with labels
- Background: Surface Secondary for contrast

**Testimonials:**
- 2-column grid with client quotes
- Include client name, company, role
- Subtle quotation mark styling
- Photo optional but recommended

**CTA Sections:**
- Full-width colored background sections
- Centered content with headline + description + button
- Contrast with surrounding white sections

**Footer:**
- 4-column layout: About, Services, Resources, Contact
- Newsletter signup form
- Social links, compliance info
- Copyright and legal links

**Forms:**
- Clean input styling with focus states
- Labels above inputs
- Validation states with color feedback
- Submit buttons use Accent color

## Images

**Hero Image:**
Large, professional photography positioned as background covering 70vh. Suggested imagery: Modern office setting with natural light, professional team collaboration, or abstract business/financial imagery. Image should convey professionalism and approachability.

**Service Section Icons:**
Use Heroicons for consistent iconography across service cards (Calculator, DocumentText, ChartBar, ShieldCheck, etc.)

**Testimonial Photos:**
Circular headshots (64px diameter) for client testimonials to add authenticity

**Trust Badges/Client Logos:**
Grayscale client logos in a subtle grid below hero or in dedicated section

## Page-Specific Guidelines

**Homepage Flow:**
1. Hero with image background
2. Trust indicators/client logos
3. Services overview (3-4 key services)
4. Why Choose Us section (3-4 differentiators)
5. Statistics/achievements
6. Testimonials
7. CTA section
8. Footer

**Services Page:**
Detailed service cards with expandable content or links to dedicated pages

**Contact Page:**
2-column split: Contact form (left) + Contact info with embedded map (right)

**Fees Page:**
Pricing table with clear package comparisons, transparent pricing structure

All pages maintain consistent header/footer, spacing rhythm, and professional tone throughout.