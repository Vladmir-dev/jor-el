import React, { useState, useEffect } from "react";
import logo from "../assets/olamagri-primary-logo.webp";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState([]);
  const [drop, setDrop] = useState(false);
  const [open, setOpen] = useState(false);

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

  const links = [
    {
      name: "About Us",
      to: "/about",
      submenu: true,
      subitems: [
        {
          name: "Our LeaderShip",
          to: "/",
        },
        {
          name: "Ethics & Compliance",
          to: "/",
        },
      ],
    },
    {
      name: "Products & Services",
      to: "/",
      submenu: true,
      subitems: [
        {
          name: "Grains & Oil seeds",
          to: "/",
        },
        {
          name: "Edible Oils",
          to: "/",
        },
      ],
    },
  ];
  console.log("menu ===>", menu);
  return (
    <div className="flex flex-col">
      <div
        className={
          show
            ? "w-full bg-black flex flex-col justify-center items-center  top-0 fixed z-10 shadow-md group/nav hover:bg-black  text-white duration-500"
            : "fixed w-full  flex flex-col justify-center items-center z-10  top-0 group/nav hover:bg-black hover:text-white duration-500"
        }
        // className="w-full flex justify-center fixed items-center group/nav hover:bg-black duration-500 h-auto z-100"
      >
        <div className="flex md:justify-around justify-between items-center w-full md:px-[50px] py-[20px] px-[40px]">
          <Link to="/">
            <div>
              <h1 className="text-[40px]">Jor-El</h1>
              {/* <img src={logo} alt="logo" className="w-[120px]" /> */}
            </div>
          </Link>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <AiOutlineClose className="text-[27px]" />
              ) : (
                <AiOutlineMenu className="text-[27px]" />
              )}
            </button>
          </div>

          {/* <div className="hidden md:block"> */}
          <div
            className={
              open
                ? "flex md:flex-row flex-col ml-[-40px] mt-[-50px] md:overflow-0 md:ml-0 md:h-auto md:group/men  md:p-0 p-4 md:bg-inherit md:justify-center bg-green-600 md:items-center items-start justify-start md:relative fixed md:top-0 top-[130px]  bg-black  md:w-auto  w-full list-none gap-8 text-[20px]"
                : "hidden md:block md:flex md:flex-row md:list-none md:gap-8 text-[20px] md:flex md:justify-center md:items-center"
            }
          >
            <ul className="flex md:flex-row flex-col list-none gap-8 text-lg">
              {links.map((item, index) => (
                <div
                  key={index}
                  className=""
                  onMouseEnter={() => setDrop(index)}
                  onMouseLeave={() => setDrop("")}
                >
                  <Link
                    to={`${item.to}`}
                    className="hover:text-green-500 duration-500"
                  >
                    <li className="text-[25px] sm:text-[18px] md:text-[25px]">
                      {item.name}
                    </li>
                  </Link>

                  {drop === index && (
                    <div className="md:absolute md:bg-black bg-inherit w-full left-0 p-4  md:shadow-md">
                      {item.submenu ? (
                        <div className="flex p-4 md:flex-row flex-col p-16 gap-5 justify-evenly">
                          {item.subitems.map((ele, index) => (
                            <div key={index} className="">
                              <Link to={`/category/${item.name}`}>
                                <h4 className="hover:text-green-500">
                                  {ele.name}
                                </h4>
                              </Link>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </ul>
          </div>
          
        </div>
        <div className="w-full">
        {show && (
          <hr className="border border-solid border-[2px] duration-500 border-white w-[100%]" />
        )}
      </div>
      </div>
      
    </div>
  );
};

export default Navbar;
