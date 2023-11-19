import React from "react";
import "./styles.css";
import Image1 from "../../assets/images/image1.jpg";
import Image2 from "../../assets/images/image2.jpg";
import { motion } from "framer-motion";

function HomeTop() {
  return (
    <div className="sub-container mt-36">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        <div className="flex flex-col gap-3">
          <motion.p
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-500 text-lg"
          >
            We exit because we want to help you navigate and harness the
            potential of this ever-changing digital landscape.
          </motion.p>
          <div className="flex flex-col gap-1">
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-8xl font-black md:block hidden  titleText text-white text0"
            >
              Your
            </motion.h1>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-8xl pl-10 font-black md:block hidden titleText text-white text0"
            >
              Growth
            </motion.h1>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="text-8xl pl-20 font-black md:block hidden titleText text-white text0"
            >
              Partners
            </motion.h1>
          </div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex order-first md:order-last flex-col items-center"
        >
          <img src={Image1} alt="image1" className="w-full h-60 object-cover" />
          <img
            src={Image2}
            alt="image1"
            className="w-96 -mt-16 h-56 object-cover"
          />
          <p className="text-gray-500 text-lg mt-4">
            It's not a game of guesses, it's a game of numbers where growth is
            the ultimate goal. We leverage cutting-edge technology and
            data-driven insights to help you answer questions that unlocks
            growth.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeTop;
