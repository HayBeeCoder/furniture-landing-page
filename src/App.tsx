import { useRef, useState, useEffect , useLayoutEffect} from 'react'
import gsap from 'gsap'
import { Power3 } from 'gsap'
// import logo from './logo
import Hero from "./components/Hero"
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import PerkBanner from './components/PerkBanner'
import About from './components/About'
import Products from './components/Products.tsx'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)
  const parentRef = useRef(null)
  const q = gsap.utils.selector(parentRef)

useEffect(() => {
  gsap.from(q('.circle') , {x: 200, opacity: 0.2, ease: Power3.easeOut , duration: 0.8 , stagger: 1})
},[])
  return (
   <>
    <Header/>
    <main>
       <Hero/>
       <Banner/>
       <PerkBanner/>
       {/* [[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]][[[[[[]]]]]]]]]]] */}

          <div className='flex flex-col items-center gap-6 justify-center mb-4' ref={parentRef}>
            <div className="circle"></div>
            <div className="circle bg-orange-600"></div>
            <div className="circle bg-green-600"></div>
          </div>


       {/* [[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]] */}
       <About/>
       <Products/>
       <Testimonials />
       <Footer/>
    </main>
   </>
  )
}

export default App
