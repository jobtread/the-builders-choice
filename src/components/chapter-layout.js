import ChapterMenu from '#src/components/chapter-menu.js';
import Section from '#src/components/section.js';
import HeadingOne from '#src/components/typography/heading-one.js';
import HeadingTwo from '#src/components/typography/heading-two.js';

export default ({ id, children }) => (
  <>
    <Section customClasses='bg-gray-200 pt-12' size='none'>
      <HeadingOne>Chapter {id}</HeadingOne>
      <ChapterMenu currentPath={id} />
    </Section>
    <Section>
      <div className='md:flex gap-12'>
        <div className='flex-none md:w-2/3 md:max-w-[800px] relative print:max-w-[600px]'>
          <HeadingTwo>Self Reflection</HeadingTwo>
          <p className='italic mb-6'>
            Are you more like Troy or Jacob? Take the quiz.
          </p>

          <div className='mb-8 p-6 pt-10 pb-12 sticky top-[90px] bg-white border border-gray-100 rounded-md shadow-md'>
            <div className='hidden'>
              Current Score: <span id='score-display'>0</span>
            </div>
            <div
              id='score-bar-container'
              className='relative h-3 rounded-full w-full bg-gray-600 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500'
            >
              <span className='absolute -bottom-6 left-0 text-sm font-semibold text-red-600'>
                Troy
              </span>
              <span className='absolute -bottom-6 right-0 text-sm font-semibold text-green-600'>
                Jacob
              </span>

              <div
                className='absolute top-0 bottom-0 border-r-2 border-gray-600 opacity-50'
                style={{ left: `50%` }}
              ></div>

              <div
                id='score-indicator'
                className='absolute h-5 w-5 rounded-full shadow-lg border-2 border-white transform -translate-x-1/2 -translate-y-1/4 transition-all duration-500 ease-in-out'
                style={{ left: `50%`, backgroundColor: '#6b7280' }}
              ></div>
            </div>
          </div>
          {children}
          <button
            id='printButton'
            class='no-print bg-blue-500 px-6 py-3 text-white hover:bg-gray-900 w-full shadow-md rounded-md mt-12'
          >
            Print / Save as PDF
          </button>
        </div>
        <div className='relative w-full'>
          <div className='sticky top-[90px] space-y-6 py-8'>
            <div className='bg-gray-100 h-64 rounded-md flex items-center justify-center'>
              JobTread Ad
            </div>
            <div className='bg-gray-100 h-64 rounded-md flex items-center text-center justify-center'>
              4 Level Ad
            </div>
          </div>
        </div>
      </div>
    </Section>
  </>
);
