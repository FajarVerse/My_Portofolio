const AuthLayout = (props) => {
  const { id, sectionClass, containerClass, children } = props;

  return (
    <>
      <section id={id} className={`pt-24 pb-10 ${sectionClass}`}>
        <div className={`container mx-auto ${containerClass}`}>{children}</div>
      </section>
    </>
  );
};

export default AuthLayout;
