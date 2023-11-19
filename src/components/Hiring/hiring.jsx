import React from "react";
import Arrow from "../../assets/images/white_arrow.png";
import img1 from "../../assets/images/Chair.jpg";
import img2 from "../../assets/images/hiring.png";
import img3 from "../../assets/images/Footer_1.jpg";

function Hiring() {
  return (
    <div>
      <div className=" text-center md:block hidden p-16 shadow-2xl">
        <h1 className="md:text-5xl text-3xl text-gray-500 font-bold font-sans">
          Ready to accelerate your business ?{" "}
          <span className="text-purple-500 ">Lets Talk.</span>
        </h1>
      </div>
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500">
        <div className="main-container text-white grid md:grid-cols-2 grid-cols-1 place-items-center py-20 ">
          <div className="font-sans font-bold text-center md:text-5xl text-3xl mt-5 leading-tight pr-16 ">
            Keep track <br /> of the wolves <br />
            <img className="w-20" src={Arrow} alt="arrow" />
          </div>
          <div className="grid grid-cols-3 gap-2 order-first md:order-last">
            <img className="md:w-60 md:h-60 h-full" src={img1} alt="First" />
            <img className="md:w-60 md:h-60 h-full" src={img2} alt="Second" />
            <img className="md:w-60 md:h-60 h-full" src={img3} alt="Third" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hiring;
