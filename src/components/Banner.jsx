import React from "react";
import riceh from "../assets/tract.jpg";

const Banner = () => {
  const bstyles = {
    backgroundImage: ` url(${riceh})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="mt-[20px] p-2">
      <div
        style={bstyles}
        className="md:m-20 h-[80vh]  rounded-tr-[100px] rounded-bl-[100px] flex justify-end items-end"
      >
        <div className="flex md:flex-row flex-col p-4 justify-between items-start md:m-10">
          <h1 className="md:text-[50px] text-[35px] md:text-left text-center font-bold text-white">
            Striving for a <br />{" "}
            <h1 className="text-green-500"> Food-Secure Future</h1>
          </h1>
          <div className="md:w-[40%] text-white flex flex-col justify-center md:justify-start items-center md:items-start">
            <p className="text-[20px] md:text-left text-center">
              As a purpose-driven business, we’re contributing positively to
              improving the prosperity and well-being of people across our
              supply chains, protecting and regenerating our natural resources,
              and tackling climate change.
            </p>
            <button className="bg-white mt-[50px] text-[25px] hover:rounded-tl-[100px] duration-500 text-black px-4 py-2">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
