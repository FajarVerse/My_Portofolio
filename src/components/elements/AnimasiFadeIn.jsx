import { motion } from "framer-motion";
import { fadeIn, fadeZoom } from "../../assets/animasi/variants";

const AnimasiFadeIn = (props) => {
  const { varian, delay, children } = props;

  return (
    <>
      <motion.div
        variants={fadeIn(varian, delay)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimasiFadeIn;