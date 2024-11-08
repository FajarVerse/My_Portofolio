import Header from "../../elements/Header";
import ContactBody from "./ContactBody";
import ContactForm from "./ContactForm";

const ContactFragment = () => {
  return (
    <>
      <div className="w-full px-7 block md:px-12 lg:flex lg:gap-14 xl:px-20">
        <div className="w-full lg:hidden">
          <Header className="text-center md:text-6xl">Contact Me</Header>
        </div>
        <div className="w-full my-5 lg:w-1/2 xl:w-5/12">
          <ContactForm />
        </div>
        <div className="w-full lg:pt-10 lg:w-1/2 xl:w-3/5 xl:pl-12">
          <ContactBody />
        </div>
      </div>
    </>
  );
};

export default ContactFragment;
