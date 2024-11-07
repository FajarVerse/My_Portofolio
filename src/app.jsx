import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HomeSection from "./pages/home";
import AboutSection from "./pages/about";
import PortfolioSection from "./pages/portfolio";
import ContactSection from "./pages/contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <HomeSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </BrowserRouter>
    </>
  );
};

export default App;
