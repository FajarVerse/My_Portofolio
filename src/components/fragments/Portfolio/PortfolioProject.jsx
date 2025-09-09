import CardProject from "../CardProject";
import project_1 from "../../../assets/image/portfolio_image/project_1.png";
import project_2 from "../../../assets/image/portfolio_image/project_2.png";
import project_3 from "../../../assets/image/portfolio_image/project_3.png";
import project_4 from "../../../assets/image/portfolio_image/project_4.png";
import project_5 from "../../../assets/image/portfolio_image/project_5.png";
import AnimasiFadeIn from "../../elements/AnimasiFadeIn";

const PortfolioProject = () => {
  return (
    <>
      <div className="w-full px-2 py-3 mt-3 grid grid-cols-1 gap-5 md:mt-5 md:grid-cols-2 md:gap-3 lg:mt-10 lg:gap-5 xl:gap-4 xl:grid-cols-3 xl:justify-evenly 2xl:gap-5 card-on-hover">
        <AnimasiFadeIn varian="up" delay={0.2}>
          <CardProject>
            <CardProject.CardImage
              image={project_1}
              link="https://fajardev-questforgame-1-5.vercel.app/"
            />
            <CardProject.CardBody link="https://github.com/FajarVerse/QuestForGame-1.5">
              QuestForGame 1.5
            </CardProject.CardBody>
          </CardProject>
        </AnimasiFadeIn>

        <AnimasiFadeIn varian="up" delay={0.4}>
          <CardProject>
            <CardProject.CardImage
              image={project_2}
              link="https://streaming-app-clone-pi.vercel.app/"
            />
            <CardProject.CardBody link="https://github.com/FajarVerse/streaming-app-clone">
              Streaming App Clone
            </CardProject.CardBody>
          </CardProject>
        </AnimasiFadeIn>

        <AnimasiFadeIn varian="up" delay={0.6}>
          <CardProject>
            <CardProject.CardImage
              image={project_3}
              link="https://fajarverse.github.io/WalkInSTyle-Website.0.1/#menu"
            />
            <CardProject.CardBody link="https://github.com/FajarVerse/WalkInSTyle-Website.0.1">
              Landing Page Web
            </CardProject.CardBody>
          </CardProject>
        </AnimasiFadeIn>

        <AnimasiFadeIn varian="up" delay={0.6}>
          <CardProject>
            <CardProject.CardImage
              image={project_4}
              link="https://github.com/devdigitalhero/landing-page"
            />
            <CardProject.CardBody link="https://github.com/devdigitalhero/landing-page">
              Digital Hero Landing Page (Digital Hero)
            </CardProject.CardBody>
          </CardProject>
        </AnimasiFadeIn>

        <AnimasiFadeIn varian="up" delay={0.6}>
          <CardProject>
            <CardProject.CardImage
              image={project_5}
              link="https://github.com/devdigitalhero/booking-page"
            />
            <CardProject.CardBody link="https://github.com/devdigitalhero/booking-page">
              Digital Hero Booking Panel (Digital Hero)
            </CardProject.CardBody>
          </CardProject>
        </AnimasiFadeIn>
      </div>
    </>
  );
};

export default PortfolioProject;
