const HeroSubTilte = (props) => {
  const { children } = props;

  return (
    <>
      <h3 className="font-poppins font-medium text-2xl text-dark lg:text-3xl lg:mb-3 xl:font-semibold xl:text-4xl">
        {children}
      </h3>
    </>
  );
};

export default HeroSubTilte;
