# Portfolio - Rohith Pullola

> A modern, animated developer portfolio built with Next.js

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-ff69b4?style=for-the-badge)](https://www.framer.com/motion/)

## 🚀 About

A premium portfolio website showcasing my journey as a **Flutter Developer & Applied ML Developer**. Built with modern web technologies, featuring smooth animations, dark mode, and an interactive command palette.

**Live Demo:** [Rohith Pullola](https://rohithpullola.me)

## ✨ Features

- 🎨 **Modern Design** - Clean, minimalist UI with premium aesthetics
- ⚡ **Smooth Animations** - Powered by Framer Motion for buttery-smooth interactions
- 🌓 **Dark Mode** - Elegant dark theme with glassmorphism effects
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⌨️ **Command Palette** - Quick navigation with `Cmd/Ctrl + K`
- 🎯 **Interactive Elements** - Draggable profile image, hover effects, and micro-interactions
- 🔍 **SEO Optimized** - Meta tags and structured data for better discoverability
- 📊 **Analytics** - Integrated Vercel Analytics

## 🛠️ Tech Stack

### Core
- **Framework:** Next.js 14 (App Router)
- **Language:** JavaScript (ES6+)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion

### UI/UX
- **Icons:** Lucide React, React Icons
- **Fonts:** Google Fonts (Outfit, Instrument Serif, Hanken Grotesk, Space Mono, Syne, Caveat)
- **Image Optimization:** Next.js Image Component

### Features
- **Floating Dock:** Custom navigation component
- **Command Palette:** Quick search and navigation
- **Scroll Animations:** Intersection Observer API
- **Theme Toggle:** Light/Dark mode support

## 📂 Project Structure

```
rohith2026/
├── src/
│   ├── app/
│   │   ├── layout.js           # Root layout with fonts and metadata
│   │   ├── page.js             # Homepage with all sections
│   │   ├── globals.css         # Global styles
│   │   └── projects/
│   │       └── page.js         # Dedicated projects page
│   ├── components/
│   │   ├── Hero.js             # Introduction section
│   │   ├── Skills.js           # Skills showcase
│   │   ├── Projects.js         # Featured projects
│   │   ├── Experience.js       # Work experience
│   │   ├── Achievements.js     # Awards and achievements
│   │   ├── Education.js        # Educational background
│   │   ├── Footer.js           # Contact section
│   │   ├── FloatingDock.js     # Navigation dock
│   │   ├── CommandPalette.js   # Quick navigation (Cmd+K)
│   │   └── ScrollReveal.js     # Scroll animation utilities
│   ├── assets/
│   │   ├── images/             # Image assets
│   │   └── Projectimages/      # Project screenshots
│   └── lib/
│       └── utils.js            # Utility functions
├── public/
│   └── favicon.ico             # Website icon
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rohithsilent/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Update Personal Information

1. **Profile Details:** Edit `src/components/Hero.js`
2. **Projects:** Update `src/components/Projects.js` and `src/app/projects/page.js`
3. **Skills:** Modify `src/components/Skills.js`
4. **Experience:** Edit `src/components/Experience.js`
5. **Contact Info:** Update `src/components/Footer.js`

### Change Theme Colors

Edit the color scheme in `src/app/globals.css`:

```css
:root {
  --accent: 216 207 188; /* Main accent color */
  --background: 0 0 0;   /* Background color */
  --foreground: 255 255 255; /* Text color */
}
```

## 📱 Sections

- **Hero** - Introduction with interactive profile image
- **Skills** - Technology stack (Languages, Frameworks, ML/AI, Cloud & DevOps)
- **Projects** - Featured works (UrbanHero, Bridge, DocMind, EduVerse)
- **Achievements** - Certifications and awards
- **Education** - Academic background
- **Experience** - Professional experience
- **Contact** - Social links and contact information

## 🎯 Key Projects Featured

1. **UrbanHero** - Waste reporting platform with AI-powered image analysis
2. **Bridge** - Lightweight messaging application
3. **DocMind** - Offline-first healthcare web application
4. **EduVerse** - AI-powered learning platform

## 🔗 Connect with Me

- **GitHub:** [Rohithsilent](https://github.com/Rohithsilent)
- **LinkedIn:** [Rohith Pullola](https://www.linkedin.com/in/rohith-pullola-253336268/)
- **Twitter/X:** [@RohithP727496](https://x.com/RohithP727496)
- **Email:** rohithccb0909@gmail.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern web portfolios
- Icons from [Lucide](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Built with ❤️ by Rohith Pullola**

*"Cursed with clean code and infinite curiosity"*
