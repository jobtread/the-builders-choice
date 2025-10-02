import Footer from '#src/components/footer.js';
import Head from '#src/components/head.js';
import Nav from '#src/components/nav.js';

export default ({
  title,
  metaDescription = '',
  twSocialImage = '',
  ogSocialImage = '',
  canonicalHref = '',
  children
}) => (
  <html>
    <Head
      title={title}
      metaDescription={metaDescription}
      twSocialImage={twSocialImage}
      ogSocialImage={ogSocialImage}
      canonicalHref={canonicalHref}
    />
    <body>
      <Nav />
      {children}
    </body>
    <Footer />
  </html>
);
