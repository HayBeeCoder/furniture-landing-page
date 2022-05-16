// import Mashable from "../../assets/icons/banner/mashable.svg";
import { BRANDS } from "./Banner.constants";
import useCarouselAnimation from "./useCarouselAnimation.hook";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const SCREEN_WIDTH = window.innerWidth;

const Banner = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  useCarouselAnimation(boxRef,BRANDS,SCREEN_WIDTH)

  return (
    <section className="bg-[#F4F6F6] pt-20 pb-10 text-center  lg:pb-0">
      <h3 className="font-google-sans px-16 text-xl font-medium tracking-wider lg:px-0">
        TRUSTED BY OVER 1K+ COMPANIES
      </h3>

      <div
        className="relative flex h-24 overflow-hidden lg:h-max  lg:justify-around"
        ref={boxRef}
      >
        {BRANDS.map((Brand,index) => {
          return (
            <div className="carousel-item absolute  top-1/2  flex h-full min-w-full -translate-y-1/2 items-center justify-center  pt-5 lg:relative  lg:top-0 lg:h-40 lg:min-w-fit lg:-translate-y-0 lg:pt-0"key={index} >
              <Brand className="inline-block text-8xl" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Banner;
