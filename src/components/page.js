export default ({ title, children }) => (
  <html>
    <head>
      <title>{title}</title>
      <link rel='stylesheet' href='/index.css' />
      <script src='/watch.js' type='module' />
    </head>
    <body>{children}</body>
  </html>
);
