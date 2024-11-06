import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HomeSection from "./pages/home";
import AboutSection from "./pages/about";
import PortfolioSection from "./pages/portfolio";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <HomeSection />
        <AboutSection />
        <PortfolioSection />
      </BrowserRouter>
    </>
  );
};

export default App;
