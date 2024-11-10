import { useContext } from "react";
import { DarkMode } from "../../assets/context/DarkModeContext";

const Description = (props) => {
  const { className, children } = props;
  const {darkMode} = useContext(DarkMode)

  return (
    <>
      <p
        className={`font-inter font-light text-sm ${darkMode ? 'text-light': 'text-dark'} mb-3 md:text-base ${className}`}
      >
        {children}
      </p>
    </>
  );
};

export default Description;
