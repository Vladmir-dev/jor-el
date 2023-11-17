import React from "react";
import riceh from "../assets/large-rice-harvester.webp";

const Banner = () => {
  const bstyles = {
    backgroundImage: ` url(${riceh})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="mt-[20px]">
      <div
        style={bstyles}
        className="m-20 h-[80vh] rounded-tr-[100px] rounded-bl-[100px] flex justify-end items-end"
      >
        <div className="flex p-4 justify-between items-start m-10">
          <h1 className="text-[50px] font-bold text-white">
            Striving for a <br/> <h1 className="text-yellow-500"> Food-Secure Future</h1>
          </h1>
          <div className="w-[40%] text-white">
            <p className="text-[20px]">
              As a purpose-driven business, we’re contributing positively to
              improving the prosperity and well-being of people across our
              supply chains, protecting and regenerating our natural resources,
              and tackling climate change.
            </p>
            <button className="bg-white mt-[50px] text-[25px] hover:rounded-tl-[100px] duration-500 text-black px-4 py-2">Discover More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
