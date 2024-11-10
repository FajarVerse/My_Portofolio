import { useContext } from "react";
import AnimasiFadeZoom from "../../elements/AnimasiFadeZoom";
import Description from "../../elements/Description";
import Input from "../../elements/Input";
import TextArea from "../../elements/TextArea";
import { DarkMode } from "../../../assets/context/DarkModeContext";

const ContactForm = () => {
  const { darkMode } = useContext(DarkMode);

  return (
    <>
      <AnimasiFadeZoom delay={0.2}>
        <form
          action=""
          className={` w-full px-5 py-5 shadow-md shadow-slate-500 ring-1 rounded-lg md:px-8 lg:px-5 ${
            darkMode ? "ring-gray-600" : "ring-[rgba(18,18,18,0.4)]"
          }`}
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
              <Input inputType="text" id="last-name" placeHolder="Last name" />
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
      </AnimasiFadeZoom>
    </>
  );
};

export default ContactForm;
