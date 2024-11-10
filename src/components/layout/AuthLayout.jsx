import { useContext } from "react";
import { DarkMode } from "../../assets/context/DarkModeContext";

const AuthLayout = (props) => {
  const { id, sectionClass, containerClass, children } = props;
  const { darkMode } = useContext(DarkMode);

  return (
    <>
      <section
        id={id}
        className={`pt-24 pb-10 overflow-x-hidden ${sectionClass}`}
      >
        <div className={`container mx-auto ${containerClass}`}>{children}</div>
      </section>
    </>
  );
};

export default AuthLayout;
