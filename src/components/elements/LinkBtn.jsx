import { Link } from "react-router-dom";
import { DarkMode } from "../../assets/context/DarkModeContext";
import { useContext } from "react";

const LinkBtn = (props) => {
  const { link, className, children } = props;
  const { darkMode } = useContext(DarkMode);

  return (
    <>
      <Link
        to={link}
        target="_blank"
        className={`${className} ${
          darkMode ? "btn-card-dark" : "btn-card-light"
        } `}
      >
        {children}
      </Link>
    </>
  );
};

export default LinkBtn;
