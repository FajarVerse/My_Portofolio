import { useContext } from "react";
import { DarkMode } from "../../assets/context/DarkModeContext";

const Header = (props) => {
  const { className, children } = props;
  const { darkMode } = useContext(DarkMode);

  return (
    <>
      <h1
        className={`${
          darkMode ? "text-accent" : " text-primary"
        } font-poppins font-bold text-[2.5rem]  md:text-5xl ${className}`}
      >
        {children}
      </h1>
    </>
  );
};

export default Header;
