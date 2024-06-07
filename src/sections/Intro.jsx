

const Intro = () => {
  return (
    <>
      <div className=" container-wrapper  px-4 relative  ">
        <img
          src="images/about.png"
          alt=""
          className="  h-[300px] left-4 floating mx-auto "
        />

        <div className="  px-4  py-6  text-center border-[#000000] relative z-10 rounded-2xl  ">
          <h1 className="text-4xl font-bold font-kid text-center my-3">
            Hop on the SPEPE Express! To the Moon on Solana, with Laughs &
            Gains!
          </h1>

          <div className=" justify-between items-center flex  my-4 flex-col sm:flex-row gap-4">
            <div>
              <img src="images/aboutus.jpeg" alt="" className=" h-auto sm:h-[350px] rounded-xl" />
            </div>

            <div>
              <h1 className=" font-kid text-3xl my-2">About SPEPE</h1>

              <p className=" text-start text-xl sm:text-2xl">
                Hey there! We're SPEPE, where Pepe the frog meets <br /> sheep
                and dreams turn into memes. Riding high on Solana's speedy <br />
                waves, we're here to mix up the crypto world with giggles, <br />
                wiggles, and a sprinkle of moon dust. Think of us as your ticket <br />
                to the meme dream team, zooming past the stars with wallets full <br />
                and hearts light. SPEPE's not just a ride; it's a vibe. Come, <br />
                let's baa and lol our way to the lambo land!
              </p>
            </div>
          </div>

          <div className=" flex flex-col sm:flex-row justify-center gap-8 mt-8 ">
        <div className="bg-[#7bd259ae] rounded-3xl border-2 p-2">
          <img src="images/burn.jpeg" alt="" className="h-auto sm:h-[300px] rounded-2xl mx-auto" />

          <span className="text-[50px] sm:text-[50px] font-kid font-bold">
              LP BURNT
            </span>
          </div>{" "}
          <div className="bg-[#7bd259ae] rounded-3xl border-2 p-2">
          <img src="images/tax.jpeg" alt="" className="h-auto sm:h-[300px] rounded-2xl mx-auto" />

          <span className="text-[50px] sm:text-[50px] font-kid font-bold">
            0% TAX
            </span>
          </div>
          <div className="bg-[#7bd259ae] rounded-3xl border-2 p-2">
          <img src="images/anno.jpeg" alt="" className="h-auto sm:h-[300px] rounded-2xl mx-auto" />

          <span className="text-[50px] sm:text-[50px] font-kid font-bold">
          Mint Revoked
            </span>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
