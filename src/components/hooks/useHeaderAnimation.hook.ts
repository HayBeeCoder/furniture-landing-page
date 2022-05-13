import { useEffect ,useLayoutEffect} from "react";
import gsap,{Power3} from "gsap";

const useHeaderAnimation = (ref:  React.MutableRefObject<null> , preElementSelector?: String) => {
    const selector = preElementSelector && gsap.utils.selector(ref)
    useLayoutEffect(() => {
        const finalSelector = selector ? selector(preElementSelector.toString()) : ref.current
        gsap.fromTo(finalSelector ,{ y: -150, stagger: 1,opacity: 0, delay: 0.8, ease: Power3.easeOut , duration: 0.8},{y: 0, ease: Power3.easeOut, delay: 1, stagger: 1, opacity: 1})
       },[])
}

export default useHeaderAnimation