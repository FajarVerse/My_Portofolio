import { Link } from "react-router-dom";

const HeroBtn = (props) => {
  const { link } = props;

  return (
    <>
      <a href={link}>
        <button className="relative py-2 mt-0 mb-2 font-inter font-semibold text-lg text-accent flex items-center gap-2 before:content-[''] before:absolute before:bottom-1 before:w-0 before:bg-accent before:h-0.5 before:hover:w-full before:transition-all before:duration-300 before:ease-in-out md:text-xl lg:text-lg lg:before:h-[0.15rem] lg:mb-3">
          Show More
          <span className="fill-accent block group-hover:opacity-80 md:scale-110 lg:scale-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z" />
            </svg>
          </span>
        </button>
      </a>
    </>
  );
};

export default HeroBtn;
