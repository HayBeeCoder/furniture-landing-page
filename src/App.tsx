import { useState } from 'react'
// import logo from './logo
import Hero from "./components/Hero"
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import PerkBanner from './components/PerkBanner'
import About from './components/About'
import Products from './components/Products.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Header/>
    <main>
       <Hero/>
       <Banner/>
       <PerkBanner/>
       <About/>
       <Products/>
    </main>
   </>
  )
}

export default App
