import { defineConfig } from 'vocs'

export default defineConfig({
  rootDir: '.',
  baseUrl: 'https://promokit.github.io', 
  basePath: '/alysum-docs',
  vite: {
    base: '/alysum-docs',
  },
  title: 'Alysum',
  sidebar: [
    {
      text: 'AMP',
      link: '/amp',
    },
  ],
})
