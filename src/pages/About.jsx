import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import about from "../assets/about-us-2.png";
import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";
import slide4 from "../assets/slide4.webp";
import Products from "../components/Products";
import grow_source from "../assets/grow-source.jpg";
import manufacture from "../assets/manufacture.jpg";
import transport from "../assets/transport-distribute.jpg";
import risk from "../assets/risk.jpg";

const About = () => {
  const [mobile, setMobile] = useState(null);
  const [drop, setDrop] = useState({
    name: "We Grow & Source",
    submenu: true,
    subitems: [
      {
        desc: "Through our own growing operations and partnerships with both large- and small-scale producers, our global sourcing capabilities enable us to reliably source and deliver high-quality products to customers around the world.  ",
        image: grow_source,
      },
    ],
  });

  const items = [
    {
      name: "We Grow & Source",
      submenu: true,
      subitems: [
        {
          desc: "Through our own growing operations and partnerships with both large- and small-scale producers, our global sourcing capabilities enable us to reliably source and deliver high-quality products to customers around the world.  ",
          image: grow_source,
        },
      ],
    },
    {
      name: "We Porcess & Manufacture",
      submenu: true,
      subitems: [
        {
          desc: "Our world-class processing operations have unparalleled operational efficiency. We transform raw materials such as grains, rice and cotton and produce value-added products including flour, pasta, semolina, fortified branded rice and animal feeds.  ",
          image: manufacture,
        },
      ],
    },
    {
      name: "We Transport & Distribute",
      submenu: true,
      subitems: [
        {
          desc: "Our expertise in supply chain management, logistics and distribution allows us to handle, store, transport and distribute food, feed and fibre, efficiently and cost-effectively. Using digitally-integrated capabilities, we provide market access to farmers and deliver supplies customers can rely on.",
          image: transport,
        },
      ],
    },
    {
      name: "We Trade & Manage Risk",
      submenu: true,
      subitems: [
        {
          desc: "Our unique position as an independent trader allows us to trade with both local players and global majors in origin and destination markets, giving us a strong cost advantage and offering us flexibility to respond to shifting trade flows. Our world-class trading team and best-in-class risk management, systems and processes allows us to manage risks for our customers in real-time.",
          image: risk,
        },
      ],
    },
  ];

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
      <div className="bg-black text-white md:p-20">
        <div className="p-2 flex md:flex-row flex-col justify-between">
          <h2 className="md:text-[50px] text-[35px] md:text-left text-center">
            {" "}
            <h2 className="text-green-300"> We’re a trusted partner</h2> across
            the supply chain.{" "}
          </h2>
          <p className="md:w-[40%] text-[20px] md:text-start text-center">
            We opened our doors in 2022 with a simple mission: to make the
            wholesale purchasing process easy and affordable. Since then, we
            have grown exponentially, cultivating partnerships with
            manufacturers and expanding our inventory. This growth has greatly
            benefited our customers, as they receive the highest quality
            products at the best prices around
          </p>
        </div>
        <div className="mt-[70px]">
          <h1 className="text-[50px] md:text-start text-center">
            Proven Expertise that Meet Your Needs
          </h1>

          <div className="flex md:flex-row md:p-0 p-3 flex-col gap-8 md:mt-[20px]">
            {items.map((item, index) => (
              <div>
                <button
                  onClick={() => {
                    setDrop(item);
                    setMobile(index);
                  }}
                  className={` ${
                    drop.name === item.name
                      ? "bg-white text-black rounded-bl-none"
                      : "bg-green-400 text-white"
                  } md:p-4 p-6 rounded-tr-[40px] rounded-bl-[40px] md:rounded-bl-none w-full`}
                >
                  {item.name}
                </button>
                <div className="md:hidden bg-white rounded-bl-[50px]">
                  {item.submenu && mobile === index && (
                    <div className="h-full flex  justify-center items-center">
                      {item.subitems.map((item, index) => (
                        <div
                          key={index}
                          className="text-black flex flex-col p-2 justify-center gap-10 items-center "
                        >
                          <div className="w-full">
                            <p>{item.desc}</p>
                          </div>
                          <div className="w-full ">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full rounded-tr-[50px] rounded-bl-[50px]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white h-[600px] w-[85%] hidden md:block flex justify-center items-center rounded-tr-[100px] rounded-bl-[100px]">
            {drop.submenu && (
              <div className="h-full flex justify-center items-center">
                {drop.subitems.map((item, index) => (
                  <div
                    key={index}
                    className="text-black flex p-4 justify-center gap-10 items-center "
                  >
                    <div className="w-[40%]">
                      <p>{item.desc}</p>
                    </div>
                    <div className="w-[45%] ">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full rounded-tr-[50px] rounded-bl-[50px]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Products />
      <Footer />
    </div>
  );
};

export default About;
