import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './component/Navbar'
import { BrowserRouter } from 'react-router-dom'
//  import Props from './props'
import Router from '../src/component/Router'
// import Tailwind from './component/tailwind'



createRoot(document.getElementById('root')).render(
   

  <BrowserRouter>
      <Router/>
  </BrowserRouter>
)
