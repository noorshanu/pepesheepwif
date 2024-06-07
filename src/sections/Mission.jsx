import React from "react";

function Mission() {
  return (
    <section className=" container-wrapper">
      <div className=" flex justify-between items-center flex-col-reverse sm:flex-row gap-4">
        <div className="w-full">
          <img src="images/prod.jpeg" alt="" className=" rounded-xl  h-auto sm:h-[300px] " />
        </div>

        <div className=" bg-[#61cf8e] border-2   py-8 px-4 rounded-2xl shadow-xl max-w-2xl ">
          <h1 className=" font-kid font-bold text-3xl sm:text-5xl my-3">$SPEPE Products</h1>

          <p className=" text-lg sm:text-xl  "> 
           <strong>SPEPE Trading Bot: </strong> Your crypto trades snoozin'? Our bot's a wiz-kid sheep in wolf's clothing, making moves and munching numbers. It's smart, fast, and ready to blast your trading game into the stratosphere!
          </p>

          <p className=" text-lg sm:text-xl my-2 "> 
           <strong>Lambo Memes: </strong>Memes so funny, you'll laugh all the way to the bank! SPEPE's Lambo Memes are your daily dose of LOLs, keeping the spirit high and the dream of riding a lambo, with a sheep, alive.</p>



           <p className=" text-lg sm:text-xl my-2 "> 
           <strong>SPEPE NFTs: </strong>Collectibles? Boring! Enter SPEPE NFTs: your golden fleece in the crypto cosmos. It's your all-access pass to the coolest flock in town, with benefits that'll make even the moon jealous.</p>

        </div>
      </div>
    </section>
  );
}

export default Mission;
