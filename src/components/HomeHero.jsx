import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeHero = () => {
  const navigate = useNavigate()
  return (
    <section className=' w-full md:h-[862px] h-[680px] herocolor'>
        <div className=" pt-[130px]">
      <div className="flex flex-col md:flex-row md:gap-[80px] justify-center items-center md:items-start">
        <div className="lg:w-1/2 md:pt-[153px] w-full">
          <p className="text-[30px] md:block hidden lg:pl-[160px] pl-[8px] xl:text-[60px] md:text-[40px] lg:text-[50px] lg:leading-[60px] md:leading-[40px] leading-[50px] pt-[20px] font-bold text-[#383838] ">
          Tech stories <br/>& ideas
          </p>
          <p className="text-[30px] md:hidden block lg:pl-[160px] pl-[8px] xl:text-[60px] md:text-[40px] lg:text-[50px] lg:leading-[60px] md:leading-[40px] leading-[50px] pt-[20px] font-bold text-[#383838] ">
          Tech stories & ideas
          </p>
          <p className="text-[#383838] lg:pl-[167px] px-[10px] text-[16px] md:text-[18px] leading-[25px]  md:leading-[33.5px] mt-2 md:mt-4  ">
          A place to read, write, and deepen your technology knowledge and understanding; and stay up to speed with latest tech trends
          </p>
          <div className='lg:pl-[167px] pl-[10px] '>
          <button onClick={() => navigate("/signup")} className="mt-6 w-[191px] font-light bg-[#383838]  h-[43px] text-white text-center text-[18px] md:text-[20px] rounded-lg flex items-center justify-between">
            <span className="flex-grow text-center">Get Started</span>
          
          </button>
          </div>
         
          <div className="pt-[30px]">
           
          </div>
        </div>
        <div className="md:w-[500px] w-full flex justify-center md:justify-end pt-[15px] p-0">
          {/* <img src="/assets/edit.png" className="w-full bigdd" alt="Hero" /> */}
        </div>
      </div>
  
    </div>
      
    </section>
  )
}

export default HomeHero