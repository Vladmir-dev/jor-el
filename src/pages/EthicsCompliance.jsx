import React from "react";
import Navbar from "../components/Navbar";
import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";
import slide4 from "../assets/slide4.webp";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import bribery from "../assets/anti-bribery-pic.jpg";
import human_rights from '../assets/human-rights.jpg'

const EthicsCompliance = () => {
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
    <div>
      <Navbar />
      <Carousel item={CarouselData} />
      <div className="bg-black">
        <div className="p-12 bg-black text-white flex md:flex-row flex-col justify-between items-center">
          <h2 className="md:text-[50px] md:w-[45%] text-[35px] md:text-left flex-wrap text-center">
            Upholding
            <h2 className="text-green-300"> high standards</h2> of behaviour is
            key to our values and culture.
          </h2>
          <div className="md:w-[40%] text-[20px] md:text-start text-center">
            <p>
              These standards are central to earning and maintaining the trust
              of our customers, suppliers, employees, investors, communities and
              other stakeholders and are detailed in our policies and positions.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col relative md:justify-around">
          <div className="max-w-[800px] p-4 text-white max-h-[500px]">
            <img
              src={bribery}
              alt="ant-bribery"
              className="w-full h-full rounded-tr-[50px] rounded-bl-[50px]"
            />
          </div>

          <div className="md:w-[35%] md:mt-0 text-white py-[30px] mt-[30px] flex flex-col md:justify-start md:items-start justify-center items-center">
            <h1 className="md:text-[60px] text-[35px] md:text-left text-center">
              Anti-bribery & Corruption
            </h1>
            <div className="flex flex-col text-white gap-5 md:text-left text-center  text-[18px]">
              <p>
                The Anti-bribery and Corruption Policy reflects our commitment
                to uphold all applicable laws globally and the requirement that
                all our employees act professionally, fairly and with integrity
                in all their business dealings and relationships wherever they
                operate.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row md:m-[50px] flex-col relative md:justify-around">
        <div className="md:w-[35%] md:mt-0 py-[30px] mt-[30px] flex flex-col md:justify-start md:items-start justify-center items-center">
          <h1 className="md:text-[60px] text-[35px] md:text-left text-center">
            Human Rights & Labour
          </h1>
          <div className="flex flex-col  gap-5 md:text-left text-center  text-[18px]">
            <p>
              As a global leader in food feed and fibre, we acknowledge our role
              and responsibility to ensure respect for human rights in our
              operations and in our value chains across the world.
            </p>
          </div>
        </div>
        <div className="max-w-[800px] p-4 text-white max-h-[500px]">
          <img
            src={human_rights}
            alt="ant-bribery"
            className="w-full h-full rounded-tr-[50px] rounded-bl-[50px]"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EthicsCompliance;
