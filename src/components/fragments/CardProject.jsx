import { Link } from "react-router-dom";
import SubHeader from "../elements/SubHeader";

const CardProject = (props) => {
  const { children } = props;

  return (
    <>
      <div className="w-full h-56 rounded-md shadow-md shadow-slate-500 overflow-hidden md:h-[14.5rem] lg:h-72 xl:h-[17rem] transition duration-300 ease-in">
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
          <span className="card-project-icon">
            <svg
              className="w-full h-full fill-current"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#ffffff"
            >
              <path d="M120-120v-240h80v104l124-124 56 56-124 124h104v80H120Zm480 0v-80h104L580-324l56-56 124 124v-104h80v240H600ZM324-580 200-704v104h-80v-240h240v80H256l124 124-56 56Zm312 0-56-56 124-124H600v-80h240v240h-80v-104L636-580Z" />
            </svg>
          </span>
          <span className="card-project-icon delay-200">
            <Link to={link}>
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
      <div className="w-full h-1/5 px-6 flex bg-light justify-between items-center">
        <SubHeader className="text-primary mt-2 lg:font-bold">{children}</SubHeader>
        <Link
          to={link}
          className="btn-card"
        >
          See More
        </Link>
      </div>
    </>
  );
};

CardProject.CardImage = CardImage;
CardProject.CardBody = CardBody;

export default CardProject;
