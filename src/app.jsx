import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HomeSection from "./pages/home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <HomeSection />
      </BrowserRouter>
    </>
  );
};

export default App;
