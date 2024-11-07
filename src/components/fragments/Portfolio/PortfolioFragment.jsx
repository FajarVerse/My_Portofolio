import PortfolioHeader from "./PortfolioHader";
import PortfolioProject from "./PortfolioProject";

const PortfolioFragment = () => {
  return (
    <>
      <div className="w-full px-5 md:px-10 lg:px-16 xl:px-20 ">
        <PortfolioHeader />
        <PortfolioProject />
      </div>
    </>
  );
};

export default PortfolioFragment;
