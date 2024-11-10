import { useContext } from "react";
import { DarkMode } from "../assets/context/DarkModeContext";
import PortfolioFragment from "../components/fragments/Portfolio/PortfolioFragment";
import AuthLayout from "../components/layout/AuthLayout";

const PortfolioSection = () => {
  const { darkMode } = useContext(DarkMode);

  return (
    <>
      <AuthLayout
        id="portfolio"
        sectionClass={`${darkMode ? "bg-mode" : "bg-second"} pt-28 pb-24`}
      >
        <PortfolioFragment />
      </AuthLayout>
    </>
  );
};

export default PortfolioSection;
