import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "./data"; // Importing the local data file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import indus1 from "../../../assets/logo-removebg-preview.png"
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
const ServiceOverviews = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleAccordionToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" bg-indigo-100 mx-auto py-16 px-4">
      <p className="text-indigo-950 font-semibold text-2xl md:text-5xl">
        Service Overviews
      </p>
      <div className="w-[200px] lg:w-[400px] h-1 bg-indigo-950 mt-2 mb-4"></div>

      {/* Large and Medium Screens Layout */}
      <div className="hidden lg:flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/3">
          <ul className="text-lg md:text-xl text-zinc-800 space-y-4">
            {data.map((item, index) => (
             <>
              <div key={index} className="flex flex-row gap-x-8 
              cursor-pointer hover:text-orange-500 transition ease-in-out duration-200 hover:scale-105">
                <FontAwesomeIcon icon={item.icon} className="text-sky-600" />
                <li
                  className="text-lg font-semibold"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.title}
                </li>
                <Link to={item.link}>
            <button className="bg-orange-600
             text-white font-semibold  px-4 hover:bg-orange-700 transition duration-300">
              <FontAwesomeIcon icon={faArrowRight} className="text-white text-2xl"/>
            </button>
          </Link>
              </div>
              </>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            {hoveredItem !== null ? data[hoveredItem].title : "Service Details"}
          </h2>
          <p className="text-base md:text-lg text-zinc-800 mb-6">
            {hoveredItem !== null ? data[hoveredItem].desc : "Hover over a service to see more information."}
          </p>
          
        </div>

        <div className="w-full lg:w-1/3 flex justify-center lg:justify-center">
          <img
            src={hoveredItem !== null ? data[hoveredItem].image : indus1}
            alt="Service"
            className="w-[200px]  h-[200px] max-w-sm rounded-md shadow-md"
          />
        </div>
      </div>

      {/* Small Screens Accordion */}
      <div className="lg:hidden">
        {data.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-left text-lg md:text-xl text-white font-semibold bg-gray-800 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              onClick={() => handleAccordionToggle(index)}
            >
              {item.title}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              {openIndex === index && (
                <div className="mt-2 p-4 bg-gray-700 rounded-md">
                  <h2 className="text-2xl font-bold text-orange-500 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-white mb-4">{item.desc}</p>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto rounded-md shadow-md mb-4"
                  />
                  <Link to="/contact">
                    <button className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-700 transition duration-300">
                      Learn More
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceOverviews;
