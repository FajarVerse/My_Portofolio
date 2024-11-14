import { fadeIn } from "../../../assets/animasi/variants";
import Description from "../../elements/Description";
import AboutSkillsList from "./AboutSkillsList";
import { motion } from "framer-motion";

const AboutSkill = () => {
  return (
    <>
      <div className="w-full lg:w-1/2">
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <Description className="lg:font-medium xl:text-lg 2xl:text-xl">
            Inilah keterampilan teknis utama saya. Mulai dari bahasa pemrograman
            hingga framework yang saya gunakan, semua ini adalah alat yang mendukung setiap
            proyek yang saya kerjakan
          </Description>
        </motion.div>
        <div className="w-full h-0.5 my-3 bg-accent"></div>
        <AboutSkillsList />
      </div>
    </>
  );
};

export default AboutSkill;
