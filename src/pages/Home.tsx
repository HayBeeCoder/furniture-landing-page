import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import PerkBanner from '../components/PerkBanner'
import About from '../components/About'
import Products from '../components/Products.tsx/Products'
import Testimonials from '../components/Testimonials'

const LandingPage = () => {
    return (
        <>
            <Hero />
            <Banner />
            <PerkBanner />

            <About />
            <Products />
            <Testimonials />
        </>
    )
}

export default LandingPage