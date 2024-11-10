import Header from "../../elements/Header";
import my_photo_about from "../../../assets/image/my_photo/photo_4.jpg";
import { motion } from "framer-motion";
import { fade, fadeIn } from "../../../assets/animasi/variants";
import { useContext } from "react";
import { DarkMode } from "../../../assets/context/DarkModeContext";

const AboutHeader = () => {
  const { darkMode } = useContext(DarkMode);

  return (
    <>
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="w-full mb-5 lg:w-2/4 lg:absolute"
      >
        <Header className="text-center lg:text-7xl lg:text-left lg:text-pretty lg:tracking-wide xl:text-8xl">
          Get to Know Me Better
        </Header>
      </motion.div>
      <div className="w-full mx-auto mb-5">
        <motion.div
          variants={fade(0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className={`w-11/12 mx-auto rounded-md overflow-hidden shadow-md ${
            darkMode ? "shadow-slate-200 " : "shadow-slate-600"
          } md:w-5/6 lg:w-[70%] lg:h-[22rem] lg:mr-0 lg:rounded-md xl:w-4/6 xl:h-[27rem] 2xl:w-3/5`}
        >
          <img
            src={my_photo_about}
            alt="Gifar Fajar Maulana"
            className="w-full h-full lg:object-cover lg:object-top"
          />
        </motion.div>
      </div>
    </>
  );
};

export default AboutHeader;
