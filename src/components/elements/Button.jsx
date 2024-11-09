const Button = (props) => {
  const { children } = props;

  return (
    <>
      <button className="px-3.5 py-1.5  bg-accent font-inter font-medium text-sm text-light flex items-center gap-1 rounded-md hover:scale-105 transition ease-bounce duration-300 lg:text-base lg:px-5 lg:py-2">
        {children}
      </button>
    </>
  );
};

export default Button;
