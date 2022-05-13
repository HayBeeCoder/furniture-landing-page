import {useEffect} from "react"
import gsap from "gsap";


const useCarouselAnimation = (ref: React.RefObject<HTMLDivElement>,items: Array<React.FunctionComponent<React.SVGProps<SVGSVGElement>>>, screenWidth: number): void => {

  useEffect(() => {
    const screenWidth = window.innerWidth;
    
    if (screenWidth <= 768) {
      let baseWidth = ref?.current?.offsetWidth;
      let width: number;
      if (baseWidth != undefined) width = baseWidth;

      gsap.set(".carousel-item", {
        x: (i) => i * (baseWidth != undefined ? baseWidth : 1),
      });

      let wrapWidth =
      (items.length - 1) * (baseWidth != undefined ? baseWidth : 1);

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

    }

export default useCarouselAnimation