import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../assets/prod1.jpg";
import image2 from "../assets/prod2.jpg";
import image3 from "../assets/prod3.jpg";
import image4 from "../assets/prod4.jpg";

const Slider = () => {
  const items = [
    {
      url: image1,
    },
    {
      url: image2,
    },
    {
      url: image3,
    },
    {
      url: image4,
    },
  ];
  return (
    <Carousel showThumbs={false} dynamicHeight={true} width={"100%"}>
      {items.map((item, index) => (
        <div key={index} className="max-w-[800px] rounded-tr-[100px] max-h-[380px]">
          <img
            src={item.url}
            className="w-full h-full object-cover"
            alt="..."
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
