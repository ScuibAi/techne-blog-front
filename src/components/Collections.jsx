import React, { useState } from 'react'
// import { BiCalendar } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import img from "/assets/puppy.jpg"
import Navbar from './Navbar';


const Collections = () => {

  const navigate = useNavigate()
  const blogs = [
 {
        title:'Zen the Art of Ux Design with David Vogel',
      img: img,
        description:"By award team in inspirational talks",
        collection:"Round’n round with GSAP Animation"
       },


       {
        title:'Zen the Art of Ux Design with David Vogel',
        img: img,
        description:"By award team in inspirational talks",
        collection:"Round’n round with GSAP Animation"

       },


       {
        title:'Zen the Art of Ux Design with David Vogel',
        img: img,
        description:"By award team in inspirational talks",
        collection:"Round’n round with GSAP Animation"
     

       },


       {
        title:'Zen the Art of Ux Design with David Vogel',
        img: img,
        description:"By award team in inspirational talks",
        collection:"Round’n round with GSAP Animation"
    
       },


       {
        title:'Zen the Art of Ux Design with David Vogel',
        img: img,
        description:"By award team in inspirational talks",
        tag:"By award team in inspirational talks",
         collection:"Round’n round with GSAP Animation"
       },
    ]





 


return (
  <>
  <div className='lg:w-[15px] md:w-[20%] w-[100%] '>

  
  <div className=' pt-[30px]  flex flex-wrap justify-center items-center gap-[20px] pb-[20px]  '>
    {blogs.map((blog) => (
      <div className='justify-center items-center ' key={blog}>
  
<div className='bg-white w-[300px] h-[400px] justify-start items-center flex flex-col items-center '>
<span className=' flex justify-center items-center  '>
<span > <img src={blog.img} className=' w-[300px] h-[400px]' alt="" /></span>
</span>

{/* Actions */}

<div className='absolute grid '>
  <span className='border border-white p-[5px] mt-[20px] text-center text-white w-[100px] rounded'>Collection</span>
<div className=' flex flex-col pt-[250px] justify-start items-start w-auto gap-[20px]'>
{/* <span className=' text-sm  text-[#383838]'>{blog.title}</span> */}
<span className='text-sm text-[#383838]'>{blog.collection}</span>
<div className='flex justify-between gap-[110px] '>
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

export default Collections