import React, { useState } from "react";
import grains from "../assets/grains-hover.webp";
import grains2 from "../assets/sgrains-hover.webp";
import grain_side from "../assets/grains-side.webp";
import specialty_grains from "../assets/specialty-grains.webp";
import cotton from "../assets/cotton-side.webp";
import cotto_icon from "../assets/cotton.webp";

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
    {
      name: "Cotton",
      icon: cotto_icon,
      image: cotton,
    },
  ];
  const [url, setUrl] = useState(products[0].image);

  return (
    <div className="m-10">
      <div className="flex md:flex-row flex-col md:justify-around items-start">
        <div className="md:max-w-[35%] ">
          <h1 className="md:text-[60px] text-[35px] md:text-left text-center">
            Our Products & Services
          </h1>
          <p className="text-[20px]">
            Whether it's working with rice farmers in Asia, sourcing cotton in
            Australia, or producing value-added products in Africa, we help our
            customers around the world meet the increasing demand for food, feed
            and fibre
          </p>
          <div className="w-[500px] hidden md:block h-[300px]">
            <img src={url} alt="" className="mt-[50px] w-full h-full" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:mt-0 mt-[50px]">
          {products.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setUrl(item.image)}
              className="flex jsutify-center items-center gap-5"
            >
              <img src={item.icon} className="md:w-[100px] w-[60px]" />
              <h1>{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
