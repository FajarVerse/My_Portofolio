const Description = (props) => {
  const { className, children } = props;

  return (
    <>
      <p
        className={`font-inter font-light text-sm text-dark mb-3 md:text-base ${className}`}
      >
        {children}
      </p>
    </>
  );
};

export default Description;
