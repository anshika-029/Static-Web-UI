#  Business Website

A simple, responsive React website for business services.

## Features

- ✅ Fully responsive design
- 🧩 Reusable components
- 📱 Mobile-first approach
- 🎨 Clean, modern UI

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Technologies

- React 18
- React Router
- CSS3
- Responsive Design

## Component Features

- **SimpleHero** - Full-width hero sections with background images and call-to-action buttons
- **SimpleCard** - Reusable cards for services, features, and content display
- **SimpleGrid** - Responsive grid system that adapts to different screen sizes
- **Section** - Standardized page sections with consistent spacing and typography
- **PageContainer** - Main wrapper for all pages ensuring consistent layout

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── SimpleHero.js   # Hero sections with background images
│   ├── SimpleCard.js   # Service/feature cards
│   ├── SimpleGrid.js   # Responsive grid layouts
│   ├── Section.js      # Page sections with titles
│   ├── PageContainer.js # Main page wrapper
│   ├── Navbar.js       # Navigation header
│   └── Footer.js       # Footer component
├── pages/              # Individual page components  
├── Styles/             # CSS files for styling
└── App.js              # Main application component
```

## Pages

### Main Pages

- **Home** (`/`) - Landing page with hero section, featured services overview, and company highlights
- **About** (`/about`) - Company story, mission, values, and team information with engaging visuals  
- **Services** (`/service`) - Complete overview of all business services offered with service cards
- **Contact** (`/contact`) - Contact form, company address, phone, email, and location details
- **Blog** (`/blog`) - Article listings with publication dates, previews, and "Read More" links
- **Careers** (`/carrers`) - Job opportunities, company culture, and application information

### Service Pages

- **Consulting** (`/consulting`) - Business strategy, financial planning, market analysis, and growth consulting services
- **Marketing** (`/marketing`) - Digital marketing overview with links to specialized marketing services  
- **Accounting** (`/accounting`) - Financial services including bookkeeping, tax preparation, and financial planning
- **Digital Marketing Manager** (`/digitalmarketingmanager`) - Specialized digital marketing management services and career opportunities
- **Social Media Manager** (`/socialmediamanager`) - Social media strategy, content creation, and community management services
- **Email Marketing Manager** (`/emailmarketingmanager`) - Email campaign creation, automation, and analytics services
- **SEO Services** (`/seo`) - Search engine optimization, keyword research, and website ranking improvement
- **Content Creator** (`/contentmaker`) - Content writing, blog creation, and content marketing services
- **CRM Solutions** (`/crm`) - Customer relationship management system implementation and optimization
- **Digital Analytics** (`/digitalanalytics`) - Website analytics, performance tracking, and data insights
- **Logo Designer** (`/logodesigner`) - Professional logo design, brand identity, and graphic design services

### Legal Pages

- **Privacy Policy** (`/privacypolicy`) - Data protection, cookie usage, and privacy guidelines
- **Terms & Conditions** (`/termsconditions`) - Service terms, user agreements, and legal disclaimers

## Page Features

Each page includes:
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **SEO Optimized** - Proper meta tags and semantic HTML structure
- **Fast Loading** - Optimized images and efficient CSS
- **User Friendly** - Clear navigation and intuitive layout
- **Professional Design** - Modern, clean, and business-appropriate styling

## Navigation Structure

The website uses React Router for seamless navigation between pages. The main navigation includes:
- Primary pages (Home, About, Services, Contact, Blog, Careers)
- Service-specific pages accessible through the main Services page
- Legal pages linked in the footer
- Mobile-responsive navigation menu that adapts to smaller screens

