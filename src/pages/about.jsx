import AboutFragment from "../components/fragments/About/AboutFragment";
import AuthLayout from "../components/layout/AuthLayout";

const AboutSection = () => {
  return (
    <>
      <AuthLayout sectionClass="bg-light" id="about">
        <AboutFragment />
      </AuthLayout>
    </>
  );
};

export default AboutSection;
