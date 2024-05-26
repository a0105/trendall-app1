import { motion } from "framer-motion";
import { Separator } from "../ui/separator";
import StudyRoom from "../../images/study room view.jpg";

export function FadeDown({ children, delay }) {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, type: "tween" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={FADE_DOWN_ANIMATION_VARIANTS}
    >
      {children}
    </motion.div>
  );
}
export default function AboutInfo() {
  return (
    <>
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <div className="space-y-5 pb-8 pt-12 lg:pt-16">
            <FadeDown delay={0}>
              <h1 className="font-heading mb-4 pb-3 text-2xl font-bold tracking-tight sm:text-4xl">
                About The Trendall Research Center
              </h1>
            </FadeDown>
            <FadeDown delay={0.2}>
              <p className="text-base lg:text-lg">
                The Trendall Centre at La Trobe University houses a unique
                archive of some 40,000 images of ancient South Italian vases.
              </p>
            </FadeDown>
            <FadeDown delay={0.3}>
              <p className="text-base lg:text-lg">
                These vases were made mainly in the 4th century BCE, and the
                imagery on them provides extraordinary detail regarding the
                lifestyles of the ancient Greeks who settled in South Italy, as
                well as the technological processes which enabled pottery
                production and the economic and trade environment which ensured
                its distribution.
              </p>
            </FadeDown>
            <FadeDown delay={0.4}>
              <div className="drop-shadow-md">
                <img
                  src={StudyRoom}
                  alt="Study Room"
                  className="h-[240px] w-full rounded-md object-cover"
                />
              </div>
            </FadeDown>
          </div>
          <Separator />
          <div className="py-8">
            <div className="space-y-5 lg:space-y-0">
              <h1 className="block text-2xl font-bold lg:hidden">Objective</h1>

              <div>
                <p className="text-lg font-medium">
                  The Trendall Research Centre has the following objectives:
                </p>
              </div>
            </div>
            <div className="relative h-0 w-0">
              <div className="absolute -left-32 -top-7 hidden text-xl font-bold lg:block">
                Objective
              </div>
            </div>
            <div className="px-5">
              <ol className="mt-4 list-outside list-decimal space-y-4 text-base">
                <li>
                  To promote research in the general area of Ancient
                  Mediterranean studies, particularly in the archaeology of
                  South Italy and Sicily during the Classical period.
                </li>
                <li>
                  To disseminate within the general community in Australia the
                  results of the latest research in Greek and Roman art and
                  archaeology through the sponsorship of conferences, lectures,
                  and seminars.
                </li>
                <li>
                  To make available, at the Director's discretion, the resources
                  of the Centre to all scholars and graduate students, whether
                  from Australia or overseas, who wish to use the library and
                  archive.
                </li>
                <li>
                  To maintain and extend both the Library and the Archive (as
                  unique research resources in Australia) through the
                  acquisition of books and periodicals relating to Greek and
                  Roman culture, and images of South Italian red-figure vases.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
