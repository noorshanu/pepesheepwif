import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";

function Hero() {
  return (
    <section className=" pt-0  pb-[1rem] relative overflow-x">
      <img src="images/lambo.png" alt="" className=" absolute left-0 right-0 floating overflow-hidden h-[800px]  " />
      <div className="container-wrapper flex justify-end flex-col items-center pt-[7rem] sm:pt-[6rem] ">
        <div></div>
        <div className=" max-w-full sm:max-w-3xl ml-unset sm:ml-auto flex flex-col items-center  bg-[#7bd259ae] rounded-3xl border-2 z-40 ">
          <img src="images/logo.png" alt="" className=" h-[250px]" />

          <div>
            <h1 className=" font-kid text-center text-3xl ">WELCOME TO THE <br /> Sheep Pepe !</h1>

            <div className=" flex justify-center gap-5 items-center mt-[2rem]">
              <a
                href="https://twitter.com/_"
                className=" text-2xl text-black bg-[#7cd259] hover:scale-125 hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
              >
                <BsTwitterX />
              </a>

              <a
                href="https://t.me/"
                target="_blank"
                className=" text-2xl text-black hover:scale-125 bg-[#7cd259] hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
              >
                <FaTelegram />
              </a>

              <a
                href="https://www.dextools.io/"
                target="_blank"
                className=" bg-[#7cd259] rounded-full text-xl font-semibold p-1 border-2 hover:scale-125 "
              >
                <img
                  src="images/dext.png"
                  alt=""
                  className=" h-[35px] w-auto"
                />
              </a>
            </div>

            <a
              href="https://solscan.io/token/"
              className=" my-2 text-[#000000] bg-[#fff] rounded-full font-bold py-2 px-2 sm:px-16  sm:text-base text-[9px] font-short   flex justify-center w-[360px] sm:w-[500px] mx-6"
            >
              7Gskgxewdxvoyzk5fghfghgjghjtydhtyfgh
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
