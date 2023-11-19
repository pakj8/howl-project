import React from "react";

function CommerceSolution({ linkRef, componentsColor }) {
  return (
    <div
      id="commerceSolution"
      ref={linkRef}
      className={`${componentsColor} transition-colors duration-500 ease-in-out h-screen grid place-items-center px-28`}
    >
      CommerceSolution
    </div>
  );
}

export default CommerceSolution;
