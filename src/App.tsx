import { useRef, useState, useEffect, useLayoutEffect } from 'react'
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



import { Outlet } from 'react-router-dom'

function App() {
 
  return (
    <>
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </>
  )
}

export default App
