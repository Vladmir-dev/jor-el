import React from "react";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import chat from "../assets/cha.png";

const Footer = () => {
  const links = [
    {
      name: "Quick Links",
      submenu: true,
      subitems: [
        { name: "Contact Us" },
        { name: "About Us" },
        { name: "Terms Of Use" },
      ],
    },
    {
      name: "Products & Services",
      submenu: true,
      subitems: [
        { name: "Grains & Oil Seeds" },
        { name: "Specialty Grains & Seeds" },
      ],
    },
    {
      name: "Contact",
      submenu: true,
      subitems: [
        {
          name: "jorelagriexporters@gmail.com",
        },
      ],
    },
  ];

  return (
    <div className="bg-black">
      <div class="bg-white">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920.000000 72.000000"
          preserveAspectRatio="xMidYMid meet"
          
        >
          <g
            transform="translate(0.000000,72.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path
              d="M8540 714 c-1252 -31 -1677 -46 -2595 -94 -1723 -91 -3562 -248 -4915 -421 -498 -63 -806 -112 -952 -151 -78 -20 -92 -30 -62 -42 26 -10 19184 -7 19184 3 0 42 -1102 197 -2240 316 -1870 194 -3606 309 -5690 376 -302 10 -2449 20 -2730 13z"
             
            ></path>
          </g>
        </svg>
      </div>

      <div className="text-white p-6 flex justify-center items-center flex-col">
        <img src={chat} alt="chat" />
        <h1 className="text-[30px] font-bold">Talk To Us</h1>
        <p className="text-[20px] md:text-left text-center">
          Whether you’re interested in speaking to our country management team,
          enquiring about one of our products or partnering with us, we want to
          hear from you.
        </p>
        {/* <button className="text-black bg-white px-4 py-2 hover:rounded-tl-[100px] duration-500 mt-[30px]">
          Contact Us
        </button> */}
        {/* <QuestionAnswerOutlinedIcon className="text-green-300 text-[60px]" /> */}
      </div>
      <hr className="border border-solid border-[2px] border-green-300" />
      <div className="text-white flex md:flex-row flex-col  md:justify-around items-start m-10 w-full">
        <div>
          <h1 className="md:text-[40px] text-[25px] md:text-left text-center font-bold">
            Jor-EL Agri-Exporters <br /> & <br /> Consultants Company Limited
          </h1>
        </div>
        <div className="flex md:flex-row flex-col md:justify-start md:items-start justify-center items-center md:mt-0 mt-[40px] gap-[50px]">
          {links.map((item, index) => (
            <div key={index}>
              <h1 className="text-[25px] font-bold">{item.name}</h1>
              <div className="flex flex-col gap-3 mt-[10px]">
                {item.submenu &&
                  item.subitems.map((sitem, index) => (
                    <div>
                      <h4>{sitem.name}</h4>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
