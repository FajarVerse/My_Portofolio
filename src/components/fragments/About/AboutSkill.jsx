import Description from "../../elements/Description";
import AboutSkillsList from "./AboutSkillsList";

const AboutSkill = () => {
  return (
    <>
      <div className="w-full lg:w-1/2">
        <Description className="lg:font-medium xl:text-lg 2xl:text-xl">
          Here are my main technical skills. From programming languages to
          frameworks, these are all tools that support me in every project.
        </Description>
        <div className="w-full h-0.5 my-3 bg-accent"></div>
        <AboutSkillsList />
      </div>
    </>
  );
};

export default AboutSkill;
