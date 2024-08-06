import React from 'react'
import UserBlogs from '../components/UserBlogs'
import Collections from '../components/Collections'

const UserPage = () => {
  return (
    <>
    <div className='bg-[#F9F9F9]'>


    <div className='flex flex-col  justify-center items-center'>
<div className='flex  flex-wrap justify-center items-center'>
<span className='flex flex-col md:justify-start justify-center md:items-start items-center md:text-start text-center'>
<span className='pb-[5px]'><img className='w-[60px] h-[60px] md:mt-[40px] mt-[50px] rounded-full' src="assets/userr.jpg" alt="" /></span>
<span className='text-[20px] '><p>Written by Akin Ranin</p></span>
<span className='text-[15px] pt-[3px] pb-[10px] text-gray-700'><p>1.2k Followers</p></span>
<span className='text-[15px] md:px-[0px] px-[20px] text-gray-700'><p>Thinks about the future alot, Founder of two startups. Lives in Singapore.</p></span>
</span>

<span className='flex justify-start items-start '>
<span className='border text-green-700 border-green-700 p-[10px] rounded-[20px]'>Following</span>

</span>

</div>
<span className='flex md:w-[600px] w-[200px] mt-[40px] border border-gray-200'></span>
</div>
     <div className='flex md:flex-row flex-col  md:justify-start md:items-start justify-center items-center'>
    <span className="lg:w-[90%] w-[75%]">  <UserBlogs /> </span> 
    <span className="lg:w-[20%] w-[25%] ">  <Collections /></span> 
    </div>
    </div>
    </>
  )
}

export default UserPage