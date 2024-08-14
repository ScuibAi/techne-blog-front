import React from 'react'
import UserBlogs from '../components/UserBlogs'
import Collections from '../components/Collections'
import UserProfile from '../components/UserProfile'
import Navbar from '../components/Navbar'

const UserPage = () => {
  return (
    <>
    <div className='bg-[#F9F9F9]'>

      <Navbar/>


     <div className='mt-[70px] flex md:flex-row flex-col md:justify-start md:items-start justify-center items-center'>
    <span className=" lg:ml-[150px] lg:px-[80px] flex flex-col"> 
      <UserProfile/>
       <UserBlogs />
        </span> 
    {/* <span className="lg:w-[20%] w-[25%] ">  <Collections /></span>  */}
    </div>
    </div>
    </>
  )
}

export default UserPage