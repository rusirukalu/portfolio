# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, interactive components, and a clean design to showcase professional work and skills.

## ✨ Features

- **Responsive Design** - Optimized for all device sizes
- **Modern UI/UX** - Clean, professional interface with smooth animations
- **Interactive Components** - Engaging user experience with dynamic elements
- **Performance Optimized** - Built with Next.js for fast loading times
- **Type Safe** - Full TypeScript implementation
- **SEO Friendly** - Optimized for search engines

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** CSS animations with custom hooks
- **Font:** Next.js Font Optimization
- **Deployment:** Vercel (recommended)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── About.tsx       # About section
│   │   ├── Contact.tsx     # Contact form/info
│   │   ├── Footer.tsx      # Site footer
│   │   ├── Hero.tsx        # Landing section
│   │   ├── Navbar.tsx      # Navigation
│   │   ├── Services.tsx    # Services offered
│   │   ├── Skills.tsx      # Skills showcase
│   │   └── Work.tsx        # Portfolio/projects
│   ├── hooks/              # Custom React hooks
│   │   └── useScrollBehavior.ts
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Home page
├── public/                 # Static assets
├── next.config.mjs        # Next.js configuration
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd portfolio
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

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

## 🎨 Customization

### Adding Your Content

1. **Personal Information**: Update the Hero component with your name, title, and description
2. **About Section**: Modify the About component with your background and story
3. **Skills**: Update the Skills component with your technical abilities
4. **Services**: Customize the Services component with what you offer
5. **Portfolio**: Add your projects in the Work component
6. **Contact**: Update contact information in the Contact component

### Styling

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Update font selections in `layout.tsx`
- **Animations**: Customize animations in individual components
- **Global Styles**: Edit `globals.css` for site-wide styling

### Adding New Sections

1. Create a new component in `app/components/`
2. Import and add it to `app/page.tsx`
3. Update navigation in `Navbar.tsx` if needed

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

```bash
# Build the application
npm run build

# The built files will be in the .next folder
# Upload to your preferred hosting platform
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

### SEO Optimization

Update metadata in `app/layout.tsx`:

```typescript
export const metadata = {
  title: "Your Name - Portfolio",
  description: "Your professional description",
  // Add more metadata as needed
};
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

⭐ Star this repository if you found it helpful!
