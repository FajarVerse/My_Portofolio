import ContactFragment from "../components/fragments/Contact/ContactFragment";
import AuthLayout from "../components/layout/AuthLayout";

const ContactSection = () => {
  return (
    <>
      <AuthLayout id="contact" sectionClass="bg-light">
        <ContactFragment />
      </AuthLayout>
    </>
  );
};

export default ContactSection;
