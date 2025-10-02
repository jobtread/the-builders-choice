const ActiveClasses = 'bg-white border-orange-500 mx-2';

const chapters = Array.from({ length: 15 }, (_, i) => i);

const TabBtn = ({ id, currentPath }) => (
  <li>
    <a
      href={`/chapters/${id}`}
      className={`text-xs xl:text-sm font-light text-gray-800 hover:bg-white hover:text-gray-900 inline-block p-2 pt-3 xl:px-3 border-t-2 -mt-2 ${
        currentPath === id.toString()
          ? ActiveClasses
          : 'border-transparent hover:border-blue-800'
      }`}
    >
      {id}
    </a>
  </li>
);

export default ({ currentPath }) => {
  return (
    <div className='block mt-6 bg-gray-100'>
      <div className='container flex justify-between'>
        <ul className='flex flex-wrap'>
          {chapters.map(i => (
            <TabBtn
              key={`chapter-${i + 1}`}
              id={i + 1}
              currentPath={currentPath}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
