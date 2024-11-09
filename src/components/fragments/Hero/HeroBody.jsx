import { motion } from "framer-motion";
import { fadeIn } from "../../../assets/animasi/variants";
import Button from "../../elements/Button";
import HeroDescription from "../../elements/heroSection/HeroDescription";

const HeroBody = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="w-full mx-auto mt-5 z-10 lg:w-1/2 lg:pt-10 lg:pl-32 lg:mx-0 xl:pt-5 xl:pl-44"
      >
        <HeroDescription>
          <span className="font-bold text-base text-accent lg:block lg:font-extrabold lg:text-3xl lg:mb-2 xl:text-4xl 2xl:text-[2.5rem]">
            Junior Front-End Developer
          </span>{" "}
          <span className="xl:text-lg">
            with a keen interest in developing clean and responsive web
            interfaces.
          </span>
        </HeroDescription>
        <a href="#about">
          <Button>
            Show More{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffffff"
              >
                <path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" />
              </svg>
            </span>
          </Button>
        </a>
      </motion.div>
    </>
  );
};

export default HeroBody;
