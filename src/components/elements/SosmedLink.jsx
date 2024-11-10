import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../assets/animasi/variants";
import { DarkMode } from "../../assets/context/DarkModeContext";
import { useContext, useState } from "react";

const SosmedLink = (props) => {
  const { link, username, bgColor, children } = props;
  const [isHover, setIsHover] = useState(false);
  const { darkMode } = useContext(DarkMode);

  return (
    <>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <Link
          to={`/${link}`}
          className={`${
            darkMode
              ? "sosmed-icon-dark hover:ring-1 hover:ring-light"
              : "sosmed-icon-light hover:ring-1 hover:ring-slate-500"
          } group flex items-center`}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          style={{ backgroundColor: `${isHover ? bgColor : ""}` }}
        >
          <span>{children}</span>
          <span
            className={`font-inter text-lg text-light leading-normal hidden lg:block lg:text-[0.8rem] xl:text-lg`}
          >
            {username}
          </span>
        </Link>
      </motion.div>
    </>
  );
};

export default SosmedLink;
