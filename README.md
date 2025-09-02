# GoChapaa Documentation

The official documentation for GoChapaa - The Future of Finance for Africa Powered by AI and Blockchain.

## 🚀 Overview

This documentation site is built with [Docusaurus](https://docusaurus.io/) and provides comprehensive information about GoChapaa's mission, technology, tokenomics, and roadmap.

## 📁 Structure

```
docs/
├── overview.mdx                    # Main overview page
├── whitepaper/                     # White paper sections
│   ├── executive-summary.mdx
│   ├── introduction.mdx
│   ├── market-context.mdx
│   ├── problem-statement.mdx
│   ├── solution.mdx
│   ├── wallet-features.mdx
│   ├── tokenomics.mdx
│   └── roadmap.mdx
└── pitchdeck/                      # Pitch deck sections
    └── investor-deck.mdx
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run start` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve production build locally
- `npm run deploy` - Deploy to GitHub Pages (if configured)
- `npm run clear` - Clear Docusaurus cache

## 🎨 Custom Components

The documentation includes custom React components for enhanced visualization:

- **TokenomicsChart** - Interactive pie chart showing GOC token distribution
- **RoadmapTimeline** - Visual timeline of GoChapaa's development roadmap

## 📊 Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Interactive Charts** - Tokenomics and roadmap visualizations
- **Search Functionality** - Built-in search across all documentation
- **Dark/Light Mode** - Automatic theme switching
- **SEO Optimized** - Meta tags and structured data
- **Fast Loading** - Optimized for performance

## 🌐 Deployment

### Option 1: Manual Deployment

1. Build the documentation:
   ```bash
   npm run build
   ```

2. Upload the contents of the `build/` directory to your web server

3. Configure your server to serve files from the root of the docs subdirectory

### Option 2: Automated Deployment

Use the provided deployment script:
```bash
./deploy.sh
```

### Option 3: Platform-Specific Deployment

#### GitHub Pages
```bash
npm run deploy
```

#### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

#### Vercel
1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `build`

#### AWS S3
1. Build the documentation: `npm run build`
2. Upload contents of `build/` directory to S3 bucket
3. Enable static website hosting
4. Configure CloudFront for CDN (optional)

## 🔧 Configuration

### Site Configuration

The main configuration is in `docusaurus.config.ts`:

- **Site URL**: `https://gochapaa.io`
- **Base URL**: `/docs/`
- **Organization**: `gochapaa`
- **Project**: `gochapaa-docs`

### Sidebar Configuration

The sidebar structure is defined in `sidebars.ts` and includes:

- 🚀 Overview
- 📖 White Paper (8 sections)
- 📊 Pitch Deck (1 section)

## 📝 Content Management

### Adding New Pages

1. Create a new `.mdx` file in the appropriate directory
2. Add the page to the sidebar in `sidebars.ts`
3. Include proper front matter with title and description

### Editing Existing Content

- All content is in Markdown/MDX format
- Use standard Markdown syntax
- For interactive components, use JSX syntax
- Images should be placed in `static/img/`

### Custom Components

Custom components are located in `src/components/`:

- `TokenomicsChart.tsx` - Token distribution visualization
- `RoadmapTimeline.tsx` - Development timeline

## 🎯 SEO and Performance

- **Meta Tags**: Automatically generated from front matter
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Configured for search engine crawling
- **Performance**: Optimized bundle size and loading times

## 🔒 Security

- **HTTPS**: Configured for secure connections
- **Content Security Policy**: Implemented for XSS protection
- **No Sensitive Data**: All content is public documentation

## 📞 Support

For questions about the documentation:

- **Email**: docs@gochapaa.io
- **GitHub Issues**: Create an issue in the repository
- **Website**: https://gochapaa.io

## 📄 License

This documentation is part of the GoChapaa project. All rights reserved.

---

**Built with ❤️ for Africa's financial future**