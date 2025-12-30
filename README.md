# Last Message - Photo Essay Website

A romantic photo essay website built with React, TypeScript, and Vite.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Vercel

1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your repository
4. Vercel will auto-detect the Vite framework
5. Click "Deploy"

Or use Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Project Structure

```
├── public/
│   ├── images/          # All photos
│   └── heart.svg        # Favicon
├── src/
│   ├── components/
│   │   ├── LandingPage.tsx/.css
│   │   ├── Section.tsx/.css
│   │   ├── PhotoEssay.tsx/.css
│   │   └── ClosingSection.tsx/.css
│   ├── data/
│   │   └── sections.ts  # Message content & image mapping
│   ├── styles/
│   │   └── global.css   # Global styles & variables
│   ├── App.tsx
│   └── main.tsx
└── index.html
```
