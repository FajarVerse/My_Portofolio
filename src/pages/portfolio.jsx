import AuthLayout from "../components/layout/AuthLayout";
import PortfolioFragment from "../components/fragments/Portfolio/PortfolioFragment";

const PortfolioSection = () => {
  return (
    <>
      <AuthLayout id="portfolio" sectionClass="bg-second pt-28 pb-24">
        <PortfolioFragment />
      </AuthLayout>
    </>
  );
};

export default PortfolioSection;
