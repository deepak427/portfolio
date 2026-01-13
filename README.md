# Deepak Singh - Portfolio Website

A modern, responsive portfolio website showcasing professional development work and freelance services. Built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Optimized for all screen sizes (mobile, tablet, desktop)
- **Dark/Light Theme** - Automatic theme switching with user preference
- **Modern Animations** - Smooth Framer Motion animations throughout
- **Professional Contact Form** - Structured inquiry system with budget/timeline selection
- **Live Project Showcase** - Real projects with working links and metrics
- **Performance Optimized** - Built with Next.js 16 and optimized for speed
- **SEO Friendly** - Proper meta tags and structured data

## 🛠 Tech Stack

- **Framework:** Next.js 16.1.1
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes
- **Package Manager:** pnpm

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with theme support
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── layout/           # Layout components (Navbar)
│   ├── providers/        # Context providers (Theme)
│   ├── sections/         # Page sections (Hero, Projects, etc.)
│   └── ui/               # Reusable UI components
├── data/                 # Static data
│   ├── experience.ts     # Work experience data
│   └── projects.ts       # Project information
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions
└── types/                # TypeScript type definitions
    └── index.ts          # Shared interfaces
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd portfolio-next
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Run development server:**
   ```bash
   pnpm dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 📱 Responsive Design

The website is fully responsive and tested on:

- **Mobile:** 320px - 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** 1024px+

Key responsive features:
- Mobile-first navigation with hamburger menu
- Flexible grid layouts that adapt to screen size
- Optimized typography scaling
- Touch-friendly interactive elements

## 🎨 Theme System

- **Dark Mode:** Default theme with dark backgrounds
- **Light Mode:** Clean light theme for better readability
- **System Preference:** Automatically detects user's system preference
- **Smooth Transitions:** Animated theme switching

## 📧 Contact Form

The contact form includes:
- **Structured Inquiry:** Name, email, company fields
- **Budget Selection:** $5k to $50k+ ranges
- **Timeline Planning:** Project duration options
- **Email Integration:** Automatic mailto generation
- **Form Validation:** Required field validation

## 🌐 Deployment on Vercel

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

### Manual Deployment

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

### Environment Setup

No environment variables required for basic deployment.

### Build Configuration

The project uses Next.js default build configuration. Vercel automatically:
- Detects Next.js framework
- Installs dependencies with pnpm
- Builds the application
- Deploys to global CDN

### Custom Domain (Optional)

1. Go to your Vercel dashboard
2. Select your project
3. Navigate to "Settings" → "Domains"
4. Add your custom domain
5. Configure DNS records as instructed

## 📊 Performance

- **Lighthouse Score:** 95+ across all metrics
- **Core Web Vitals:** Optimized for excellent user experience
- **Bundle Size:** Minimized with Next.js optimization
- **Image Optimization:** Automatic WebP conversion and lazy loading

## 🔧 Customization

### Adding New Projects

Edit `src/data/projects.ts`:

```typescript
{
  id: 6,
  title: "Your Project",
  subtitle: "Project Type",
  description: "Brief description",
  longDescription: "Detailed description",
  stats: "Key Metric",
  tags: ["Tech", "Stack"],
  className: "md:col-span-2 md:row-span-1",
  gradient: "bg-blue-600",
  link: "https://your-project.com",
  image: "/your-project.webp",
  // ... other fields
}
```

### Updating Experience

Edit `src/data/experience.ts` to add new work experience.

### Changing Theme Colors

Edit `src/app/globals.css` to customize the color scheme:

```css
@theme {
  --color-primary: #your-color;
  --color-secondary: #your-color;
  /* ... other colors */
}
```

## 📄 License

This project is for portfolio purposes. Please respect the code and design.

## 📞 Contact

- **Email:** negid0253@gmail.com
- **Phone:** +91 63983 17883
- **Location:** India (Remote Worldwide)

---

**Available for freelance projects** - Let's build something amazing together! 🚀
