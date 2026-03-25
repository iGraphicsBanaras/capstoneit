
# Capstone IT Trends — Full Website Clone

## Overview
Rebuild the Capstone IT Trends website exactly as it appears on the original, matching all colors, layout, text, images, and structure. This phase covers the Homepage + 5 service pages.

## Design System
- **Primary background**: Dark navy blue (#1a1b4b / deep blue gradient)
- **Accent colors**: Orange (#f97316), Yellow (#eab308), Red (#ef4444)
- **Text**: White on dark backgrounds
- **Cards**: Semi-transparent dark cards with subtle borders
- **Font style**: Clean, modern sans-serif
- **Logo**: Capstone IT Trends logo (sourced from original site)

## Pages to Build

### 1. Homepage (/)
- **Top bar**: Phone number + email on dark strip
- **Header/Navbar**: Logo left, nav links (Home, Services dropdown, About, Portfolio, Technologies dropdown, Blogs, Contact), "Get Quote" CTA button
- **Hero Section**: Background image with overlay, tagline "We Don't Just Build, We Enhance Your Business Value", heading "Inspiring Innovation through Seamless IT Solutions", description text, "Get Started" + "Explore Services" buttons, 4 service cards (Web Dev, Digital Marketing, Mobile Apps, AI Solutions) on the right
- **Stats Bar**: 5+ Years, 100+ Projects, 110+ Clients, 10+ Developers
- **Services Section**: "Comprehensive IT Solutions For Your Business" — 16 service cards in a grid (Web Dev, Mobile App, SEO, PPC, Social Media, Email Marketing, AI, Blockchain, AR/VR, IoT, Game Dev, E-commerce, UI/UX, Custom CRM, Cloud Solutions, QA)
- **Why Choose Us Section**: Background image, 6 cards (Proven Results, Customers First, Your Ideas Matter, We Know Technology, Focus On ROI, Affordable Services)
- **Tech Stack Section**: Tabbed view (Mobile, Frontend, Backend, Database, Cloud & DevOps) showing technology logos
- **Portfolio Section**: 6 project cards with images, tags, and tech stack pills
- **Testimonials Section**: Client review cards with photos, names, designations, and quotes
- **Contact Form Section**: Form with fields (Name, Email, Phone, Service, Budget, Timeline, Details) + contact info sidebar
- **Footer**: Company info, quick links, services links, contact details, social media icons, copyright

### 2. Service Page Template (shared layout for all 5 service pages)
Each service page follows the same structure:
- **Hero**: "Premium Service" badge, page title, subtitle description, "Get Started" + "View Portfolio" buttons, hero image
- **Description Section**: 2 paragraphs about the service
- **Key Features & Benefits**: 6 feature cards in a grid
- **Development Process**: 5 numbered steps
- **Expertise Lists**: 2-column checklist (services + industries)
- **CTA Section**: "Ready to Transform..." with consultation button + phone number

### 3. Service Pages Content
- `/services/website-design` — Website Design Services
- `/services/graphic-design` — Graphic Design Services  
- `/services/oracle-dba` — Oracle DBA Services
- `/services/mongodb-development` — MongoDB Development Services
- `/services/crm-software` — CRM Software Development

### 4. Shared Components
- **Header** with sticky navigation, Services dropdown menu, mobile hamburger menu
- **Footer** with all links, contact info, social icons
- **WhatsApp & Phone floating buttons** (bottom-right corner)

### 5. Images
All images will be loaded directly from the original website URL (capstoneittrends.com) to ensure exact visual match.

## Routing
```
/                              → Homepage
/services/website-design       → Website Design
/services/graphic-design       → Graphic Design
/services/oracle-dba           → Oracle DBA
/services/mongodb-development  → MongoDB Development
/services/crm-software         → CRM Software
```
