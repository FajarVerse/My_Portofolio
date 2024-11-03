import Hero from "../components/fragments/Hero/HeroFragment";
import AuthLayout from "../components/layout/AuthLayout";

const HomeSection = () => {
  return (
    <>
      <AuthLayout
        id="home"
        sectionClass="bg-second lg:h-screen lg:pt-20"
        containerClass="lg:h-full"
      >
        <Hero />
      </AuthLayout>
    </>
  );
};

export default HomeSection;
