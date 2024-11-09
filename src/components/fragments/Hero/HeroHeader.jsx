import HeroSubTilte from "../../elements/heroSection/HeroSubTitle";
import HeroTitle from "../../elements/heroSection/HeroTitle";
import my_photo1 from "../../../assets/image/my_photo/photo_1.png";
import { motion } from "framer-motion";
import { fadeIn, fadeZoom } from "../../../assets/animasi/variants";

const HeroHeader = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="w-full relative mb-5 text-center z-10 lg:w-1/2 lg:flex lg:flex-col lg:justify-end lg:text-left lg:pb-48 xl:pl-2"
      >
        <HeroSubTilte>I'm</HeroSubTilte>
        <HeroTitle>Gifari Fajar Maulana</HeroTitle>
      </motion.div>
      <div className="hidden lg:block lg:absolute lg:top-72 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:z-0 xl:scale-125 xl:top-64 2xl:top-80">
        <span>
          <svg
            width={550}
            height={550}
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#F7F7F7"
              d="M71.7,-23.4C81.1,5.8,69,42,44.3,59.6C19.6,77.2,-17.6,76.3,-41.6,58.5C-65.6,40.8,-76.5,6.2,-67.4,-22.5C-58.2,-51.3,-29.1,-74.1,1,-74.5C31.1,-74.8,62.2,-52.6,71.7,-23.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </span>
      </div>
      <div className="relative mx-auto w-60 image-container md:w-80 lg:w-[24rem] lg:absolute lg:-bottom-10 lg:left-1/2 lg:-translate-x-1/2 lg:z-30 xl:w-[27.5rem]">
        <motion.div
          variants={fadeZoom( 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full relative mx-auto"
        >
          <img src={my_photo1} alt="" className="w-full relative mx-auto" />
        </motion.div>
      </div>
    </>
  );
};

export default HeroHeader;
