import React, { useRef } from "react";
import { ABOUT } from "./About.constant";
import AboutItem from "./AboutItem";
import useHeaderAnimation from "../hooks/useHeaderAnimation.hook";

const About = () => {
  const aboutHeaderRef = useRef(null)
  // const 
  // useHeaderAnimation(aboutHeaderRef)
  return (
    <section className="px-8 pb-36  lg:px-24 ">
      <div className="mb-7 text-center md:w-80 md:text-left">
        <h2 ref={aboutHeaderRef} className="font-nuto text-customGreen text-[35px] font-bold leading-tight">
          About Us
        </h2>
        <p className="text-sm leading-5">
          At furnIture, we take pride in what we do <br /> - service, integrity
          and excellence
        </p>
      </div>
      <div className="block md:flex md:gap-6 ">
        <div className="grid grid-cols-2 gap-3 md:w-1/2 mb-5 md:mb-0">
          {ABOUT.map((about, index) => (
            <AboutItem
              title={about.title}
              desc={about.desc}
              index={index.toString() + "."}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-rows-[repeat(8,_minmax(20px,_1fr))] grid-rows-[repeat(8,_minmax(50px,_1fr))] md:w-1/2 gap-2">
            <div className="col-start-1 col-span-1 row-start-1 row-span-2 bg-gray-100">

            </div>
            <div className="col-start-1 col-span-1 row-start-3 row-span-6 bg-gray-100">

            </div>
            <div className="col-start-2 row-start-1 row-span-6 bg-orange-100">

            </div>
            <div className="col-start-2  row-span-2 bg-blue-100">

            </div>
        
        </div>
      </div>
    </section>
  );
};

export default About;
