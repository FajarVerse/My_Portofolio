import { fadeIn } from "../../../assets/animasi/variants";
import Header from "../../elements/Header";
import { motion } from "framer-motion";

const PortfolioHeader = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="w-full"
      >
        <Header className="text-center lg:text-6xl xl:text-7xl">
          Projects Experience
        </Header>
      </motion.div>
    </>
  );
};

export default PortfolioHeader;
