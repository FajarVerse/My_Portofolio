import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HomeSection from "./pages/home";
import AboutSection from "./pages/about";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <HomeSection />
        <AboutSection />
      </BrowserRouter>
    </>
  );
};

export default App;
