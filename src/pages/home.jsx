import { useContext } from "react";
import Hero from "../components/fragments/Hero/HeroFragment";
import AuthLayout from "../components/layout/AuthLayout";
import { DarkMode } from "../assets/context/DarkModeContext";

const HomeSection = () => {
  const { darkMode } = useContext(DarkMode);

  return (
    <>
      <AuthLayout
        id="home"
        sectionClass={`${
          darkMode ? "bg-mode" : "bg-second"
        } lg:h-screen lg:pt-20`}
        containerClass="lg:h-full"
      >
        <Hero />
      </AuthLayout>
    </>
  );
};

export default HomeSection;
