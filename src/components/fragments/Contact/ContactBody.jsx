import { Link } from "react-router-dom";
import Description from "../../elements/Description";
import Header from "../../elements/Header";
import Button from "../../elements/Button";
import AnimasiFadeIn from "../../elements/AnimasiFadeIn";
import { useContext } from "react";
import { DarkMode } from "../../../assets/context/DarkModeContext";

const ContactBody = () => {
  const { darkMode } = useContext(DarkMode);

  return (
    <>
      <AnimasiFadeIn varian="left" delay={0.2}>
        <Header className="hidden lg:block lg:text-6xl lg:text-left lg:mb-5 xl:text-7xl">
          Contact Me
        </Header>
        <Description className="lg:font-medium lg:text-lg lg:pr-5 ">
          Terima kasih telah berkunjung. Jangan ragu untuk mengirim email,
          menelepon, atau mengisi formulir pesan untuk menghubungi saya.
        </Description>
      </AnimasiFadeIn>
      <AnimasiFadeIn varian="right" delay={0.2}>
        <div className="w-full">
          <ul className="mb-3">
            <li
              className={`font-inter font-light text-sm ${
                darkMode ? "text-light" : "text-dark"
              }  lg:font-medium lg:text-lg lg:mb-1.5 hover:text-accent transition duration-300`}
            >
              <Link to={"mailto:gifarifajar794@gmail.com"} className="">
                gifarifajar794@gmail.com
              </Link>
            </li>
            <li
              className={`font-inter font-light text-sm ${
                darkMode ? "text-light" : "text-dark"
              }  lg:font-medium lg:text-lg lg:mb-1.5 hover:text-accent transition duration-300`}
            >
              <Link to={`https://wa.me/083894079797`} className="">
                0838-9492-7117
              </Link>
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
      </AnimasiFadeIn>
    </>
  );
};

export default ContactBody;
