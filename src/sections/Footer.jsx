import React from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-full pb-8 relative z-10 bg-[#7bd259ae] mt-8 ">
      <img src="images/foot.png" alt=""  className=" mx-auto" />
      <div className="container-wrapper mt-8 ">
        <p className="   mx-auto mb-2 lg:mb-3 text-xl sm:text-2xl text-center  ">
       <strong>So, You In? </strong> Join SPEPE for a meme-tastic ride where laughs mint cash and dreams are just a sheep away. Let's baa our way beyond the stars!" 
        </p>
        <div className="">
          <h2 className=" text-6xl font-kid text-center font-bold">
       SheepPePe
          </h2>
          <div className=" flex items-center justify-center gap-2">
            <p className="mt-3 text-xs text-black lg:text-sm font-nubFont">
            Copyright © 2024 SHEEP PEPE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
