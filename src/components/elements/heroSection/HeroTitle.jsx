const HeroTitle = (props) => {
  const { children } = props;

  return (
    <>
      <h1 className="font-poppins font-bold text-3xl text-accent text-wrap md:text-4xl lg:text-5xl lg:tracking-wider xl:text-6xl">
        {children}
      </h1>
    </>
  );
};

export default HeroTitle;
