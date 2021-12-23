import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import tailwindcss from 'tailwindcss';
import purgecss from '@fullhuman/postcss-purgecss';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
    },
  ],
  plugins: [
    postcss({
      plugins: [
        tailwindcss(),
        purgecss({ content: ['./src/**/*.{html,tsx}'] })
      ]
    })
  ]
};
