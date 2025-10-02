import Container from '#src/components/container.js';

const getPy = size => {
  var sizes = {
    none: '',
    sm: 'py-4 md:py-8',
    lg: 'py-16 md:py-24',
    blg: 'pb-24 md:pb-32',
    xl: 'py-24 md:py-32',
    default: 'py-8 md:py-16'
  };
  return sizes[size];
};

export default ({ children, customClasses, size = 'default', ...props }) => {
  const sizeCss = getPy(size);
  return (
    <div
      {...props}
      className={`text-base font-light px-4 md:px-8 ${sizeCss} ${customClasses}`}
    >
      <Container>{children}</Container>
    </div>
  );
};
