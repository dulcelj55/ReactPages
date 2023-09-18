import React from 'react'
import "./index.css"
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <nav id="navbar-container">
       <Link to="/home">
        <button>Home Page</button></Link>
       <Link to="/about">
        <button>About Page</button></Link>
        <Link to="/poke cards">
        <button>Cards Page</button></Link>
       
       
       </nav>
  )
}

export default Navbar