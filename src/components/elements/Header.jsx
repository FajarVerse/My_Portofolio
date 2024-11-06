const Header = (props) => {
  const { className,children } = props;

  return (
    <>
      <h1
        className={`font-poppins font-bold text-[2.5rem] text-primary md:text-5xl ${className}`}
      >
        {children}
      </h1>
    </>
  );
};

export default Header;
