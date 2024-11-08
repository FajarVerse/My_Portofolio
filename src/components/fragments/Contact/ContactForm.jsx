
import Description from "../../elements/Description";
import Input from "../../elements/input";
import TextArea from "../../elements/TextArea";

const ContactForm = () => {
  return (
    <>
      <form
        action=""
        className="w-full px-5 py-5 shadow-md shadow-slate-500 rounded-lg md:px-8 lg:px-5"
      >
        <legend className="font-inter font-semibold text-3xl text-accent md:text-5xl lg:mb-2 xl:font-bold">
          Get in Touch
        </legend>
        <Description className="font-medium mt-1">You Can Reach Us</Description>
        <div className="w-full mt-5">
          <div className="w-full flex gap-3 mt-5">
            <Input inputType="text" id="first-name" placeHolder="First name" />
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
    </>
  );
};

export default ContactForm;
