import React from "react";

function GrowthMarketing({ linkRef, componentsColor }) {
  return (
    <div
      id="growthsMarketing"
      ref={linkRef}
      className={`${componentsColor} transition-colors duration-500 ease-in-out h-screen grid place-items-center md:px-28`}
    >
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-base text-white">What is Lorem Ipsum?</h1>
        <p className="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}

export default GrowthMarketing;
