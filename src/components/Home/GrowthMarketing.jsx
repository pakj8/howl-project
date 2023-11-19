import React from "react";

function GrowthMarketing({ linkRef, componentsColor }) {
  return (
    <div
      id="growthsMarketing"
      ref={linkRef}
      className={`${componentsColor} transition-colors duration-500 ease-in-out h-screen grid place-items-center px-28`}
    >
      GrowthMarketing
    </div>
  );
}

export default GrowthMarketing;
