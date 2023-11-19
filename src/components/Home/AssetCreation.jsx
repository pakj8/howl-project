import React from "react";

function AssetCreation({ linkRef, componentsColor }) {
  return (
    <div
      id="assetCreation"
      ref={linkRef}
      className={`${componentsColor} transition-colors duration-500 ease-in-out h-screen grid place-items-center px-28`}
    >
      AssetCreation
    </div>
  );
}

export default AssetCreation;
