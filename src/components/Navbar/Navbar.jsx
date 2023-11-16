import React, { useState } from "react";
import Logo from "../../assets/logo-preview.png";
import Hamburger from "../../assets/option.png";
import Cancel from "../../assets/cancel.png";
import { motion } from "framer-motion";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 inset-x-0 z-10 bg-transparent "
    >
      <div className="main-container">
        <div className="flex items-center justify-between">
          <img src={Logo} alt="logo" className="w-28 h-28" />
          <div className="cursor-pointer" onClick={() => setToggle(!toggle)}>
            <img
              src={toggle === false ? Hamburger : Cancel}
              alt="Hamburger"
              className="w-10 h-10"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
