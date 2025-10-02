import IconChevron from '#src/components/svgs/icon-chevron-right.svg';

export default ({ id, question, children }) => {
  return (
    <div className='bg-white border border-gray-100 mb-2 w-full'>
      <h3 className='m-0'>
        <button
          id={`accordion-header-${id}`}
          className='accordionBtn flex w-full items-center text-left p-3 md:p-4 md:text-lg hover:bg-gray-100'
          aria-expanded='false'
          aria-controls={`accordion-panel-${id}`}
          data-accordion-header
        >
          <div className='showBtn flex items-center justify-center w-full'>
            <div className='flex-1 pr-4'>{question}</div>
            <div className='flex-none w-[16px] h-[16px] transition transform rotate-0'>
              <IconChevron />
            </div>
          </div>
          <div className='hideBtn flex items-center justify-center w-full'>
            <div className='flex-1 pr-4'>{question}</div>
            <div className='flex-none w-[16px] h-[16px] transition transform rotate-90'>
              <IconChevron />
            </div>
          </div>
        </button>
      </h3>
      <div
        id={`accordion-panel-${id}`}
        className='p-4 md:p-4 bg-gradient-to-b from-gray-50 to-white'
        aria-labelledby={`accordion-header-${id}`}
        data-accordion-content
        hidden
      >
        <div className='text-sm md:text-base pr-8 max-w-[760px]'>
          {children}
        </div>
      </div>
    </div>
  );
};
