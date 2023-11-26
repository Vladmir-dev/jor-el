import React, { useState, useEffect } from "react";
// import { CarouselData } from "./CarouselData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import seseme from "../assets/sesme.png";

const Carousel = ({ height, item }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    let newSlide = currentSlide === item.length - 1 ? 0 : currentSlide + 1;

    setCurrentSlide(newSlide);
  };

  const prevSlide = () => {
    let newSlide = currentSlide === 0 ? item.length - 1 : currentSlide - 1;

    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        let newSlide = currentSlide === item.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, item, paused]);

  // const settings = {
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <div className="w-screen">
      <div className="relative  w-full justify-center  h-[850px] md:h-[950px] overflow-hidden">
        <AnimatePresence node="wait">
          {item.map((slide, index) => (
            <motion.div
              key={index}
              className="absolute top-0 left-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              />
              <motion.h1
                className="absolute top-[40%] font-semibold w-screen text-white text-center text-[60px]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {slide.title}
              </motion.h1>
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="absolute bottom-0 left-0 w-full flex justify-between top-[40%]">
          <AiOutlineLeft
            onClick={prevSlide}
            className="text-[20px] text-black cursor-pointer rounded-lg font-light bg-white bg-opacity-50 ml-[15px] w-[35px] h-[35px] p-[5px] transition-opacity duration-500"
          />
          <AiOutlineRight
            onClick={nextSlide}
            className="text-[20px] text-black cursor-pointer rounded-lg font-light bg-white bg-opacity-50 mr-[15px] w-[35px] h-[35px] p-[5px] transition-opacity duration-500"
          />
        </div>
      </div>
    </div>
    // <div className="w-screen">
    //   <div className="w-full justify-center">
    //     {item.map((slide, index) => {
    //       return (
    //         <>
    //           <img
    //             src={slide.image}
    //             alt=""
    //             key={index}
    //             className={
    //               index === currentSlide
    //                 ? "block min-w-full md:h-[950px] h-[850px] object-cover items-start transition-opacity duration-700"
    //                 : "hidden"
    //             }
    //             onMouseEnter={() => setPaused(true)}
    //             onMouseLeave={() => setPaused(false)}
    //           />
    //           <div className="flex justify-center items-center flex-wrap gap-10  ">
    //             <h1
    //               className={
    //                 index === currentSlide
    //                   ? "absolute w-[50%] bottom-[200px] font-semibold w-screen text-white text-center flex-wrap justify-center md:text-[60px] text-[30px] transition-opacity duration-500"
    //                   : "hidden"
    //               }
    //             >
    //               {slide.title}
    //             </h1>

    //           </div>
    //         </>
    //       );
    //     })}
    //     <div className="">
    //       <AiOutlineLeft
    //         onClick={() => prevSlide()}
    //         className="absolute left-0 text-[20px] inset-y-1/2 text-black cursor-pointer rounded-lg font-light bg-white bg-opacity-50 ml-[15px] w-[35px] h-[35px] p-[5px]"
    //       />
    //       <AiOutlineRight
    //         onClick={() => nextSlide()}
    //         className="absolute right-0 text-[20px] inset-y-1/2 text-black cursor-pointer rounded-lg font-light bg-white bg-opacity-50 mr-[15px] w-[35px] h-[35px] p-[5px]"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Carousel;
