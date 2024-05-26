import { Button } from "./button";
import { motion } from "framer-motion";
import videoBg from "src/video/n.mp4";

const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export default function HeroSection() {
  return (
    <>
      <div className="mx-auto md:container md:pt-7">
        <header className="relative mb-12 flex h-fit items-center justify-center overflow-hidden md:rounded-md">
          <div className="jusitfy-center align-center relative z-30  flex  max-w-7xl flex-col items-center  px-4 py-24  text-center sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
                <h2 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl lg:text-6xl">
                  Research Centre for Ancient Mediterranean Studies
                </h2>
              </motion.div>
              <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
                <p className="mx-auto mt-4 max-w-xl text-xl text-gray-100">
                  We share the latest research in Greek and Roman art and
                  archaeology.
                </p>
              </motion.div>
              <motion.div
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                className="mt-6 w-full sm:w-auto"
              >
                <Button onClick={() => (window.location.href = "/about")}>
                  Find out more
                </Button>
              </motion.div>
              <motion.div
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                className="mt-6 w-full sm:w-auto"
              >
                <Button
                  className="bg-white text-black"
                  onClick={() => (window.location.href = "/legacy")}
                >
                  Remembering A.D. Trendall
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <video
            autoPlay
            loop
            muted
            className="absolute z-10 min-h-full w-auto	 min-w-full max-w-none grayscale"
          >
            <source className="" src={videoBg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </header>

      </div>
    </>
  );
}
