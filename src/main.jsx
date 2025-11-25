import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './component/Navbar'
//  import Props from './props'
// import App from './App'
// import Tailwind from './component/tailwind'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <Props/> */}
  {/* <App/> */}
   {/* <Tailwind/> */}
  <Navbar/>
  </StrictMode>,
)
