import { useRef } from "react";
import BtnDarkMode from "../fragments/btnDarkMode";

const Navbar = () => {
  const navabarMenuRef = useRef(null);
  const HeaderRef = useRef(null);
  const BtnTopRef = useRef(null);

  const menuOnClick = () => {
    navabarMenuRef.current.classList.toggle("invisible");
    navabarMenuRef.current.classList.toggle("nav-active");
    console.log("test");
  };

  window.onscroll = function () {
    const fixNavbar = HeaderRef.current.offsetTop;
    if (window.scrollY > fixNavbar) {
      HeaderRef.current.classList.add("header-fixed");
      BtnTopRef.current.classList.remove("invisible");
      BtnTopRef.current.classList.add("btn-top-active");
    } else {
      HeaderRef.current.classList.remove("header-fixed");
      BtnTopRef.current.classList.add("invisible");
      BtnTopRef.current.classList.remove("btn-top-active");
    }
  };

  return (
    <>
      <header
        className="absolute top-0 left-0 w-full flex items-center z-[999] transition-all duration-300 ease-in"
        ref={HeaderRef}
      >
        <div className="container">
          <div className="w-full px-4 py-4 mx-auto flex justify-between items-center md:px-10 lg:px-20 lg:py-5 xl:px-24">
            <div className="h-full flex lg:w-[97%] lg:justify-between lg:items-center ">
              <div className="flex items-center z-50">
                <a
                  href="#"
                  className="font-bold font-poppins text-2xl text-primary xl:text-3xl"
                >
                  Fajar<span className="text-accent">Dev</span>
                </a>
              </div>

              <div
                className="invisible opacity-0 absolute right-5 top-24 px-10 py-5 rounded-md bg-light shadow-md shadow-slate-400 md:right-12 lg:static lg:right-0 lg:top-0 lg:-translate-y-0 lg:visible lg:opacity-100 lg:p-0 lg:shadow-none lg:block lg:bg-transparent transition-all duration-500 ease-bounce"
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

            <div className=" flex items-center gap-3 lg:-mr-10 lg:justify-center ">
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
      <button
        className="fixed invisible opacity-0 bottom-5 right-5 p-3 bg-accent rounded-full lg:bottom-8 lg:right-8 translate-y-3 cursor-pointer z-[999] transition-all duration-300 ease-in-out"
        ref={BtnTopRef}
      >
        <a href="#home">
          <span className="text-light">
            <svg
              className="w-6 fill-current lg:w-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="m200-120-40-40 320-720 320 720-40 40-280-120-280 120Zm84-124 196-84 196 84-196-440-196 440Zm196-84Z" />
            </svg>
          </span>
        </a>
      </button>
    </>
  );
};

export default Navbar;
