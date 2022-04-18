import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Header/>
   </>
  )
}

export default App
