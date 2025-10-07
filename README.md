# Chapman Digital Website

A modern, professional Next.js website for Chapman Digital - a boutique consultancy specializing in AI consulting, front-end modernization, digital transformation, and Salesforce enablement.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **SEO Optimized**: Built-in SEO metadata and OpenGraph support
- **Component Library**: Reusable, accessible components
- **Content Management**: MDX support for project case studies
- **Performance**: Optimized for speed and Core Web Vitals

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Content**: MDX for project case studies
- **Fonts**: Inter (Google Fonts)
- **Icons**: Heroicons (SVG)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chapman-digital
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

## 🏃‍♂️ Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── services/           # Services page
│   │   ├── projects/           # Projects page
│   │   ├── contact/            # Contact page
│   │   ├── blog/               # Blog page
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/             # Reusable components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Container.tsx       # Layout container
│   │   ├── Section.tsx         # Page sections
│   │   ├── Card.tsx            # Card component
│   │   ├── Button.tsx           # Button component
│   │   ├── Testimonial.tsx     # Testimonial component
│   │   └── ContactForm.tsx     # Contact form
│   └── globals.css             # Global styles
├── content/
│   └── projects/               # MDX project case studies
├── docs/                       # Documentation
├── public/                      # Static assets
└── tailwind.config.ts          # Tailwind configuration
```

## 🎨 Design System

### Colors
- **Primary**: Teal (#14b8a6) - Main brand color
- **Neutral**: Grayscale palette for text and backgrounds
- **Accent**: Soft blue variations

### Typography
- **Font Family**: Inter, DM Sans, system-ui
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Header**: Responsive navigation with mobile menu
- **Footer**: Multi-column layout with links and social media
- **Cards**: Hover effects and consistent spacing
- **Buttons**: Primary, secondary, and outline variants
- **Forms**: Accessible contact form with validation

## 📝 Content Management

### Adding New Projects

1. Create a new `.mdx` file in `content/projects/`
2. Use the following frontmatter structure:

```mdx
---
title: "Project Title"
date: "YYYY-MM-DD"
client: "Client Name"
tags: ["Tag1", "Tag2", "Tag3"]
summary: "Brief project summary."
outcomes:
  - "Outcome 1"
  - "Outcome 2"
---

## Problem
Describe the problem this project solved.

## Approach
Explain the approach and methodology.

## Result
Detail the results and outcomes.
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Deploy**: Vercel will automatically deploy on every push to main

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- **Netlify**: Use `npm run build` and deploy the `.next` folder
- **AWS Amplify**: Configure build settings for Next.js
- **Railway**: Connect your GitHub repository
- **DigitalOcean App Platform**: Use the Next.js preset

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Tailwind Configuration

The project uses Tailwind CSS 4 with custom configuration in `tailwind.config.ts`:

- Custom color palette for Chapman Digital branding
- Inter font family configuration
- Custom utility classes for gradients and buttons

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 🚀 Performance

- Next.js 15 with Turbopack for fast builds
- Optimized images and fonts
- Minimal JavaScript bundle
- Core Web Vitals optimized

## 📄 License

This project is proprietary to Chapman Digital. All rights reserved.

## 🤝 Contributing

This is a private project. For internal development:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📞 Support

For technical support or questions about this website, contact the development team.

---

**Chapman Digital** - Where AI meets design.