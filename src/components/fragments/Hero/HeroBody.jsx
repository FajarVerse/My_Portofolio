import HeroBtn from "../../elements/heroSection/HeroBtn";
import HeroDescription from "../../elements/heroSection/HeroDescription";

const HeroBody = () => {
  return (
    <>
      <div className="w-full mx-auto mt-5 z-10 lg:w-1/2 lg:pt-10 lg:pl-32 lg:mx-0 xl:pt-5 xl:pl-44">
        <HeroDescription>
          <span className="font-bold text-base text-accent lg:block lg:font-extrabold lg:text-3xl lg:mb-2 xl:text-4xl 2xl:text-[2.5rem]">
            Junior Front-End Developer
          </span>{" "}
          <span className="xl:text-lg">
            with a keen interest in developing clean and responsive web
            interfaces.
          </span>
        </HeroDescription>
        <HeroBtn />
      </div>
    </>
  );
};

export default HeroBody;
