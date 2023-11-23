import React, { useState, useEffect } from "react";
// import { CarouselData } from "./CarouselData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import seseme from "../assets/sesme.png";

const Carousel = ({ height, item }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [puased, setPaused] = useState(false);

  const nextSlide = () => {
    let newSlide = currentSlide === item.length - 1 ? 0 : currentSlide + 1;

    setCurrentSlide(newSlide);
  };

  const prevSlide = () => {
    let newSlide = currentSlide === 0 ? item.length - 1 : currentSlide - 1;

    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    setInterval(() => {
      if (puased === false) {
        let newSlide =
          currentSlide === CarouselData.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
      }
    }, 10000);
  });
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-screen">
      <div className="w-full justify-center">
        {item.map((slide, index) => {
          return (
            <>
              <img
                src={slide.image}
                alt=""
                key={index}
                className={
                  index === currentSlide
                    ? "block min-w-full md:h-[950px] h-[850px] object-cover items-start"
                    : "hidden"
                }
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              />
              <div className="flex justify-center items-center flex-wrap gap-10  ">
                <h1
                  className={
                    index === currentSlide
                      ? "absolute w-[50%] bottom-[200px] font-semibold w-screen text-white text-center flex-wrap justify-center md:text-[60px] text-[30px]"
                      : "hidden"
                  }
                >
                  {slide.title}
                </h1>
                {/* <p
                  className={
                    index === currentSlide
                      ? "absolute bottom-[70px] text-center font-bold   md:text-[20px] text-[15px] w-[50%] "
                      : "hidden"
                  }
                >
                  {slide.sub}
                </p> */}
                {/* <button className="absolute bottom-[110px] bg-black text-white p-[10px] w-[110px] text-[15px] font-roboto uppercase">
                  shop now
                </button> */}
              </div>
            </>
          );
        })}
        <div className="">
          <AiOutlineLeft
            onClick={() => prevSlide()}
            className="absolute left-0 text-[20px] inset-y-1/2 text-black cursor-pointer rounded-lg font-light bg-white bg-opacity-50 ml-[15px] w-[35px] h-[35px] p-[5px]"
          />
          <AiOutlineRight
            onClick={() => nextSlide()}
            className="absolute right-0 text-[20px] inset-y-1/2 text-black cursor-pointer rounded-lg font-light bg-white bg-opacity-50 mr-[15px] w-[35px] h-[35px] p-[5px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
