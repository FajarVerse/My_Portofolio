import { useContext } from "react";
import { DarkMode } from "../../../assets/context/DarkModeContext";

const HeroDescription = (props) => {
  const { children } = props;
  const { darkMode } = useContext(DarkMode);
  return (
    <>
      <p
        className={`${darkMode ? "text-light" : "text-dark"} font-inter font-light text-sm mb-5 md:text-base md:font-medium lg:text-sm xl:text-lg float-right`}
      >
        {children}
      </p>
    </>
  );
};

export default HeroDescription;
