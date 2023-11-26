import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";
import slide4 from "../assets/slide4.webp";
import sunny from '../assets/sunny-thumbnail.jpg'
import Footer from "../components/Footer";

const OurLeaderShip = () => {
  const CarouselData = [
    {
      image: slide1,
      title: "Reducing Crop Loss To Improve Food Security",
      sub: "We opened our doors in 2022 with a simple mission: to make the wholesale purchasing process easy and affordable. Since then, we have grown exponentially, cultivating partnerships with manufacturers and expanding our inventory. This growth has greatly benefited our customers, as they receive the highest quality products at the best prices around.",
    },
    {
      image: slide2,
      title: "Reducing Crop Loss To Improve Food Security",
      sub: "We opened our doors in 2022 with a simple mission: to make the wholesale purchasing process easy and affordable. Since then, we have grown exponentially, cultivating partnerships with manufacturers and expanding our inventory. This growth has greatly benefited our customers, as they receive the highest quality products at the best prices around.",
    },
    {
      image: slide3,
      title: "Reducing Crop Loss To Improve Food Security",
      sub: "We opened our doors in 2022 with a simple mission: to make the wholesale purchasing process easy and affordable. Since then, we have grown exponentially, cultivating partnerships with manufacturers and expanding our inventory. This growth has greatly benefited our customers, as they receive the highest quality products at the best prices around.",
    },
    {
      image: slide4,
      title: "Reducing Crop Loss To Improve Food Security",
      sub: "We opened our doors in 2022 with a simple mission: to make the wholesale purchasing process easy and affordable. Since then, we have grown exponentially, cultivating partnerships with manufacturers and expanding our inventory. This growth has greatly benefited our customers, as they receive the highest quality products at the best prices around.",
    },
  ];

  const members = [
    {
      url: sunny,
      name: "Sunny Verghese",
      title: "Co-Founder & Group CEO",
    },
    {
      url: sunny,
      name: "Sunny Verghese",
      title: "Co-Founder & Group CEO",
    },
    {
      url: sunny,
      name: "Sunny Verghese",
      title: "Co-Founder & Group CEO",
    },
    {
      url: sunny,
      name: "Sunny Verghese",
      title: "Co-Founder & Group CEO",
    },
    {
      url: sunny,
      name: "Sunny Verghese",
      title: "Co-Founder & Group CEO",
    },
    {
      url: sunny,
      name: "Sunny Verghese",
      title: "Co-Founder & Group CEO",
    },
    {
      url: sunny,
      name: "Sunny Verghese",
      title: "Co-Founder & Group CEO",
    },
  ];

  return (
    <div>
      <Navbar />
      <Carousel height={"80vh"} item={CarouselData} />
      <div className="p-12 bg-black text-white flex md:flex-row flex-col justify-between">
        <h2 className="md:text-[50px] text-[35px] md:text-left text-center">
          {" "}
          <h2 className="text-green-300"> Capitalising</h2> on key market
          opportunities..{" "}
        </h2>
        <div className="md:w-[40%] text-[20px] md:text-start text-center">
          <p>
            Our senior leaders capitalise on these market opportunities to drive
            profitable growth and to maximise long-term value.{" "}
          </p>
          <p>
            Each individual brings a deep understanding of our company alongside
            diverse and relevant experience.{" "}
          </p>
        </div>
      </div>
      <div className="p-12 flex gap-5 flex-wrap justify-center items-center">
        {
          members.map((item, index) => (
            <div key={index}>
              <div>
                <img src={item.url} alt={item.name} className="w-[250px] rounded-tr-[50px] rounded-bl-[50px]"/>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-[25px]">{item.name}</h1>
                <h1>{item.title}</h1>
              </div>
            </div>
          ))
        }
      </div>
      <Footer />
    </div>
  );
};

export default OurLeaderShip;
