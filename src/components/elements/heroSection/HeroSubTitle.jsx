import { useContext } from "react";
import { DarkMode } from "../../../assets/context/DarkModeContext";

const HeroSubTilte = (props) => {
  const { children } = props;
  const { darkMode } = useContext(DarkMode);

  return (
    <>
      <h3
        className={`${
          darkMode ? "text-light" : "text-primary"
        } font-poppins font-medium text-2xl lg:text-3xl lg:mb-3 xl:font-semibold xl:text-4xl`}
      >
        {children}
      </h3>
    </>
  );
};

export default HeroSubTilte;
