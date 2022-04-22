import { useState } from 'react'
// import logo from './logo
import Hero from "./components/Hero"
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Header/>
    <main>
       <Hero/>
       <Banner/>
    </main>
   </>
  )
}

export default App
