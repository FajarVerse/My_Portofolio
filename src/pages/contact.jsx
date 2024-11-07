import { useRef } from "react";
import Description from "../components/elements/Description";
import Header from "../components/elements/Header";
import SubHeader from "../components/elements/SubHeader";
import AuthLayout from "../components/layout/AuthLayout";
import TextArea from "../components/elements/TextArea";
import Input from "../components/elements/input";
import LinkBtn from "../components/elements/LinkBtn";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <>
      <AuthLayout id="contact" sectionClass="bg-light">
        <div className="w-full px-7 block md:px-12 lg:flex lg:gap-14 xl:px-20">
          <div className="w-full lg:hidden">
            <Header className="text-center md:text-6xl">Contact Me</Header>
          </div>
          <div className="w-full my-5 lg:w-1/2 xl:w-5/12">
            <form
              action=""
              className="w-full px-5 py-5 shadow-md shadow-slate-500 rounded-lg md:px-8 lg:px-5"
            >
              <legend className="font-inter font-semibold text-3xl text-accent md:text-5xl lg:mb-2 xl:font-bold">
                Get in Touch
              </legend>
              <Description className="font-medium mt-1">
                You Can Reach Us
              </Description>
              <div className="w-full mt-5">
                <div className="w-full flex gap-3 mt-5">
                  <Input
                    inputType="text"
                    id="first-name"
                    placeHolder="First name"
                  />
                  <Input
                    inputType="text"
                    id="last-name"
                    placeHolder="Last name"
                  />
                </div>
                <div className="w-full flex mt-6">
                  <Input
                    inputType="number"
                    id="no-phone"
                    placeHolder="No handphone"
                  />
                </div>
                <div className="w-full flex mt-6">
                  <Input inputType="email" id="email" placeHolder="Email" />
                </div>
                <div className="w-full flex mt-6">
                  <TextArea id="comment" placeHolder="How can I help?" />
                </div>
                <div className="w-full flex mt-5">
                  <button className="w-full py-1.5 font-poppins font-medium text-center text-base text-light bg-accent rounded-full">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="w-full lg:pt-10 lg:w-1/2 xl:w-3/5 xl:pl-12">
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
              <button className="px-3.5 py-1.5 bg-accent font-inter font-medium text-sm text-light flex items-center gap-1 rounded-md hover:scale-105 transition ease-bounce duration-300 lg:text-base lg:px-5 lg:py-2">
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
              </button>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default ContactSection;
