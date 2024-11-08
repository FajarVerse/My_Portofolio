import { Link } from "react-router-dom";
import Description from "../../elements/Description";
import Header from "../../elements/Header";
import Button from "../../elements/Button";

const ContactBody = () => {
  return (
    <>
      <Header className="hidden lg:block lg:text-6xl lg:text-left lg:mb-5 xl:text-7xl">
        Contact Me
      </Header>
      <Description className="lg:font-medium lg:text-lg lg:pr-5 ">
        Thank you for visiting. Feel free to email, call, or fill out the
        message form to get in touch
      </Description>
      <div className="w-full">
        <ul className="mb-3">
          <li className="font-inter font-light text-sm text-dark lg:font-medium lg:text-lg lg:mb-1.5 hover:text-accent transition duration-300">
            <Link className="">gifarifajar794@gmail.com</Link>
          </li>
          <li className="font-inter font-light text-sm text-dark lg:font-medium lg:text-lg lg:mb-1.5 hover:text-accent transition duration-300">
            <Link className="">0838-9492-7117</Link>
          </li>
        </ul>
        <Button>
          <Link>Download CV</Link>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#ffffff"
            >
              <path d="M160-80v-80h640v80H160Zm320-160L200-600h160v-280h240v280h160L480-240Zm0-130 116-150h-76v-280h-80v280h-76l116 150Zm0-150Z" />
            </svg>
          </span>
        </Button>
      </div>
    </>
  );
};

export default ContactBody;
