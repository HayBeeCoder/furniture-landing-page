// import Mashable from "../../assets/icons/banner/mashable.svg";
import { BRANDS } from "./Banner.constants";
import gsap from "gsap";

import React, { useEffect, useRef } from "react";

const Banner = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    
    if (screenWidth <= 768) {
      let baseWidth = boxRef?.current?.offsetWidth;
      let width: number;
      if (baseWidth != undefined) width = baseWidth;

      console.log("baseWidth: ", baseWidth);

      gsap.set(".carousel-item", {
        x: (i) => i * (baseWidth != undefined ? baseWidth : 1),
      });

      let wrapWidth =
        (BRANDS.length - 1) * (baseWidth != undefined ? baseWidth : 1);

      let tl = gsap.timeline({ repeat: -1 }).pause();
      setTimeout(() => {
        tl.to(".carousel-item", {
          duration: 14,
          x: "-=" + (width + wrapWidth),
          ease: "none",
          modifiers: {
            x: gsap.utils.unitize(gsap.utils.wrap(-width, wrapWidth)),
          },
        }).play();

        //Following statements add several pauses to the timeline so the individual items stay in screen for 1 second before resuming the animation.
        // tl.addPause(1, () => {
        //   setTimeout(() => {
        //     tl.play();
        //   }, 1000);
        // });

        // tl.addPause(2, () => {
        //   setTimeout(() => {
        //     tl.play();
        //   }, 1000);
        // });

        // tl.addPause(3, () => {
        //   setTimeout(() => {
        //     tl.play();
        //   }, 1000);
        // });

        // tl.addPause(4, () => {
        //   setTimeout(() => {
        //     tl.play();
        //   }, 1000);
        // });

        // tl.addPause(5, () => {
        //   setTimeout(() => {
        //     tl.play();
        //   }, 1000);
        // });

        // tl.addPause(6, () => {
        //   setTimeout(() => {
        //     tl.play();
        //   }, 1000);
        // });
      }, 2000);
    }
  }, []);

  return (
    <section className="bg-[#F4F6F6] pt-20 pb-10 text-center  lg:pb-0">
      <h3 className="font-google-sans px-16 text-xl font-medium tracking-wider lg:px-0">
        TRUSTED BY OVER 1K+ COMPANIES
      </h3>

      <div
        className="relative flex h-24 overflow-hidden lg:h-max  lg:justify-around"
        ref={boxRef}
      >
        {BRANDS.map((Brand) => {
          return (
            <div className="carousel-item absolute  top-1/2  flex h-full min-w-full -translate-y-1/2 items-center justify-center  pt-5 lg:relative  lg:top-0 lg:h-40 lg:min-w-fit lg:-translate-y-0 lg:pt-0">
              <Brand className="inline-block text-8xl" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Banner;
