import Page from '#src/components/page.js';

export default () => (
  <Page title="The Builder's Choice">
    <div className='h-dvh flex items-center justify-center bg-blue-300'>
      <div className='p-4 bg-white rounded-sm shadow-sm text-center'>
        <img src='/logo.svg' className='w-64' />
        <div>Hello</div>
        <strong>World</strong>!
      </div>
    </div>
  </Page>
);
