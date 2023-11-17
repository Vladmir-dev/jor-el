import React from "react";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import chat from "../assets/cha.png";

const Footer = () => {
  const links = [
    {
      name: "Quick Links",
      submenu: true,
      subitems: [
        { name: "COntact Us" },
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
      name: "Social",
    },
  ];
  return (
    <div className="bg-black">
      <div className="text-white p-6 flex justify-center items-center flex-col">
        <img src={chat} alt="chat" />
        <h1 className="text-[30px] font-bold">Talk To Us</h1>
        <p className="text-[20px]">
          Whether you’re interested in speaking to our country management team,
          enquiring about one of our products or partnering with us, we want to
          hear from you.
        </p>
        <button className="text-black bg-white px-4 py-2 hover:rounded-tl-[100px] duration-500 mt-[30px]">
          Contact Us
        </button>
        {/* <QuestionAnswerOutlinedIcon className="text-green-300 text-[60px]" /> */}
      </div>
      <hr className="border border-solid border-[2px] border-green-300" />
      <div className="text-white flex justify-around items-start m-10 w-full">
        <div>
          <h1 className="text-[40px] font-bold">
            Jor-EL Agri-Exporters <br /> & <br /> Consultants Company Limited
          </h1>
        </div>
        <div className="flex gap-[50px]">
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
