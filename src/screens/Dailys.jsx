import React from 'react'
import { useNavigate } from 'react-router-dom';
import img from "/assets/puppy.jpg"
import DailyDigest from '../components/DailyDigest';
import Collections from '../components/Collections';
import Navbar from '../components/Navbar';


const Dailys = () => {

  const blogs = [
    {
           title:'Zen the Art of Ux Design with David Vogel',
         img: img,
           description:"By award team in inspirational talks",
           tag:"By award team in inspirational talks"
          },
   
   
          {
           title:'Zen the Art of Ux Design with David Vogel',
           img: img,
           description:"By award team in inspirational talks",
           tag:"By award team in inspirational talks"
   
          },
   
   
          {
           title:'Zen the Art of Ux Design with David Vogel',
           img: img,
           description:"By award team in inspirational talks",
           tag:"By award team in inspirational talks"
        
   
          },
   
   
          {
           title:'Zen the Art of Ux Design with David Vogel',
           img: img,
           description:"By award team in inspirational talks",
           tag:"By award team in inspirational talks"
       
          },
   
   
          {
           title:'Zen the Art of Ux Design with David Vogel',
           img: img,
           description:"By award team in inspirational talks",
           tag:"By award team in inspirational talks"
          },
       ]
  return (
    <>
    <Navbar/>
    <div className='flex md:flex-row flex-col bg-[#F2F6F5] pt-[100px] md:justify-start md:items-start justify-center items-center'>
    <span className="lg:w-[90%] w-[75%]">  <DailyDigest /> </span> 
    <span className="lg:w-[15%] w-[20%] ">  <Collections /></span> 
    </div>
    </>
  )
  
  
}

export default Dailys