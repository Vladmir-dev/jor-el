import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Experience from "../components/Experience";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="flex flex-col box-border">
      <Navbar />
      <Carousel />
      <Experience />
      <Products />
    </div>
  );
};

export default Home;
