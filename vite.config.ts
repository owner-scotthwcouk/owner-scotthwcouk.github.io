import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Uncomment and edit base for GitHub Pages ONLY
// export default defineConfig({
//   plugins: [react()],
//   base: '/owner-scotthwcouk.github.io/'
// });

export default defineConfig({
  plugins: [react()],
  // For Netlify, leave base as '/'
  base: '/',
});
