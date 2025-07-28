# AI Engineering Portfolio

Welcome to my personal portfolio website, showcasing innovative solutions in AI, engineering, and web development. Built with Next.js (credit: https://github.com/cristianmihai01/ethan-portfolio-starter) and deployed on Vercel at [https://ai-engineering-website.vercel.app](https://ai-engineering-website.vercel.app), this site highlights my expertise in transforming ideas into digital reality through cutting-edge technology and creative design.

![Portfolio Preview](https://ai-engineering-website.vercel.app/og-image.jpg)

## Features

- **Dynamic Homepage**: A visually engaging landing page with animated particles, an avatar, and a call-to-action to explore projects, emphasizing "Transforming Ideas Into Digital Reality."
- **Services Page**: Showcases my expertise in Task Automation, Research & Development, Simulation, Data Science, AI Integration, Programming, and Design, with a responsive slider and modern animations.
- **Work Page**: Displays a portfolio of projects with a Swiper carousel, highlighting impactful solutions across technology and engineering.
- **Testimonials Page**: Features enthusiastic client reviews (e.g., for web development, AI, and simulation) in a sleek carousel with avatars and quote icons.
- **WhatsApp Sharing**: A custom share button on the homepage allows users to share the portfolio via WhatsApp with a prefilled message.
- **Open Graph Tags**: Optimized meta tags ensure polished WhatsApp and social media link previews with a custom title, description, and image.
- **Responsive Design**: Fully responsive layout with Tailwind CSS, ensuring a seamless experience on mobile and desktop.
- **Animations**: Framer Motion powers smooth transitions and fade-in effects across pages.
- **Static Export**: Built for static site generation (`output: 'export'`) for fast, reliable deployment.

## Tech Stack

- **Framework**: Next.js 14 (with Turbopack)
- **Language**: JavaScript (React)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Carousel**: Swiper
- **Icons**: React Icons (FaQuoteLeft, HiArrowRight, HiRadio, RxCrop, RxPencil2, etc.)
- **Deployment**: Vercel (static export)
- **Other**: ESLint (with `react/no-unescaped-entities` fixes), ImageMagick/TinyPNG for image optimization

## File Structure

ai-engineering-portfolio/
├── components/
│ ├── Avatar.js # Avatar component for homepage
│ ├── Bulb.js # Decorative bulb for Services/Work
│ ├── Circles.js # Animated circles for Services/Work
│ ├── ParticlesContainer.js # Particle animation for homepage
│ ├── ProjectsBtn.js # Button linking to Work page with WhatsApp share
│ ├── ServiceSlider.js # Carousel for services
│ ├── TestimonialSlider.js # Carousel for client testimonials
│ ├── WorkSlider.js # Carousel for projects
├── pages/
│ ├── \_document.js # Global OG tags and canonical URL
│ ├── index.js # Homepage
│ ├── services/index.js # Services page
│ ├── work/index.js # Work page
│ ├── testimonials/index.js # Testimonials page
├── public/
│ ├── og-image.jpg # OG image for WhatsApp/social previews
│ ├── rounded-text.png # Spinning text for ProjectsBtn
│ ├── t-avt-1.png # Testimonial avatars
│ ├── t-avt-2.png
│ ├── t-avt-3.png
├── styles/
│ ├── globals.css # Tailwind CSS and global styles
├── next.config.js # Static export configuration
├── package.json # Dependencies and scripts
├── vercel.json # Vercel redirects for case-sensitive URLs
└── README.md # This file
