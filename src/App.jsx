import { useState } from 'react'

import './App.css'
import Navbar from './Componets/Navbar'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Cards from './Pages/Cards'



function App() {
  

  return (
    <>
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path ="/home" element={<Home/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/poke cards" element={<Cards/>}/>


      </Routes>


    </div>
     
    </>
  )
}

export default App
