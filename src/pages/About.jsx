import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import about from "../assets/about-us-2.png";
import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";
import slide4 from "../assets/slide4.webp";

const About = () => {
  const item = {
    title: "Bridging The Gap Between Gender Equity In Agriculture",
    description:
      "Deal with hyperpigmentation, Mpanies skin lightening products are formulated to evenout skin tone and restore skin's natiral color get even, clear and radiant skin",
    image: about,
    ih: "90%",
    iw: "50%",
    bg: "bg-green-300",
  };

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
  return (
    <div className="font-gilroy">
      <Navbar />
      <Carousel height={"80vh"} item={CarouselData} />
      <div className="md:m-20 p-2 flex md:flex-row flex-col justify-between">
        <h2 className="md:text-[50px] text-[35px] md:text-left text-center">
          {" "}
          <h2 className="text-green-300"> We’re a trusted partner</h2> across
          the supply chain.{" "}
        </h2>
        <p className="md:w-[40%] text-[20px]">
          We opened our doors in 2022 with a simple mission: to make the
          wholesale purchasing process easy and affordable. Since then, we have
          grown exponentially, cultivating partnerships with manufacturers and
          expanding our inventory. This growth has greatly benefited our
          customers, as they receive the highest quality products at the best
          prices around
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
