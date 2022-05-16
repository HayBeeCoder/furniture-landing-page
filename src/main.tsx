import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Cart from './pages/Cart'
import { Products } from './pages/Products'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <Router>
      <Routes>

        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
           <Route path="cart" element={<Cart/>}/>
          <Route path="products" element={<Products />} /> 
          {/* <Route path="new" element={<NewTeamForm />} /> */}
          {/* <Route index element={<LeagueStandings />} /> */}
          {/* </Route> */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
