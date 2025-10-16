import ArrowRight from '#src/components/svgs/arrow-right.svg';

const assignColor = clr => {
  var colors = {
    orange: 'bg-orange-500 hover:bg-gray-700 text-white hover:text-white',
    teal: 'bg-teal-500 hover:bg-gray-700 text-white hover:text-white',
    blue: 'bg-tbcBlueDark hover:bg-tbcLicorice text-white hover:text-white'
  };
  return colors[clr];
};

const assignSize = size => {
  var sizes = {
    xs: 'px-3 py-1.5',
    sm: 'px-4 py-3',
    md: 'px-6 py-4',
    lg: 'px-8 py-6'
  };
  return sizes[size];
};

const assignCorners = corner => {
  var corners = {
    false: '',
    sm: 'rounded-xs',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };
  return corners[corner];
};

export default ({
  text,
  url,
  customClasses = '',
  btnColor = 'orange',
  size = 'sm',
  rounded = 'md',
  hideArrow = false,
  type = 'flex',
  icon = <ArrowRight className='h-[16px] ml-2' />,
  ...props
}) => {
  const clrCss = assignColor(btnColor);
  const sizeCss = assignSize(size);
  const cornerCss = assignCorners(rounded);
  return (
    <a
      {...props}
      className={`items-center cursor-pointer font-medium ${type} ${cornerCss} ${clrCss} ${sizeCss} ${customClasses}`}
      href={url}
    >
      {text} {hideArrow ? '' : icon}
    </a>
  );
};
