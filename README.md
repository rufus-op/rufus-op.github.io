# Rufus OP - Company Portfolio Website

A modern, responsive company portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features a showcase of apps with individual pages, privacy policies, and terms of service.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **App Showcase**: Comprehensive app portfolio with filtering and search
- **Individual App Pages**: Detailed pages for each app with screenshots and features
- **Legal Pages**: Privacy policies and terms of service for each app
- **Smooth Animations**: Framer Motion animations throughout the site
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Fast Performance**: Optimized for speed and performance

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/rufus-op-portfolio.git
   cd rufus-op-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 🏗️ Project Structure

```
rufus-op-portfolio/
├── app/                    # Next.js App Router
│   ├── apps/              # App-specific pages
│   │   └── [id]/          # Dynamic app pages
│   │       ├── page.tsx   # App detail page
│   │       ├── privacy/   # Privacy policy
│   │       └── terms/     # Terms of service
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Services.tsx       # Services section
│   ├── AppsShowcase.tsx   # Apps showcase
│   ├── Contact.tsx        # Contact section
│   └── Footer.tsx         # Footer
├── data/                  # Data files
│   └── apps.ts           # App data and types
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### Adding New Apps

1. **Update the apps data** in `data/apps.ts`:
   ```typescript
   {
     id: 'your-app-id',
     name: 'Your App Name',
     description: 'App description...',
     shortDescription: 'Short description...',
     category: 'Category',
     platform: 'Cross-platform',
     icon: '📱',
     screenshots: ['url1', 'url2', 'url3'],
     features: ['Feature 1', 'Feature 2'],
     technologies: ['Tech 1', 'Tech 2'],
     downloadUrl: 'https://...',
     websiteUrl: 'https://...',
     rating: 4.8,
     downloads: '100K+',
     releaseDate: '2023-01-01',
     size: '50MB',
     version: '1.0.0',
     developer: 'Rufus OP',
     price: 'Free',
     tags: ['tag1', 'tag2']
   }
   ```

2. **Add screenshots** to the `public/` directory or use external URLs

### Styling

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `app/layout.tsx`
- **Animations**: Modify animations in `tailwind.config.js` and component files

### Content

- **Company Info**: Update company information in components
- **Contact Details**: Modify contact information in `Contact.tsx` and `Footer.tsx`
- **Legal Pages**: Customize privacy policies and terms in respective page files

## 📱 Apps Included

1. **TaskFlow Pro** - Productivity app for task management
2. **FitLife Hub** - Health & fitness companion
3. **SmartBudget** - Personal finance manager
4. **LearnHub** - Educational platform
5. **SocialConnect** - Social networking app
6. **WeatherWise** - Weather forecasting app

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect Next.js and deploy

### Other Platforms

- **Netlify**: Use the Netlify CLI or connect your GitHub repository
- **AWS Amplify**: Connect your repository and deploy
- **Self-hosted**: Build and deploy to your own server

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email support@rufus-op.com or create an issue in this repository.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library

---

Built with ❤️ by Rufus OP 