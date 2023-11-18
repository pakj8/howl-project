/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function LeftNavlinks(props) {
  const { links, activeLinkId } = props;
  return (
    <div className="bg-[#7071E8] grid place-items-center h-screen sticky left-0 top-0 mt-20">
      <div className="">
        <ul className="list-none">
          {links.map(({ label, id, ref }) => {
            return (
              <li key={id}>
                <div
                  onClick={() =>
                    ref.current.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`navItems${
                    id === activeLinkId
                      ? "transition-opacity duration-500  text-white"
                      : "text-gray-500"
                  } text-4xl `}
                >
                  {label}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default LeftNavlinks;
