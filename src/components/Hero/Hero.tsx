import React from "react";
// import HeroImage from "../../assets/images/hero/interior1.jpg";
import slide1 from "../../assets/images/hero/interior1.jpg"
import slide2 from "../../assets/images/hero/interior2.jpg"
import slide3 from "../../assets/images/hero/interior3.jpg"
import slide4 from "../../assets/images/hero/interior4.jpg"

import Dots from "./Dots";
import SlideReel from "./SlideReel";


const imageArray = [slide4,slide2,slide3,slide4]

const Hero = () => {
  return (
    <section className="relative flex pr-4 md:px-8  lg:px-12 ">
      <div className="z-20 absolute top-1/2 -translate-y-1/2 transform rounded-md  bg-white bg-opacity-50 py-8 px-8 backdrop-blur-[50px] " >
        <h1 className="font-nuto leading-tight text-customGreen md:text-2xl tracking-wide lg:text-4xl antialiased  font-black">
          <pre className="font-nuto ">WE HELP YOU</pre>
          <pre className="font-nuto ">MAKE MODERN </pre>
          <pre className="font-nuto ">INTERIOR</pre>
        </h1>
        <p className="text-base font-google-sans my-2 leading-6 font-normal text-[#5F5F64]">
          We will help you to make an elegant<br></br>
           and luxurious interior designed by<br/>
          professional interior designer.
        </p>
      </div>
      {/* <div className="transform scale-[0.7] -translate-y-14 px-12 relative z-30">
        <Dots />
      </div> */}
      <section className="wrap aspect-video flex-grow bg-slate-300 lg:ml-48 rounded-md overflow-hidden">
          <article className="caurosel-item-wrap w-full h-full m-auto relative">

         {/* <img src={HeroImage} alt="." />  */}
         {
             <SlideReel  slideArray={imageArray} />
         }
                   </article>
      </section>
      <div>
      </div>
    </section>
  );
};

export default Hero;
