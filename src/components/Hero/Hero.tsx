import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Power3 } from "gsap";
// import HeroImage from "../../assets/images/hero/interior1.jpg";
import slide1 from "../../assets/images/hero/interior1.jpg"
import slide2 from "../../assets/images/hero/interior2.jpg"
import slide3 from "../../assets/images/hero/interior3.jpg"
import slide4 from "../../assets/images/hero/interior4.jpg"

import Dots from "./Dots";
import SlideReel from "./SlideReel";
import useHeaderAnimation from "../hooks/useHeaderAnimation.hook";


const imageArray = [slide4,slide2,slide3,slide4]

const Hero = () => {
  const heroHeaderRef = useRef(null)
  const heroParagraphRef = useRef(null)
  const heroHeaderSelector = gsap.utils.selector(heroHeaderRef)
  const textBackgroundRef = useRef(null)
  useEffect(() => {
    gsap.fromTo(textBackgroundRef.current, {y: 400, opacity: 0, ease: Power3.easeOut,delay: 0.2, duration: 1},{y:0 ,opacity: 1, ease: Power3.easeOut})
 },[])
  // useEffect(() => {
  //     gsap.fromTo(heroHeaderSelector("pre") ,{ y: -150, stagger: 1,opacity: 0, delay: 0.8, ease: Power3.easeOut , duration: 0.8},{y: 0, ease: Power3.easeOut, delay: 1, stagger: 1, opacity: 1})
  //    },[])
  useHeaderAnimation(heroHeaderRef,"pre")
  useEffect(() => {
        gsap.fromTo(heroParagraphRef.current,{opacity: 0, ease: Power3.easeOut, duration: 0.8},{opacity: 1, ease: Power3.easeOut , delay: 3.7})
       },[])




  return (
    <div className="pb-12 md:pb-24">

    <section className="relative block md:flex px-4 md:px-8  lg:px-12 ">
     
      {/* <div className="transform scale-[0.7] -translate-y-14 px-12 relative z-30">
        <Dots />
      </div> */}
      <section className="wrap aspect-video  bg-slate-300 lg:ml-48 md:ml-28  rounded-md overflow-hidden mx-auto">
          <article className="caurosel-item-wrap w-full h-full m-auto relative">

         {/* <img src={HeroImage} alt="." />  */}
         {
             <SlideReel  slideArray={imageArray} />
         }
                   </article>
      </section>
      <div ref={ textBackgroundRef} className="z-20 relative md:absolute top-1/2 md:-translate-y-1/2 md:transform rounded-md  bg-white bg-opacity-50 py-8 px-8 backdrop-blur-[50px] " >
        <h1 ref={heroHeaderRef} className="text-center lg:text-left font-nuto leading-tight text-customGreen text-[35px] md:text-2xl tracking-wide lg:text-4xl antialiased  font-black">
          <pre className="font-nuto ">WE HELP YOU</pre>
          <pre className="font-nuto ">MAKE MODERN </pre>
          <pre className="font-nuto ">INTERIOR</pre>
        </h1>
        <p ref={heroParagraphRef} className=" text-center lg:text-left text-base font-google-sans my-2 leading-6 font-normal text-[#5F5F64]">
          We will help you to make an elegant<br></br>
           and luxurious interior designed by<br/>
          professional interior designer.
        </p>
      </div>
    </section>
    </div>
  );
};

export default Hero;
