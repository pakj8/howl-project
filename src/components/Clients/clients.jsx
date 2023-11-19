import React from "react";
import img1 from "../../assets/images/Actor_1.jpg";
import img2 from "../../assets/images/Actor_2.jpg";
import img3 from "../../assets/images/Actor_3.jpg";
import img4 from "../../assets/images/Footer_1 (2).jpg";

function Clients() {
  return (
    <div className="main-container">
      <div className="text-center">
        <h1 className="text-purple-500 font-bold md:text-4xl text-3xl mb-3">
          Clients we work with
        </h1>
        <div className="md:grid hidden grid-cols-8 gap-2">
          {[
            img1,
            img2,
            img3,
            img4,
            img1,
            img2,
            img3,
            img1,
            img2,
            img1,
            img2,
            img4,
            img3,
            img4,
            img1,
            img2,
          ].map((img, index) => (
            <img key={index} className="w-40 h-50 m-2" src={img} alt="" />
          ))}
        </div>
        <div className="flex md:hidden gap-2 overflow-x-auto">
          {[
            img1,
            img2,
            img3,
            img4,
            img1,
            img2,
            img3,
            img1,
            img2,
            img1,
            img2,
            img4,
            img3,
            img4,
            img1,
            img2,
          ].map((img, index) => (
            <img key={index} className="w-40 h-50 m-2" src={img} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
