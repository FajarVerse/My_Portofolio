import AboutBody from "./AboutBody";
import AboutHeader from "./AboutHeader";

const AboutFragment = () => {
  return (
    <>
      <div className="relative w-full px-7 md:px-14 lg:px-20 xl:px-24">
        <AboutHeader />
        <AboutBody />
      </div>
    </>
  );
};

export default AboutFragment;
