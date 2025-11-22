# Starship Portfolio

A Star Trek Voyager-themed personal portfolio built with React, TypeScript, and Vite.

## 🚀 Features

- Interactive starship-themed UI
- Responsive design
- Modern React with TypeScript
- Fast builds with Vite

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment on Render.com

This project is configured for automatic deployment on Render.com using the `render.yaml` configuration.

### Automatic Deployment

1. Push your changes to the `master` branch
2. Render.com will automatically:
   - Install dependencies with `npm install`
   - Build the project with `npm run build`
   - Serve the static files from the `dist` folder

### Manual Setup on Render.com

If you need to set up manually:

1. Create a new **Static Site** on Render.com
2. Connect your GitHub repository
3. Configure:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Branch**: `master`

### Environment

- **Node Version**: 20 (specified in `.nvmrc`)
- **Package Manager**: npm

## 🏗️ Project Structure

```
.
├── components/          # React components
├── public/             # Static assets
├── App.tsx             # Main App component
├── index.tsx           # Application entry point
├── index.html          # HTML template
├── constants.ts        # Application constants
├── types.ts            # TypeScript type definitions
├── vite.config.ts      # Vite configuration
├── render.yaml         # Render.com deployment config
└── package.json        # Project dependencies
```

## 🔧 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling (via CDN)
- **Render.com** - Hosting platform

## 📝 License

MIT License - feel free to use this project as a template for your own portfolio!

## 🖖 Live Long and Prosper

Built with ❤️ and ☕