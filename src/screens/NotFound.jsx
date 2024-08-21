import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (<>
    <div className='text-center mt-[100px] text-3xl'>404</div>
    <div className='text-center font-AderoRegular mt-[10px] text-3xl'>Page not found</div>
   <Link to="/" className='flex justify-center mt-[10px] items-center gap-[10px]'>
   <p className='text-center  text-2xl '>Direct to  <Link className='navcolor' to="/">Home</Link></p>
   <img src="assets/Arrow.svg" alt="" />
   </Link>

    </>
  )
}

export default NotFound;