import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import seseme from "../assets/sesme.png";

const Carousel = ({ height, item }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div
        className={`flex justify-center items-center ${item.bg} w-[100vw] h-[${height}]`}
      >
        <div className="w-full h-full flex justify-center items-center px-4">
          <div className="md:w-[40%] flex flex-col md:justify-start justify-center items-center md:items-start md:gap-8 gap-10">
            <h3 className="uppercase md:text-[66px] font-thin text-[35px] md:text-start text-center">
              {item.title}
            </h3>
            <p className="md:text-start text-center text-[16px]">
              {item.description}
            </p>
            <button
              //   onClick={() => navigate("/category/Skin Care")}
              className="bg-black text-white px-[20px] py-[15px] hover:bg-green-600 hover:rounded-tl-[100px] duration-500 mt-[20px] w-[150px]"
            >
              View More
            </button>
          </div>
          <div
            className={`h-[${item.ih}] w-[${item.iw}] hidden md:block top-0`}
          >
            <img src={item.image} className="h-full" />
          </div>
        </div>
      </div>
      {/* <div>
        <img src="https://placekitten.com/800/401" alt="Slide 2" />
      </div>
      <div>
        <img src="https://placekitten.com/800/402" alt="Slide 3" />
      </div> */}
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Carousel;
