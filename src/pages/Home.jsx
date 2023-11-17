import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Experience from "../components/Experience";
import Products from "../components/Products";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import seseme from "../assets/sesme.png";

const Home = () => {
  const item = {
    title: "Bridging The Gap Between Gender Equity In Agriculture",
    description:
      "Deal with hyperpigmentation, Mpanies skin lightening products are formulated to evenout skin tone and restore skin's natiral color get even, clear and radiant skin",
    image: seseme,
    ih: "50%",
    iw: "40%",
    bg: "bg-white",
  };
  return (
    <div className="flex flex-col box-border">
      <Navbar />
      <Carousel height={"100vh"} item={item} />
      <Experience />
      <Products />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
