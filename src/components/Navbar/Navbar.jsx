import React, { useState } from "react";
import Logo from "../../assets/logo-preview.png";
import Hamburger from "../../assets/option.png";
import Cancel from "../../assets/cancel.png";
import { motion } from "framer-motion";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const links = [
    {
      label: "STRATEGY AND CONSULTING",
      id: "strategy",
    },
    {
      label: "ONLINE MARKETING EXPERIENCE",
      id: "online-marketing",
    },
    {
      label: "COMMERCE SOLUTIONS",
      id: "commerceSolution",
    },
    {
      label: "GROWTH MARKETING",
      id: "growthsMarketing",
    },
    {
      label: "ASSET CREATION",
      id: "assetCreation",
    },
  ];

  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 w-full z-10 bg-transparent "
    >
      <div className="container mx-auto md:px-20 lg:px-32 px-5">
        <div className="flex items-center w-full justify-between">
          <img src={Logo} alt="logo" className="lg:w-28 lg:h-28 w-20 h-20" />
          <div className="cursor-pointer" onClick={() => setToggle(!toggle)}>
            <img
              src={Hamburger}
              alt="Hamburger"
              className="md:w-10 md:h-10 h-7 w-7"
            />
          </div>
        </div>
        {toggle && (
          <div
            className={`fixed inset-0 z-10 bg-opacity-25 bg-black ${
              toggle ? "block" : "hidden"
            }`}
          >
            <div
              style={{ zIndex: "1" }}
              className="absolute top-0 right-0 pt-6 pr-4  lg:w-96 w-full px-5 py-10 h-full border border-solid shadow-lg bg-white"
            >
              <div className="flex flex-col gap-3">
                <img
                  onClick={() => setToggle(false)}
                  src={Cancel}
                  className="h-7 w-7 ml-auto cursor-pointer"
                  alt=""
                />
                <div className="flex flex-col gap-6 mt-10">
                  {links.map(({ label, id, ref }) => {
                    return (
                      <div
                        onClick={() => {
                          document
                            .getElementById(id)
                            .scrollIntoView({ behavior: "smooth" });
                          setToggle(false);
                        }}
                        key={id}
                        className="md:rotate-0 -rotate-90 cursor-pointer"
                      >
                        <div
                          onClick={() =>
                            ref.current.scrollIntoView({ behavior: "smooth" })
                          }
                          className={` md:text-2xl text-lg  text-black`}
                        >
                          {label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Navbar;
