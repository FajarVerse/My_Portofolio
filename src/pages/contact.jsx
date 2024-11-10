import { useContext } from "react";
import ContactFragment from "../components/fragments/Contact/ContactFragment";
import AuthLayout from "../components/layout/AuthLayout";
import { DarkMode } from "../assets/context/DarkModeContext";

const ContactSection = () => {
  const { darkMode } = useContext(DarkMode);

  return (
    <>
      <AuthLayout id="contact" sectionClass={`${darkMode ? "bg-mode" : "bg-light"}`}>
        <ContactFragment />
      </AuthLayout>
    </>
  );
};

export default ContactSection;
