// import { useContext } from 'react';

// import RootContext from '#src/constants/root-context.js';

export default ({
  title,
  metaDescription,
  twSocialImage,
  ogSocialImage,
  canonicalHref
}) => {
  // const {
  //   file: { path }
  // } = useContext(RootContext);

  return (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='referrer' content='no-referrer-when-downgrade' />
      <title>{title}</title>
      <meta content='yes' name='apple-mobile-web-app-capable' />
      <meta
        name='apple-mobile-web-app-status-bar-style'
        content='black-translucent'
      />
      <meta name='description' content={metaDescription} />
      <meta property='og:url' content='TODO' />
      <meta property='og:type' content='article' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={metaDescription} />
      <meta
        property='og:image'
        content={`https://www.the-builders-choice.com${ogSocialImage}`}
      />
      <meta
        property='og:image:secure_url'
        content={`https://www.the-builders-choice.com${ogSocialImage}`}
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@JobTread' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={metaDescription} />
      <meta
        name='twitter:image'
        content={`https://www.the-builders-choice.com${twSocialImage}`}
      />
      {canonicalHref ? <link rel='canonical' href={canonicalHref} /> : ''}
      <link rel='stylesheet' href='/index.css' />
      <script src='/watch.js' type='module' />
    </>
  );
};
