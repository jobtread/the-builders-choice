import { transform } from '@svgr/core';
import esbuild from 'esbuild';

const { process, URL, URLSearchParams } = globalThis;

const minify = process.env.MINIFY === '1';

const esbuildOptions = { loader: 'jsx', jsx: 'automatic', jsxDev: !minify };

const svgrOptions = {
  dimensions: false,
  jsxRuntime: 'automatic',
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx']
};

export const resolve = async (specifier, context, defaultResolve) => {
  if (
    specifier.startsWith('#') &&
    context.parentURL?.startsWith('file:///code/')
  ) {
    const { search } = new URL(context.parentURL);
    const at = new URLSearchParams(search).get('at');
    if (at) specifier += `?at=${at}`;
  }

  return defaultResolve(specifier, context, defaultResolve);
};

export const load = async (url, context, defaultLoad) => {
  const isSvg = new URL(url).pathname.endsWith('.svg');
  if (isSvg) context = { ...context, format: 'module' };

  let { format, source } = await defaultLoad(url, context, defaultLoad);

  if (isSvg) source = await transform(source, svgrOptions);

  if (
    isSvg ||
    url.startsWith('file:///code/src/')
  ) {
    source = (await esbuild.transform(source, esbuildOptions)).code;
  }

  return { format, source };
};
