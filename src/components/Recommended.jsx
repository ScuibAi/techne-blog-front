import React from 'react'
import img from "/assets/puppy.jpg"

const Recommended = () => {

    const blogs = [
        {
               title:'10 Hilarious Cartoons That Depict Real-Life Problems of Programmers',
             img: img,
               description:"By award team in inspirational talks",
               tag:"Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks."
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
    <div className='text-[#1D2939] font-[700] pt-[30px]'>Recommended Articles</div>
    <div className=' p-[30px]  w-[100%] flex flex-col flex-wrap justify-center items-center gap-[20px]   '>
    {blogs.map((blog) => (
      <div className='justify-center items-center ' key={blog}>
  
<div className='bg-white w-full h-full justify-start items-center flex md:flex-row flex-col items-center '>


{/* Actions */}
<div className='grid p-[10px]'>
<div className=' flex flex-col  justify-start items-start md:w-[400px] w-auto gap-[20px]'>
<span className=' text-sm font-[600] text-[#383838]'>{blog.title}</span>
<span className='text-sm   text-[#383838]'>{blog.tag}</span>
<div className='flex md:flex-row flex-col justify-between md:gap-[110px] '>
<span className='flex  gap-[5px] justify-center items-center'>
  <span className='rounded '><img src="assets/userw.jpg" alt="" className='w-[30px] h-[30px] rounded-full'/></span>
  <span className='rounded '><img src="assets/userr.jpg" alt="" className='w-[30px] h-[30px] rounded-full'/></span>
  <span className='rounded '><img src="assets/userr.jpg" alt="" className='w-[30px] h-[30px] rounded-full'/></span>
<span className='text-gray-400 text-[15px]'>+4</span>
</span>
<span className='flex justify-end items'>
  
{/* <span className='rounded-full border border-gray-300 '><img src="assets/click2.png" alt="" className='w-[30px] h-[30px] '/></span> */}
</span>
</div>

</div>
<div className='flex justify-center items-center w-auto absolute mt-[87px]  pt-[20px] gap-[10px]'>

</div>
</div>

<span className=' flex justify-center items-center  '>
<span > <img src={blog.img} className=' md:w-[300px] w-[400px] h-[225px]' alt="" /></span>
</span>



</div>
      </div>
    ))}
  </div>
  </>
  )
}

export default Recommended