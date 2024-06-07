
import Hero from "./sections/Hero";
import  { useState, useRef } from "react";
import Intro from "./sections/Intro";


import Footer from './sections/Footer'

import Music from "./nubshiba.mp3";
import Mission from "./sections/Mission";

const Popup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center flex-col z-50  bg-white bg-hero">
      <img src="images/lambo.jpeg" alt=""  className="h-[400px]"/>
      <div className="rounded-lg p-8">
        <button
          className="bg-[#7cd259] rounded-full px-6 py-2 text--2xl sm:text-5xl font-short  font-bold border-2 hover:scale-125"
          onClick={onClose}
        >
         Enter SHEEP PEPE World
        </button>
      </div>
    </div>
  );
};

function AppLayout() {
  const [showPopup, setShowPopup] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleClosePopup = () => {
    setShowPopup(false);
    // Start playing music here
    const audio = audioRef.current;
    audio.play();
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      {showPopup && <Popup onClose={handleClosePopup} />}
      <main className=" bg-main h-100%  sm:h-[100vh] ">
        {/* <Navbar /> */}

        <Hero />
        <div className=" flex justify-center my-4 ">
          <button
            className="bg-[#7cd259] text-black font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline  hover:scale-125"
            onClick={handlePlayPause}
          >
            {isPlaying ? "Pause " : "Play Music"}
          </button>
        
        </div>
       
        <audio ref={audioRef} src={Music}></audio>

      
      </main>

      {/* <MemeMark /> */}

      <div className="bg-[#29c8fe]">
        <dl className="h-[50px]" />
        <Intro />
        <dl className="h-[50px]" />

        <Mission/>

        <Footer/>
        </div>
        {/* <div>
          <Photo/>
        </div> */}
       
        <div>
         
        </div>
        {/* <div>
          <Partner />
        </div> */}
      {/* </div> */}

    </>
  );
}

export default AppLayout;
