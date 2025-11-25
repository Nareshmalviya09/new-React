import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className="flex justify-between border-4 hight p-3 bg-cyan-900 text-2xl text-white font-bold">

        <div className="left">Logo</div>
        <div className="center">Hello Cybrom</div>

        <div className="right">

            <ul className='flex space-x-8'>
                <li>Home</li>
                <li>Contact Us</li>
                <li>About</li>
                <li>Services</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar