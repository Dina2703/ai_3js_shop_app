import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

function Home() {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div {...headTextAnimation}>
            <h1 className="head-text">
              LET&apos;S <br className="xl:block hidden" /> DO IT
            </h1>
          </motion.div>
          <motion.div
            {...headContainerAnimation}
            className="flex flex-col gap-5"
          >
            <p className="max-w-md font-normal to-gray-600 text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, non itaque laborum eius est earum iusto commodi quia
              sit eum quas assumenda{" "}
              <strong>delectus minus ipsum expedita</strong>, aliquid, ipsam
              deleniti tempora.
            </p>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default Home;
