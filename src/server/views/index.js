import React from 'react';
import { StaticRouter } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import serialize from 'serialize-javascript';
import App from '../../client/App';

export default function buildView(url, data) {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url} context={{ data }}>
      <App />
    </StaticRouter>,
  );
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Mercado Libre</title>
        <script src="/bundle.js"defer></script>
        <link href="/main.css"rel="stylesheet">
        <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
}
