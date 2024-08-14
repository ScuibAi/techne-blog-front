import React from 'react'
import { useNavigate } from 'react-router-dom';
import img from "/assets/puppy.jpg"
import DailyDigest from '../components/DailyDigest';
import Collections from '../components/Collections';
import Navbar from '../components/Navbar';


const Dailys = () => {

  
  return (
    <>
    <Navbar/>
    <div className='flex  md:flex-row flex-col bg-[#F2F6F5] pt-[100px] md:justify-start md:items-start justify-center items-center'>
    <span className="w-full flex justify-centet items-center w-[100%]">  <DailyDigest /> </span> 
    {/* <span className="lg:w-[15%] w-[20%] ">  <Collections /></span>  */}
    </div>
    </>
  )
  
  
}

export default Dailys