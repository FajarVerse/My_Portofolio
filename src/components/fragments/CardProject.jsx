import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../assets/context/DarkModeContext";
import LinkBtn from "../elements/LinkBtn";
import SubHeader from "../elements/SubHeader";

const CardProject = (props) => {
  const { children } = props;
  const { darkMode } = useContext(DarkMode);

  return (
    <>
      <div
        className={`w-full h-56 rounded-md shadow-md  overflow-hidden ring-1 hover:scale-105 hover:shadow-lg  md:h-[14.5rem] lg:h-72 xl:h-[17rem] transition duration-300 ease-out cursor-pointer ${
          darkMode
            ? "ring-gray-600 shadow-gray-800 hover:shadow-gray-700"
            : "ring-[rgba(18,18,18,0.4)] shadow-slate-500 hover:shadow-slate-400"
        }`}
      >
        {children}
      </div>
    </>
  );
};

const CardImage = (props) => {
  const { image, link } = props;
  const { darkMode } = useContext(DarkMode);

  return (
    <>
      <div
        className={`relative w-full h-4/5 bg-cover group ${
          darkMode ? "card-project-hover-dark" : "card-project-hover-light"
        }`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="h-full flex gap-5 justify-center items-center">
          <span className="card-project-icon delay-200">
            <Link to={link} target="_blank">
              <svg
                className="w-full h-full fill-current"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
              >
                <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

const CardBody = (props) => {
  const { link, children } = props;
  const { darkMode } = useContext(DarkMode);

  return (
    <>
      <div
        className={`w-full h-1/5 px-3 py-3 flex ${
          darkMode ? "bg-mode" : "bg-light"
        } justify-between items-center`}
      >
        <div className="w-[70%] flex items-center">
          <SubHeader
            className={`${
              darkMode ? "text-light" : "text-primary"
            } text-[0.95rem] mt-2 md:text-[1.1rem] lg:font-semibold lg:text-xl xl:text-[1.2rem] text-nowrap`}
          >
            {children}
          </SubHeader>
        </div>
        <div className="w-2/6 flex justify-center items-center">
          <LinkBtn link={link}>See More</LinkBtn>
        </div>
      </div>
    </>
  );
};

CardProject.CardImage = CardImage;
CardProject.CardBody = CardBody;

export default CardProject;
