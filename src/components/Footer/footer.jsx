import React from "react";
import Instagram from "../../assets/images/icons8-instagram-50.png";
import Arrow from "../../assets/images/icons8-arrow-64.png";

function Footer() {
  return (
    <footer className="bg-black text-white py-4 md:py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-2 md:py-6">
        <div className="md:space-x-24 flex items-center justify-between">
          <div className="flex space-x-3">
            <a
              href="https://www.instagram.com/howlhq/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" className="h-9 w-9 " />
            </a>
          </div>
          <div className="flex space-x-6 md:space-x-12">
            <p className="uppercase">PRESS</p>
            <p className="uppercase">CAREERS</p>
            <p className="uppercase">JOIN THE PACK</p>
          </div>
          <div className="button border-2 border-y-purple-600 p-2">
            <p className="text-sm flex items-center justify-between ">
              Sign up for our Newsletter{" "}
              <img src={Arrow} alt="arrow" className="ml-2 md:ml-5" />
            </p>
          </div>
          <div className="text-sm mt-2 md:mt-0">
            All rights reserved. Designed, developed, & powered by HOWL Digital
            Agency
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
