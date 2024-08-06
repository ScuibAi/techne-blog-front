import React, { useState } from 'react'
import Button from './Button'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation(); // Get current location

    // Determine background and text colors based on the current route 
    const textColorClass =
      location.pathname === "/" ? "navcolor" : "text-[#1D2939]";
      const DigestColorClass =
      location.pathname === "/daily-digest" ? "navcolor" : "text-[#1D2939]";

  return (
    <header className='main-header bg-[#F9F9F9] flex fixed box-border justify-between w-full items-center'>
        <a href="" className='logo capitalize' aria-label='techne logo'>
            techne &trade;
        </a>
        <div className='prenav flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" title="Menu" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"/>
            </svg>
            <nav>
                <ul className='flex items-center'>
                {/* <li><a href="" className='active'>Home</a></li> */}
                <Link to="/"  className={textColorClass}>Home</Link>
                <Link to="/daily-digest"  className={DigestColorClass} > daily digest </Link>
                    <li><a href="">design tools</a></li>
                    <li><a href="">tutorials</a></li>
                </ul>
            </nav>
            <Button/>
        </div>
        <div className='absolute dropdown w-full'>
            <ul className='flex items-center'>
               {/* <Link to="/daily-digest" className='active'>daily digest</Link> */}
                <li><a href="">design tools</a></li>
                <li><a href="">tutorials</a></li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar