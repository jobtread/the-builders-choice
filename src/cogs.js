import tailwindcss from '@tailwindcss/postcss';
import cssnano from 'cssnano';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const { Buffer } = globalThis;

export default {
  main: {
    transformers: [].concat(
      {
        only: 'src/pages/**/*.js',
        fn: async ({ file }) => {
          const suffix = `?at=${Math.floor(Date.now() / 1000)}`;
          const { default: Component } = await import(`#${file.path}${suffix}`);
          const html = renderToStaticMarkup(createElement(Component));
          return {
            buffer: Buffer.from(`<!doctype html>${html}`),
            links: [...file.links, 'src/**']
          };
        }
      },
      {
        name: 'postcss',
        only: 'src/index.css',
        options: {
          plugins: [
            tailwindcss,
            cssnano({
              preset: [
                'default',
                { discardComments: { removeAll: true } }
              ]
            })
          ]
        }
      },
      {
        only: 'src/index.css',
        fn: ({ file: { links } }) => ({ links: [...links, 'src/**'] })
      }
    ),
    builds: {
      'src/pages/**/*.js': {
        base: 'src/pages',
        dir: 'docs',
        ext: { '.js': '.html' }
      },
      'src/index.css': { base: 'src', dir: 'docs' }
    }
  }
};
