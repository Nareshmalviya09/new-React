import React from 'react'
import { Outlet,Link, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import About from './About'
import Service from './Service'
import Contect from './Contect'
const Router = () => {
  return (
    < >
        <Routes>
            <Route path='/' element={<Layout/>} />
             {/* <Route index element={<home/>} >  </Route> */}
            <Route path='about' element={<About/>} />
            <Route path='/Contact' element={<Contect/>} />

        </Routes>
     
    </>
  )
}

export default Router