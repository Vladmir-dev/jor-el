import React from "react";
import metric from "../assets/metric.webp";
import cardo from "../assets/card-overlay.webp";
import sky from "../assets/sky.jpg";

const Experience = () => {
  const bgstyle = {
    backgroundImage: `url(${sky})`,
  };
  return (
    <div className="flex  mt-[50px] bg-black flex-col w-full">
      <div className="h-[100vh] flex justify-around  p-10  flex-wrap">
        <div className="text-white gap-10 flex flex-wrap w-[30%] text-left">
          <h1 className="text-white text-[65px] font-bold">
            We Offer Our{" "}
            <h1 className="text-green-300">
              {" "}
              Customers a Deeper Understanding{" "}
            </h1>{" "}
            Of Market needs
          </h1>

          <div className="flex flex-col gap-8">
            <p>
              We have over 33 years of experience in supply chains across the
              world with foundations built from our on-the-ground presence in
              Asia and Africa.
            </p>
            <p>
              Our operating capabilities in global origination, processing,
              trading, logistics, distribution, and risk management set us apart
              from our peers. While our strategic manufacturing assets in key
              destination markets strengthen our service to customers.
            </p>
          </div>
          
        </div>
        <div className="text-white grid grid-cols-2 gap-10">
          <div className="flex flex-col items-center flex-wrap justify-center">
            <img src={metric} className="w-[150px]" />
            <div className="text-center">
              <h3 className="text-[55px] font-bold">60</h3>
              <h3>Manufacturing & Processing Facilities</h3>
            </div>
          </div>
          <div className="flex flex-col items-center flex-wrap justify-center">
            <img src={metric} className="w-[150px]" />
            <div className="text-center">
              <h3 className="text-[55px] font-bold">60</h3>
              <h3>Manufacturing & Processing Facilities</h3>
            </div>
          </div>
          <div className="flex flex-col items-center flex-wrap justify-center">
            <img src={metric} className="w-[150px]" />
            <div className="text-center">
              <h3 className="text-[55px] font-bold">60</h3>
              <h3>Manufacturing & Processing Facilities</h3>
            </div>
          </div>
          <div className="flex flex-col items-center flex-wrap justify-center">
            <img src={metric} className="w-[150px]" />
            <div className="text-center">
              <h3 className="text-[55px] font-bold">60</h3>
              <h3>Manufacturing & Processing Facilities</h3>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-[20px] text-white p-10">
        <div className="flex justify-around">
          <div className="bg-white w-[800px] h-[600px] rounded-tr-[100px] rounded-bl-[100px] flex justify-end">
            <img src={cardo} className="w-[1000px]" />
          </div>
          <div className="w-[35%]">
            <h1 className="text-[60px]">
              Firm Foundations for{" "}
              <h1 className="text-green-300"> Sustainable Growth </h1>
            </h1>
            <div className="flex flex-col gap-5 text-[18px]">
              <p>
                We offer our farmers, our customers and every member of our
                global supply chains, a robust, and forward-looking approach to
                worldwide food, feed and fibre distribution.
              </p>
              <p>
                Our global practices are firmly rooted in experience and
                understanding second to none.{" "}
              </p>
            </div>
            <button className="bg-white text-black py-2 px-4 mt-[10px] hover:rounded-tl-[100px] duration-500">Discover More </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
