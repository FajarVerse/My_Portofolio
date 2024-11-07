import { useRef } from "react";
import Description from "../components/elements/Description";
import Header from "../components/elements/Header";
import SubHeader from "../components/elements/SubHeader";
import AuthLayout from "../components/layout/AuthLayout";
import TextArea from "../components/elements/TextArea";
import Input from "../components/elements/input";
import LinkBtn from "../components/elements/LinkBtn";

const ContactSection = () => {
  return (
    <>
      <AuthLayout id="contact" sectionClass="bg-light">
        <div className="w-full px-5 block">
          <div className="w-full">
            <Header className="text-center">Contact Me</Header>
          </div>
          <div className="w-full my-5">
            <form
              action=""
              className="w-full px-5 py-5 shadow-md shadow-slate-500 rounded-lg"
            >
              <legend className="font-inter font-semibold text-3xl text-accent">
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
                  <Input
                    inputType="text"
                    id="last-name"
                    placeHolder="Last name"
                  />
                </div>
                <div className="w-full flex mt-6">
                  <TextArea id="last-name" placeHolder="How can I help?" />
                </div>
                <div className="w-full flex mt-5">
                  <button className="w-full py-1.5 font-poppins font-medium text-center text-base text-light bg-accent rounded-full">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default ContactSection;
