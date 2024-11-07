import { Link } from "react-router-dom";
import SubHeader from "../elements/SubHeader";
import LinkBtn from "../elements/LinkBtn";

const CardProject = (props) => {
  const { children } = props;

  return (
    <>
      <div className="w-full h-56 rounded-md shadow-md shadow-slate-500 overflow-hidden hover:scale-105 hover:shadow-lg hover:shadow-slate-400 md:h-[14.5rem] lg:h-72 xl:h-[17rem] transition duration-300 ease-out cursor-pointer">
        {children}
      </div>
    </>
  );
};

const CardImage = (props) => {
  const { image, link } = props;

  return (
    <>
      <div
        className="relative w-full h-4/5 bg-cover card-project-hover group"
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

  return (
    <>
      <div className="w-full h-1/5 px-3 py-3 flex bg-light justify-between items-center">
        <div className="w-[70%] flex items-center">
          <SubHeader className="text-primary text-[0.95rem] mt-2 md:text-[1.1rem] lg:font-semibold lg:text-xl xl:text-[1.2rem] text-nowrap">
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
