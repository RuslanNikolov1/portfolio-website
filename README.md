# Portfolio Website - Ruslan Nikolov

A modern, responsive portfolio website showcasing my work as a Frontend Developer, UI Designer, and Electronic Music Producer.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme and accent colors
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth animations and micro-interactions using Framer Motion
- **Performance**: Optimized with Next.js 15 and TypeScript
- **Accessibility**: SEO-friendly and accessible HTML semantics

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Pure SASS/SCSS with CSS Modules (No Tailwind)
- **Animations**: Framer Motion
- **Forms**: React Hook Form with validation
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles and CSS variables
│   ├── layout.tsx      # Root layout with metadata
│   └── page.tsx        # Main page component
├── components/         # React components
│   ├── Hero.tsx        # Hero section
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills and expertise
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form and info
│   ├── Navigation.tsx  # Navigation bar
│   └── Footer.tsx      # Footer component
├── data/               # Static data
│   └── index.ts        # Projects, skills, and social links
└── types/              # TypeScript type definitions
    └── index.ts        # Interface definitions
```

## 🎨 Design System

### Colors
- **Background**: `#0F172A` (Dark slate)
- **Foreground**: `#F9FAFB` (White)
- **Primary**: `#2563EB` (Blue)
- **Secondary**: `#FACC15` (Yellow)
- **Accent**: `#10B981` (Green)
- **Muted**: `#94A3B8` (Gray)

### Typography
- **Primary Font**: Geist Sans
- **Monospace**: Geist Mono

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Update the following files with your information:
- `src/data/index.ts` - Projects, skills, and social links
- `src/app/layout.tsx` - Metadata and SEO information
- `src/components/About.tsx` - Personal description and CV

### Styling
- Modify SASS variables in `src/app/globals.scss`
- Update component styles in respective `.module.scss` files
- All styling is done with pure SASS/SCSS (no Tailwind CSS)

### Content
- Replace project data in `src/data/index.ts`
- Update social links and contact information
- Add your own project images to `public/projects/`

## 🎵 Sections

### Hero Section
- Full-width hero with animated icons
- Name, tagline, and call-to-action buttons
- Subtle background animations

### Projects Section
- Grid layout showcasing 8 projects
- Project cards with hover effects
- Technology badges and action buttons

### Skills Section
- Categorized skills (Frontend, Design, Music)
- Animated progress bars
- Visual skill indicators

### About Section
- Personal story and approach
- Dragon avatar with animations
- CV preview and download

### Contact Section
- Contact form with validation
- Social media links
- Floating CTA button

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 SASS Styling

This project uses **pure SASS/SCSS** for styling with CSS Modules. No Tailwind CSS is used.

### SASS Variables
All colors and design tokens are defined in `src/app/globals.scss`:
- `$background: #0F172A` - Dark background
- `$primary: #2563EB` - Blue accent
- `$secondary: #FACC15` - Yellow accent  
- `$accent: #10B981` - Green accent
- `$font-sans` - Geist Sans font family
- `$font-mono` - Geist Mono font family

### Component Styling
Each component has its own `.module.scss` file for scoped styling:
- `Hero.module.scss` - Hero section styles
- `Projects.module.scss` - Projects grid styles
- `Skills.module.scss` - Skills section styles
- `About.module.scss` - About section styles
- `Contact.module.scss` - Contact form styles
- `Navigation.module.scss` - Navigation styles
- `Footer.module.scss` - Footer styles

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 968px
- **Desktop**: > 968px

## 🎯 Performance

- Optimized images and assets
- Lazy loading for better performance
- Smooth scroll behavior
- Efficient animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Built with ❤️ by Ruslan Nikolov**