/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";

function LeftNavlinks(props) {
  const { links, activeLinkId, setComponentsColor } = props;
  const [color, setColor] = useState("");

  useEffect(() => {
    if (activeLinkId === "strategy") {
      setColor("bg-[#7071E8]");
      setComponentsColor("bg-[#7071E8]");
    } else if (activeLinkId === "online-marketing") {
      setColor("bg-[#FFC7C7]");
      setComponentsColor("bg-[#FFC7C7]");
    } else if (activeLinkId === "commerceSolution") {
      setColor("bg-[#ED9ED6]");
      setComponentsColor("bg-[#ED9ED6]");
    } else if (activeLinkId === "growthsMarketing") {
      setColor("bg-[#C683D7]");
      setComponentsColor("bg-[#C683D7]");
    } else if (activeLinkId === "assetCreation") {
      setColor("bg-[#860A35]");
      setComponentsColor("bg-[#860A35]");
    } else {
      setColor("bg-[#7071E8]");
      setComponentsColor("bg-[#7071E8]");
    }
  }, [activeLinkId, setComponentsColor]);

  return (
    <div
      className={` ${color} transition-colors duration-500 ease-in-out  grid place-items-center h-screen sticky left-0 top-0 mt-20`}
    >
      <div className="">
        <ul className="list-none md:block hidden">
          {links.map(({ label, id, ref }) => {
            return (
              <li key={id} className="md:rotate-0 -rotate-90">
                <div
                  onClick={() =>
                    ref.current.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`navItems${
                    id === activeLinkId
                      ? "transition-opacity duration-500 text-opacity-95 text-white"
                      : ""
                  } md:text-4xl text-lg transition-opacity duration-500 text-opacity-30 text-white`}
                >
                  {label}
                </div>
              </li>
            );
          })}
        </ul>
        <div className="flex md:hidden flex-col gap-4">
          {links.map(({ label, id, ref }) => {
            return (
              <div key={id} className="md:rotate-0 -rotate-90">
                <div
                  onClick={() =>
                    ref.current.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`navItems${
                    id === activeLinkId
                      ? "transition-opacity duration-500 text-opacity-95 text-white"
                      : ""
                  } md:text-4xl truncate text-lg transition-opacity duration-500 text-opacity-30 text-white`}
                >
                  {label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LeftNavlinks;
