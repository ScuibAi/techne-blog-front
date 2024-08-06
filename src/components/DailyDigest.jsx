import React, { useState } from 'react'
// import { BiCalendar } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import img from "/assets/puppy.jpg"
import Navbar from '../components/Navbar';


const DailyDigest = () => {

  const navigate = useNavigate()
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
  <div className='   '>

  
  <div className=' pt-[30px] lg:w-[90%] md:w-[75%] w-[100%] flex flex-wrap justify-center items-center gap-[20px] pb-[20px]  '>
    {blogs.map((blog) => (
      <div className='justify-center items-center ' key={blog}>
  
<div className='bg-white w-[300px] h-[400px] justify-start items-center flex flex-col items-center '>
<span className=' flex justify-center items-center  '>
<span > <img src={blog.img} className=' w-[300px] h-[225px]' alt="" /></span>
</span>

{/* Actions */}
<div className='grid pt-[20px]'>
<div className=' flex flex-col  justify-start items-start w-auto gap-[20px]'>
<span className=' text-sm  text-[#383838]'>{blog.title}</span>
<span className='text-sm   text-[#383838]'>{blog.tag}</span>
<div className='flex justify-between gap-[110px] pt-[15px]'>
<span className='flex  gap-[5px] justify-center items-center'>
  <span className='rounded '><img src="assets/userw.jpg" alt="" className='w-[30px] h-[30px] rounded-full'/></span>
  <span className='rounded '><img src="assets/userr.jpg" alt="" className='w-[30px] h-[30px] rounded-full'/></span>
  <span className='rounded '><img src="assets/userr.jpg" alt="" className='w-[30px] h-[30px] rounded-full'/></span>
<span className='text-gray-400 text-[15px]'>+4</span>
</span>
<span className='flex justify-end items'>
  
<span className='rounded-full border border-gray-300 '><img src="assets/click2.png" alt="" className='w-[30px] h-[30px] '/></span>
</span>
</div>

</div>
<div className='flex justify-center items-center w-auto absolute mt-[87px]  pt-[20px] gap-[10px]'>

</div>
</div>





</div>
      </div>
    ))}
  </div>



 
  </div>
  </>
)
}

export default DailyDigest