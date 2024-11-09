import AboutBiography from "./AboutBiography";
import AboutSkill from "./AboutSkill";
import AboutSosmed from "./AboutSosmed";

const AboutBody = () => {
  return (
    <>
      <div className="w-full block lg:flex lg:items-start lg:gap-5">
        <AboutSosmed />
        <div className="w-full block lg:w-4/5 lg:flex lg:gap-5">
          <AboutBiography />
          <AboutSkill />
        </div>
      </div>
    </>
  );
};

export default AboutBody;
