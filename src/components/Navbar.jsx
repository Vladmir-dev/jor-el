import React, { useState, useEffect } from "react";
import logo from "../assets/olamagri-primary-logo.webp";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const items = [
    {
      name: "About Us",
      submenu: true,
      subitems: [
        {
          name: "Our LeaderShip",
        },
        {
          name: "Ethics & Compliance",
        },
      ],
    },
    {
      name: "Products & Services",
      submenu: true,
      subitems: [
        {
          name: "Grains & Oil seeds",
        },
        {
          name: "Edible Oils",
        },
      ],
    },
  ];

  return (
    <div
      className={
        show
          ? "w-full bg-green-600 flex flex-col justify-center items-center  top-0 fixed z-10 shadow-md group/nav hover:bg-black text-white duration-500"
          : "fixed w-full  flex flex-col justify-center items-center z-10  top-0 group/nav hover:bg-black duration-500"
      }
      // className="w-full flex justify-center fixed items-center group/nav hover:bg-black duration-500 h-auto z-100"
    >
      <div className="w-full flex justify-around items-center p-3 h-auto ">
        <h1 className="text-[30px]">Jor-El  </h1>
        {/* <img src={logo} alt="logo" className="w-[280px]" /> */}

        <div className="flex text-[19px] gap-10">
          {items.map((item, index) => (
            <div key={index} className="group/menu ">
              <h1 className="group-hover/nav:text-green-500 duration-500 font-bold aboslute">
                {item.name}
              </h1>
              <div className="absolute hidden group-hover/menu:block z-1 bg-white shadow-md">
                {item.submenu &&
                  item.subitems.map((sitem, index) => (
                    <div key={index}>
                      <h2 className="group-hover/menu:text-black">
                        {sitem.name}
                      </h2>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        {show && (
          <hr className="border border-solid border-[2px] duration-500 border-white w-full" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
