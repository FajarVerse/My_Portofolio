import Header from "../components/elements/Header";
import SubHeader from "../components/elements/SubHeader";
import AuthLayout from "../components/layout/AuthLayout";
import project_1 from "../assets/image/portfolio_image/project_1.png";
import CardProject from "../components/fragments/CardProject";

const PortfolioSection = () => {
  return (
    <>
      <AuthLayout id="portfolio">
        <div className="w-full px-5">
          <div className="w-full">
            <Header className="text-left">Latest Projects</Header>
          </div>
          <div className="w-full px-1 mt-5 grid grid-cols-1 gap-5">
            <div className="w-full h-56 rounded-md shadow-md shadow-slate-500 overflow-hidden">
              <div
                className="relative w-full h-4/5 bg-cover card-project-hover group"
                style={{ backgroundImage: `url(${project_1})` }}
              >
                <div className="h-full flex gap-3 justify-center items-center">
                  <span className="translate-y-5 w-8 h-8 group-hover:translate-y-0">
                    <svg
                      className="w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#ffffff"
                    >
                      <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
                    </svg>
                  </span>
                  <span className="translate-y-5 w-8 h-8 group-hover:translate-y-0">
                    <svg
                      className="w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#ffffff"
                    >
                      <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Zm-40-60v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="w-full h-1/5 px-6 py-6 flex bg-light justify-between items-center">
                <SubHeader className="text-dark">Project 1</SubHeader>
                <SubHeader className="text-primary relative before:content-[''] before:absolute before:bottom-0 before:w-full before:h-0.5 before:bg-accent hover:text-accent transition duration-300 ease-in-out hover:before:bg-primary hover:before:transition before:duration-300 before:ease-out">
                  See More
                </SubHeader>
              </div>
            </div>
            <CardProject>
              <CardProject.CardImage image={project_1} imageTitle="Project 1" />
            </CardProject>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default PortfolioSection;
