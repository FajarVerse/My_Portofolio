import { useContext } from "react";
import AboutFragment from "../components/fragments/About/AboutFragment";
import AuthLayout from "../components/layout/AuthLayout";
import { DarkMode } from "../assets/context/DarkModeContext";

const AboutSection = () => {
  const {darkMode} = useContext(DarkMode)

  return (
    <>
      <AuthLayout
        sectionClass={` ${darkMode ? "bg-mode" : "bg-light"}`}
        id="about"
      >
        <AboutFragment />
      </AuthLayout>
    </>
  );
};

export default AboutSection;
