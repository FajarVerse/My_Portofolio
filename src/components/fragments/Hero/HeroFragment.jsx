import HeroBody from "./HeroBody";
import HeroHeader from "./HeroHeader";

const Hero = () => {
  return (
    <>
      <div className="relative w-full px-5 md:px-10 lg:h-full lg:px-20 lg:flex xl:px-24">
        <HeroHeader />
        <HeroBody />
      </div>
    </>
  );
};

export default Hero;
