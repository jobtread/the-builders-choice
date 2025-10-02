export default ({ id, question, value, children }) => (
  <div className='question-card p-4 border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-md transition duration-200'>
    <label className='flex items-start justify-between selection-control flex-shrink-0 flex items-center cursor-pointer p-1 transition duration-150 group'>
      <span className='font-semibold text-gray-800 group-hover:text-blue-800 pr-2'>
        {question}
      </span>
      <input
        type='checkbox'
        name={id}
        data-value={value}
        className='question-checkbox mt-1 h-4 w-4 rounded border-gray-400 checked:bg-indigo-600 checked:border-indigo-600 focus:ring-indigo-500 transition-colors duration-150'
      />
    </label>

    <div className='tip-box transition-all duration-300 ease-in-out max-h-0 opacity-0 overflow-hidden'>
      <div className='mt-2 p-6 text-sm rounded-md bg-blue-100 text-blue-900'>
        {children}
      </div>
    </div>
  </div>
);
