import { fadeIn } from "../../../assets/animasi/variants";
import Description from "../../elements/Description";
import { motion } from "framer-motion";

const AboutBiography = () => {
  return (
    <>
      <div className="w-full mb-3 lg:w-1/2 ">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <Description className="lg:font-medium lg:text-sm xl:text-base 2xl:text-lg">
            Hi, I`m Gifari Fajar Maulana, Junior Front End Web Developer who is
            very interested in creating clean and neat web interfaces. I am a
            third semester student at the Jakarta LP3i Polytechnic.
          </Description>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <Description className="lg:font-medium lg:text-sm xl:text-base 2xl:text-lg">
            I am very interested and always curious about technological
            developments. I want to continue learning about technological
            developments and also aspire to implement creative ideas that can
            solve real problems.
          </Description>
        </motion.div>
      </div>
    </>
  );
};

export default AboutBiography;
