import { motion } from "framer-motion";
import { fadeZoom } from "../../assets/animasi/variants";

const AnimasiFadeZoom = (props) => {
  const { delay, children } = props;

  return (
    <>
      <motion.div
        variants={fadeZoom(delay)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimasiFadeZoom;
