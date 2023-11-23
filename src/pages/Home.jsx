import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Experience from "../components/Experience";
import Products from "../components/Products";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import seseme from "../assets/seeds.png";
import slide1 from "../assets/slide1.webp"
import slide2 from "../assets/slide2.webp"
import slide3 from "../assets/slide3.webp"
import slide4 from "../assets/slide4.webp"

const Home = () => {
  const item = {
    title: "Reducing Crop Loss To Improve Food Security",
    description:
      "We opened our doors in 2022 with a simple mission: to make the wholesale purchasing process easy and affordable. Since then, we have grown exponentially, cultivating partnerships with manufacturers and expanding our inventory. This growth has greatly benefited our customers, as they receive the highest quality products at the best prices around.",
    image: seseme,
    ih: "60%",
    iw: "50%",
    bg: "bg-white",
  };

  const CarouselData = [
    {
      image:
       slide1,
      title: "Reducing Crop Loss To Improve Food Security",
      sub: "We opened our doors in 2022 with a simple mission: to make the wholesale purchasing process easy and affordable. Since then, we have grown exponentially, cultivating partnerships with manufacturers and expanding our inventory. This growth has greatly benefited our customers, as they receive the highest quality products at the best prices around.",
    },
    {
      image:
      slide2,
      title: "Reducing Crop Loss To Improve Food Security",
      sub: "We opened our doors in 2022 with a simple mission: to make the wholesale purchasing process easy and affordable. Since then, we have grown exponentially, cultivating partnerships with manufacturers and expanding our inventory. This growth has greatly benefited our customers, as they receive the highest quality products at the best prices around.",
    },
    {
      image:
      slide3,
      title: "Reducing Crop Loss To Improve Food Security",
      sub: "We opened our doors in 2022 with a simple mission: to make the wholesale purchasing process easy and affordable. Since then, we have grown exponentially, cultivating partnerships with manufacturers and expanding our inventory. This growth has greatly benefited our customers, as they receive the highest quality products at the best prices around.",
    },
    {
      image:
      slide4,
      title: "Reducing Crop Loss To Improve Food Security",
      sub: "We opened our doors in 2022 with a simple mission: to make the wholesale purchasing process easy and affordable. Since then, we have grown exponentially, cultivating partnerships with manufacturers and expanding our inventory. This growth has greatly benefited our customers, as they receive the highest quality products at the best prices around.",
    },
  ];

  return (
    <div className="flex flex-col box-border font-gilroy">
      <Navbar />
      <Carousel height={"80vh"} item={CarouselData} />
      <Experience />
      <Products />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
