import Header from "../components/elements/Header";
import SubHeader from "../components/elements/SubHeader";
import AuthLayout from "../components/layout/AuthLayout";
import project_1 from "../assets/image/portfolio_image/project_1.png";
import CardProject from "../components/fragments/CardProject";

const PortfolioSection = () => {
  return (
    <>
      <AuthLayout id="portfolio" sectionClass="bg-second pt-28 pb-24">
        <div className="w-full px-5 md:px-10 lg:px-16 xl:px-20 ">
          <div className="w-full">
            <Header className="text-left lg:text-6xl xl:text-7xl">
              Latest Projects
            </Header>
          </div>
          <div className="w-full px-2 py-3 mt-3 grid grid-cols-1 gap-5 md:mt-5 md:grid-cols-2 md:gap-3 lg:mt-7 lg:gap-5 xl:gap-4 xl:grid-cols-3 xl:justify-evenly 2xl:gap-5 card-on-hover">
            <CardProject>
              <CardProject.CardImage image={project_1} />
              <CardProject.CardBody>Project 1</CardProject.CardBody>
            </CardProject>
            <CardProject>
              <CardProject.CardImage image={project_1} />
              <CardProject.CardBody>Project 1</CardProject.CardBody>
            </CardProject>
            <CardProject>
              <CardProject.CardImage image={project_1} />
              <CardProject.CardBody>Project 1</CardProject.CardBody>
            </CardProject>
            <CardProject>
              <CardProject.CardImage image={project_1} />
              <CardProject.CardBody>Project 1</CardProject.CardBody>
            </CardProject>
            <CardProject>
              <CardProject.CardImage image={project_1} />
              <CardProject.CardBody>Project 1</CardProject.CardBody>
            </CardProject>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default PortfolioSection;
