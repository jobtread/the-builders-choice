import Container from '#src/components/container.js';

const ClassyLink = ({ href, children }) => (
  <a
    href={href}
    className='block font-display text-tbcLicorice tracking-tight hover:text-tbcBlueMed text-xl py-4 px-4 lg:p-0 border-b-2 border-transparent hover:border-tbcBlueMed'
  >
    {children}
  </a>
);

const PurchaseBtn = ({ href, children }) => (
  <a
    href={href}
    className='block text-base px-4 py-2 lg:px-6 lg:py-3 leading-none border rounded-sm text-white border-blue-600 bg-blue-600 hover:border-blue-500 hover:text-blue-500 hover:bg-white lg:mt-0'
  >
    {children}
  </a>
);

export default () => (
  <div
    id='main-nav'
    className='fixed lg:sticky top-0 w-full bg-white shadow-md border-b border-gray-100 z-50 print:hidden'
  >
    <Container>
      <nav className='w-full lg:flex items-center lg:justify-between px-4 py-4 md:px-8 md:py-6 xl:px-0'>
        <div className='w-full md:w-auto flex items-center justify-between'>
          <a href='/' className='inline-block hover:opacity-80'>
            <img
              className='h-[20px] xl:h-[30px]'
              src='/images/the-builders-choice-logo.svg'
              alt="The Builder's Choice"
            />
          </a>
          <div className='flex items-center gap-6 lg:hidden'>
            <button
              id='main-nav-toggle'
              className='flex items-center px-3 py-2 border rounded-sm text-teal-200 border-gray-300 hover:text-white hover:border-blue-500 group'
            >
              <svg
                className='fill-gray-300 h-3 w-3 group-hover:fill-white'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
              </svg>
            </button>
          </div>
        </div>
        <div
          id='connect-nav-links'
          className='collapsible hidden w-full border-t border-gray-700 my-4 py-4 lg:my-0 lg:py-0 lg:border-t-0 lg:flex lg:grow lg:items-center lg:w-auto'
        >
          <div className='text-sm md:text-base space-y-4 lg:pr-8 lg:space-y-0 lg:flex lg:justify-end lg:grow lg:space-x-6 xl:space-x-8'>
            <ClassyLink href='/'>Overview</ClassyLink>
            <ClassyLink href='/chapters/1'>Chapter Resources</ClassyLink>
            <ClassyLink href='/authors'>About the Authors</ClassyLink>
            <div className='lg:hidden'>
              <PurchaseBtn href='TODO'>Purchase</PurchaseBtn>
            </div>
          </div>
          <div className='hidden lg:block'>
            <PurchaseBtn href='TODO'>Purchase</PurchaseBtn>
          </div>
        </div>
      </nav>
    </Container>
  </div>
);
