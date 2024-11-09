import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../assets/animasi/variants";

const SosmedLink = (props) => {
  const { link, platform, username, children } = props;

  return (
    <>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <Link to={`/${link}`} className="sosmed-icon group flex items-center">
          <span>{children}</span>
          <span className="sosmed-username">{username}</span>
        </Link>
      </motion.div>
    </>
  );
};

export default SosmedLink;
