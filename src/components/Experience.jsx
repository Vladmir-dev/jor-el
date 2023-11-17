import React from "react";
import metric from "../assets/metric.webp";
import cardo from "../assets/card-overlay.webp";
import sky from "../assets/sky.jpg";

const Experience = () => {
  const bgstyle = {
    backgroundImage: `url(${sky})`,
  };

  const experience = [
    {
      name: "Manufacturing & Processing Facilities",
      value: "60",
      url: metric,
    },
    {
      name: "Manufacturing & Processing Facilities",
      value: "60",
      url: metric,
    },
    {
      name: "Manufacturing & Processing Facilities",
      value: "60",
      url: metric,
    },
    {
      name: "Manufacturing & Processing Facilities",
      value: "60",
      url: metric,
    },
  ];
  return (
    <div className="flex  mt-[50px] bg-black flex-col w-full">
      <div className="md:h-[100vh] flex md:flex-row flex-col md:justify-around  p-10  md:flex-wrap">
        <div className="text-white gap-10 flex flex-wrap md:w-[30%] text-left">
          <h1 className="text-white md:text-[65px] text-[35px] font-bold">
            We Offer Our{" "}
            <h1 className="text-green-300">
              {" "}
              Customers a Deeper Understanding{" "}
            </h1>{" "}
            Of Market needs
          </h1>

          <div className="flex flex-col gap-8">
            <p>
              We have over 33 years of experience in supply chains across the
              world with foundations built from our on-the-ground presence in
              Asia and Africa.
            </p>
            <p>
              Our operating capabilities in global origination, processing,
              trading, logistics, distribution, and risk management set us apart
              from our peers. While our strategic manufacturing assets in key
              destination markets strengthen our service to customers.
            </p>
          </div>
        </div>

        <div className="text-white md:grid md:mt-0 mt-[30px] md:grid-cols-2 relative gap-10">
          {experience.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-wrap justify-center">
              <img src={item.url} className="md:w-[150px] w-[100px]" />
              <div className="text-center flex-wrap">
                <h3 className="md:text-[55px] font-bold">{item.value}</h3>
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" mt-[20px] relative text-white md:p-10 p-5">
        <div className="flex md:flex-row flex-col relative md:justify-around">
          <div className="bg-white md:w-[800px] md:h-[600px] rounded-tr-[100px] rounded-bl-[100px] md:flex md:justify-end">
            <img src={cardo} className="md:max-w-[1000px]" />
          </div>

          <div className="md:w-[35%] md:mt-0 mt-[30px] flex flex-col md:justify-start md:items-start justify-center items-center">
            <h1 className="md:text-[60px] text-[35px] md:text-left text-center">
              Firm Foundations for{" "}
              <h1 className="text-green-300"> Sustainable Growth </h1>
            </h1>
            <div className="flex flex-col gap-5 md:text-left text-center  text-[18px]">
              <p>
                We offer our farmers, our customers and every member of our
                global supply chains, a robust, and forward-looking approach to
                worldwide food, feed and fibre distribution.
              </p>
              <p>
                Our global practices are firmly rooted in experience and
                understanding second to none.{" "}
              </p>
            </div>
            <button className="bg-white text-black py-2 px-4 mt-[15px] hover:rounded-tl-[100px] duration-500">
              Discover More{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
