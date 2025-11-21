import React from 'react'
import Navbar from './Navbar'
 import { Footer,Footer2 } from './Footer'
 import img from "../public/vite.svg"
const App=()=> {
  return (
    <div>
      <Navbar/>
        <h1>Home Page </h1>
         <img style={{widows:"50px"}} src="src\assets\react.svg" alt="" />
         <br /><br /> 
         <img src={img} alt="" />
        <Footer/>
        <Footer2/>
    </div>
  )
}

export default App