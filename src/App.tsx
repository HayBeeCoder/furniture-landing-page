import { useState } from 'react'
// import logo from './logo
import Hero from "./components/Hero"
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import PerkBanner from './components/PerkBanner'
import About from './components/About'

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
    </main>
   </>
  )
}

export default App
