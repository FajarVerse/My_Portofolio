import { useRef } from "react";
import BtnDarkMode from "../fragments/BtnDarkMode";

const Navbar = () => {
  const navabarMenuRef = useRef(null);
  const HeaderRef = useRef(null);

  const menuOnClick = () => {
    navabarMenuRef.current.classList.toggle("nav-active");
  };

  window.onscroll = function () {
    const fixNavbar = HeaderRef.current.offsetTop;
    if (window.scrollY > fixNavbar) {
      HeaderRef.current.classList.add("header-fixed");
    } else {
      HeaderRef.current.classList.remove("header-fixed");
    }
  };

  return (
    <header className="absolute top-0 w-full z-[99]" ref={HeaderRef}>
      <div className="container mx-auto">
        <div className="w-full px-4 py-4 mx-auto flex justify-between items-center md:px-10 lg:px-20 lg:py-5 xl:px-24">
          <div className="w-[95%] h-full flex lg:justify-between lg:items-center">
            <div className="flex items-center z-50">
              <a
                href="#"
                className="font-bold font-poppins text-2xl text-primary xl:text-3xl"
              >
                Fajar<span className="text-accent">Dev</span>
              </a>
            </div>

            <div
              className="invisible opacity-0 absolute right-5 top-24 px-10 py-5 rounded-md bg-light shadow-md shadow-slate-400 md:right-12 lg:relative lg:right-0 lg:top-0 lg:-translate-y-0 lg:visible lg:opacity-100 lg:p-0 lg:shadow-none lg:block lg:bg-transparent transition-all duration-500 ease-bounce"
              ref={navabarMenuRef}
            >
              <ul className="flex flex-col gap-5 items-center lg:flex-row lg:gap-12 xl:gap-14">
                <li className="navbar-menu-list">
                  <a href="#home">HOME</a>
                </li>
                <li className="navbar-menu-list">
                  <a href="#about">ABOUT</a>
                </li>
                <li className="navbar-menu-list">
                  <a href="#portfolio">PORTFOLIO</a>
                </li>
                <li className="navbar-menu-list">
                  <a href="#contact">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-[10%] mr-6 flex items-center gap-7 lg:-mr-10 lg:justify-center">
            <BtnDarkMode />

            <button
              className="flex flex-col items-end gap-1.5 group lg:hidden"
              onClick={menuOnClick}
            >
              <span className="w-8 hamburger-line"></span>
              <span className="w-7 hamburger-line"></span>
              <span className="w-6 hamburger-line"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
