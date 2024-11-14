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
            Hai, saya Gifari Fajar Maulana, Junior Front End Web Developer yang
            sangat tertarik untuk membuat antarmuka website yang interaktif dan
            responsive. Saya seorang mahasiswa semester tiga Politeknik LP3i
            Jakarta.
          </Description>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <Description className="lg:font-medium lg:text-sm xl:text-base 2xl:text-lg">
            Saya sangat tertarik dan selalu ingin tahu tentang perkembangan
            teknologi. Saya ingin terus belajar tentang perkembangan teknologi
            dan juga bercita-cita untuk mengimplementasikan ide-ide kreatif yang
            dapat memecahkan masalah yang nyata.
          </Description>
        </motion.div>
      </div>
    </>
  );
};

export default AboutBiography;
