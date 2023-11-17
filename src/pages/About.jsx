import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import about from "../assets/about-us-2.png";

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
  return (
    <div>
      <Navbar />
      <Carousel height={"80vh"} item={item} />
      <div className="md:m-20 p-2 flex md:flex-row flex-col justify-between">
        <h2 className="md:text-[50px] text-[35px] md:text-left text-center">
          {" "}
          <h2 className="text-green-300"> We’re a trusted partner</h2> across
          the supply chain.{" "}
        </h2>
        <p className="md:w-[40%] text-[20px]">
          We unlock value for customers, enable farming communities to prosper
          sustainably and strive for a food-secure future. We’re a market
          leading and differentiated agri-business, focused on high-growth
          markets with a global origination footprint, processing capabilities
          and deep understanding of market needs built over 33 years.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
