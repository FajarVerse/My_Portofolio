const SubHeader = (props) => {
  const { className, children } = props;

  return (
    <>
      <h3
        className={`font-poppins font-semibold text-lg text-primary mb-2 md:text-xl ${className}`}
      >
        {children}
      </h3>
    </>
  );
};

export default SubHeader;
