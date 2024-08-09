import React, { useState } from 'react'
import Button from './Button'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation(); // Get current location
    const [isOpen, setIsOpen] = useState(false);
    // Determine background and text colors based on the current route 
    const textColorClass =
      location.pathname === "/" ? "navcolor" : "";
      const DigestColorClass =
      location.pathname === "/daily-digest" ? "navcolor" : "";

  return (
    <>
    <header className='main-header bg-[#F9F9F9] flex fixed box-border justify-between w-full items-center'>
        <a href="" className='logo capitalize' aria-label='techne logo'>
            techne &trade;
        </a>
        <div className='prenav flex items-center'>
       
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className={`${textColorClass} inline-flex items-center justify-center p-2 text-gray-400 `}
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                            <a href="" className='logo capitalize md:block hidden' aria-label='techne logo'>
                            techne &trade;
                        </a> &&
               <svg xmlns="http://www.w3.org/2000/svg" title="Menu" viewBox="0 0 24 24">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"/>
           </svg>
                ) : (
                    <svg
                    className="block h-8 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                )}
              </button>
            </div>


            <nav>
                <ul className='flex items-center'>
                {/* <li><a href="" className='active'>Home</a></li> */}
                <Link to="/"  className={textColorClass}>Home</Link>
                <Link to="/daily-digest"  className={DigestColorClass} > daily digest </Link>
                <Link to="/login"><Button>Login</Button></Link>
                  <Link to="/signup"> <Button>Signup</Button></Link>
                  
                </ul>
            </nav>
        
        </div>
        <div className='absolute dropdown w-full'>
            <ul className='flex items-center'>

            </ul>
        </div>

        
    </header>

<div className='prenav flex items-center'>
      
            

{isOpen && (
  <div className="md:hidden justify-center items-center text-center w-full">
    <ul className="px-2 pt-[80px] pb-2 space-y-1 sm:px-3">
      <Link
        to="/"
        className={`${textColorClass} text-6xl block px-3 py-2 rounded-md text-base font-medium`}
      >
    Home
      </Link>
      <Link
        to="/daily-digest"
        className={`${textColorClass} text-6xl block px-3 py-2 rounded-md text-base font-medium`}
      >
 Daily-digest
      </Link>
     
      <Link
        to="/login"
        className={`${textColorClass} text-6xl block px-3 py-2 rounded-md text-base font-medium`}
      >
        Login
      </Link>
      <Link
        to="/signup"
        className={`${textColorClass} text-6xl block px-3 py-2 rounded-md text-base font-medium`}
      >
        Signup
      </Link>
    </ul>
  </div>
)}
   </div>
</>

  )
}
export default Navbar


// import React, { useState } from 'react'
// import Button from './Button'
// import { Link, useLocation } from 'react-router-dom'

// const Navbar = () => {
//     const location = useLocation(); // Get current location
//     const [isOpen, setIsOpen] = useState(false);
//     // Determine background and text colors based on the current route 
//     const textColorClass =
//       location.pathname === "/" ? "navcolor" : "";
//       const DigestColorClass =
//       location.pathname === "/daily-digest" ? "navcolor" : "";

//   return (
//     <header className='main-header bg-[#F9F9F9] flex fixed box-border justify-between w-full items-center'>
//         <a href="" className='logo capitalize md:block hidden' aria-label='techne logo'>
//             techne &trade;
//         </a>
//         <div className="-mr-2 flex md:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//                 className={`${textColorClass} inline-flex items-center justify-center p-2 text-gray-400 `}
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//               >
//                 {!isOpen ? (
//                             <a href="" className='logo capitalize md:block hidden' aria-label='techne logo'>
//                             techne &trade;
//                         </a> &&
//                <svg xmlns="http://www.w3.org/2000/svg" title="Menu" viewBox="0 0 24 24">
//                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"/>
//            </svg>
//                 ) : (
//                     <svg
//                     className="block h-8 w-10"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                 </svg>
//                 )}
//               </button>
//             </div>

//         <div className='prenav flex items-center'>
      
            

//       {isOpen && (
//         <div className="md:hidden text-center" id="mobile-menu">
//           <div className="px-2 pt-2 pb-16 space-y-1 sm:px-3">
//             <Link
//             //   to="/about"
//               className={`${textColorClass} text-6xl block px-3 py-2 rounded-md text-base font-medium`}
//             >
//               About Us
//             </Link>
//             <Link
//               to="/games"
//               className={`${textColorClass} text-6xl block px-3 py-2 rounded-md text-base font-medium`}
//             >
//               How it Works
//             </Link>
//             <Link
//               to="/join"
//               className={`${textColorClass} text-6xl block px-3 py-2 rounded-md text-base font-medium`}
//             >
//               Pricing
//             </Link>
//             <Link
//               to="/contact"
//               className={`${textColorClass} text-6xl block px-3 py-2 rounded-md text-base font-medium`}
//             >
//               FAQs
//             </Link>
//             <Link
//               to="/login"
//               className={`${textColorClass} text-6xl block px-3 py-2 rounded-md text-base font-medium`}
//             >
//               Log In
//             </Link>
//             <Link
//               to="/signup"
//               className={`${textColorClass} bg-[#1D4ED8] p-4 py-2 text-sm w-full h-[52px]`}
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       )}

      
//             <nav>
//                 <ul className='flex items-center'>
//                 {/* <li><a href="" className='active'>Home</a></li> */}
//                 <Link to="/"  className={textColorClass}>Home</Link>
//                 <Link to="/daily-digest"  className={DigestColorClass} > daily digest </Link>
//                     <li><a href="">Signup</a></li>
//                    <Button><Link to="/singup">Signup</Link></Button>
//                    <Button><Link to="/login">Login</Link></Button>
//                 </ul>
//             </nav>
        
//         </div>
//         <div className='absolute dropdown w-full'>
//             <ul className='flex items-center'>

//             </ul>
//         </div>

      
//     </header>
//   )
// }

// export default Navbar