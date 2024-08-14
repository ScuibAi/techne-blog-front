import React from 'react'
import img from "/assets/headp.jpeg"

const UserBlogs = () => {
const blogs = [
    {
           title:'Zen the Art of Ux Design with David Vogel',
         img: img,
           description:"By award team in inspirational talks",
           tag:"By award team in inspirational talks",
           date:"Apr 10, 2025",
           likes:"2.6k",
           comment:"7"
          },
   
   
          {
           title:'Zen the Art of Ux Design with David Vogel',
           img: img,
           description:"By award team in inspirational talks",
           tag:"By award team in inspirational talks",
           date:"Apr 10, 2025",
           likes:"2.6k",
           comment:"7"
   
          },
   
   
          {
           title:'Zen the Art of Ux Design with David Vogel',
           img: img,
           description:"By award team in inspirational talks",
           tag:"By award team in inspirational talks",
           date:"Apr 10, 2025",
           likes:"2.6k",
           comment:"7"
        
   
          },
   
   
          {
           title:'Zen the Art of Ux Design with David Vogel',
           img: img,
           description:"By award team in inspirational talks",
           tag:"By award team in inspirational talks",
           date:"Apr 10, 2025",
           likes:"2.6k",
           comment:"7"
       
          },
   
   
          {
           title:'Zen the Art of Ux Design with David Vogel',
           img: img,
           description:"By award team in inspirational talks",
           tag:"By award team in inspirational talks",
           date:"Apr 10, 2025",
           likes:"2.6k",
           comment:"7"
           
          },
       ]
   
return (
<>




<div className=' lg:w-[95%] w-[100%]'>



<div className=' pt-[30px] w-full flex flex-wrap lg:justify-start justify-center items-center gap-[20px] pb-[20px]  '>
{blogs.map((blog) => (
  <div className='justify-center items-center ' key={blog}>

<div className=' w-[300px] h-[400px] justify-start items-center flex flex-col items-center '>
<span className=' flex justify-center items-center  '>
<span > <img src={blog.img} className=' w-[300px] h-[180px]' alt="" /></span>
</span>

{/* Actions */}
<div className='grid pt-[20px]'>
<div className=' flex flex-col  justify-start items-start w-auto gap-[10px]'>
<span className=' text-lg text-[#000000]'>{blog.title}</span>
<span className='text-sm text-[#383838]'>{blog.tag}</span>
<div className='flex justify-between gap-[110px] pt-[15px]'>
<div className='flex gap-[10px] justify-center items-center'>
<span className='rounded flex gap-[5px] justify-center items-center'><img src="assets/clock.png" alt="" className='w-[13px] h-[13px] rounded-full'/>
<p className='text-[12px] flex'>{blog.date}</p>
</span>
<span className='rounded flex gap-[5px] justify-center items-center'><img src="assets/heart.svg" alt="" className='w-[13px] h-[13px] rounded-full'/>
<p className='text-[13px] flex'>{blog.likes}</p>
</span>

<span className='rounded flex gap-[5px]'><img src="assets/Union.svg" alt="" className='w-[15px] h-[12px] rounded-full'/>
<p className='text-[10px] flex'>{blog.comment}</p>
</span>

<span className='rounded flex gap-[20px] pl-[55px] pb-[2px] flex justify-center items-center '>
<img src="assets/bookmark.svg" alt="" className='w-[20px] h-[18px] rounded-full'/>
<img src="assets/edit.svg" alt="" className='w-[15px] h-[13px] rounded-full'/>
</span>
</div>

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

export default UserBlogs