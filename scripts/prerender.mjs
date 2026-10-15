import { readFile, writeFile } from 'node:fs/promises';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

// Render the same components visitors use, so the complete page is available
// before JavaScript runs. React hydrates this markup to attach interactions.
const server = await createServer({
  server: { middlewareMode: true, hmr: false, ws: false, watch: null },
  appType: 'custom',
});

try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  const markup = renderToString(React.createElement(App));
  const path = new URL('../dist/index.html', import.meta.url);
  const html = await readFile(path, 'utf8');
  const placeholder = '<div id="root"></div>';
  if (!html.includes(placeholder)) {
    throw new Error('Missing root placeholder; refusing to publish an empty page.');
  }
  await writeFile(path, html.replace(placeholder, () => `<div id="root">${markup}</div>`));
  console.log('Prerendered the full society homepage to dist/index.html.');
} finally {
  await server.close();
}
