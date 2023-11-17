import React, { useState } from "react";
import grains from "../assets/grains-hover.webp";
import grains2 from "../assets/sgrains-hover.webp";
import grain_side from "../assets/grains-side.webp";
import specialty_grains from "../assets/specialty-grains.webp";

const Products = () => {
  const products = [
    {
      name: "Grains & Oil Seeds",
      icon: grains,
      image: grain_side,
    },
    {
      name: "Speciality Grains & Seeds",
      icon: grains2,
      image: specialty_grains,
    },
  ];
  const [url, setUrl] = useState(products[0].image);

  return (
    <div className="m-10">
      <div className="flex justify-around items-start">
        <div className="md:max-w-[35%] ">
          <h1 className="text-[60px]">Our Products & Services</h1>
          <p className="text-[20px]">
            Whether it's working with rice farmers in Asia, sourcing cotton in
            Australia, or producing value-added products in Africa, we help our
            customers around the world meet the increasing demand for food, feed
            and fibre
          </p>
          <div className="w-[500px] h-[300px]">
            <img src={url} alt="" className="mt-[50px] w-full h-full" />
          </div>
          
        </div>

        <div className="grid grid-cols-2 gap-10">
          {products.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setUrl(item.image)}
              className="flex jsutify-center items-center gap-5"
            >
              <img src={item.icon} className="w-[100px]" />
              <h1>{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
