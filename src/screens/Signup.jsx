import { useState } from "react";
// import "../Design.css";
// import { BiGlobe, BiLock, BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
 


  const navigate = useNavigate()



  const onMutate = (e) => {
    let boolean = null;

    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }

    // Files
    // if (e.target.files) {
    //   setFormDatas((prevState) => ({
    //     ...prevState,
    //     images: e.target.files,
    //   }));
    // }

    // Text/Booleans/Numbers
    // if (!e.target.files) {
    //   setFormDatas((prevState) => ({
    //     ...prevState,
    //     [e.target.id]: boolean ?? e.target.value,
    //   }));
    // }
  };
  return (
    <>
    <main >
   
        <div className="  bg-[#ffffff] pb-[150px] justify-center items-center align-center ">
          <div className="flex pt-[30px] justify-center items-center align-center mb-[20px] text-center">
          <p className=" text-xl pt-[10px] text-[36px] font-AderoRegular justify-center items-center text-center ">
             Sign Up
            </p>
          </div>
         
          <div className="flex flex-col justify-center items-center mb-[30px]">
          <div className="flex justify-center items-center text-white md:mt-[20px] mt-[10px] text-normal md:text-lg bg-black xl:w-[50.8%] w-[80%] md:h-[64px] h-[54px] border border-[1px] border-solid border-black hover:border-[#1A7F64] rounded-[10px]">
              
                    <svg
                      className="w-[28px] h-[28px] mr-[10px]"
                      viewBox="0 0 40 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M36.7456 19.7395C36.7456 18.3464 36.6289 17.3298 36.3762 16.2756H19.9482V22.5632H29.5911C29.3968 24.1258 28.3469 26.479 26.0139 28.0602L25.9812 28.2707L31.1755 32.1671L31.5353 32.2019C34.8403 29.2463 36.7456 24.8976 36.7456 19.7395Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M19.9473 36.306C24.6715 36.306 28.6375 34.7999 31.5343 32.2021L26.013 28.0603C24.5355 29.0581 22.5524 29.7546 19.9473 29.7546C15.3203 29.7546 11.3932 26.7991 9.99326 22.714L9.78806 22.7309L4.38704 26.7784L4.31641 26.9685C7.1937 32.5032 13.1039 36.306 19.9473 36.306Z"
                        fill="#34A853"
                      />
                      <path
                        d="M9.99437 22.7141C9.62499 21.6599 9.41122 20.5303 9.41122 19.3632C9.41122 18.196 9.62499 17.0665 9.97493 16.0123L9.96515 15.7878L4.49643 11.6753L4.3175 11.7577C3.13163 14.0544 2.45117 16.6335 2.45117 19.3632C2.45117 22.0929 3.13163 24.6719 4.3175 26.9686L9.99437 22.7141Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M19.9474 8.97159C23.233 8.97159 25.4492 10.3458 26.713 11.4943L31.6511 6.82554C28.6183 4.09587 24.6716 2.42041 19.9474 2.42041C13.1039 2.42041 7.19372 6.2231 4.31641 11.7577L9.97385 16.0123C11.3932 11.9272 15.3204 8.97159 19.9474 8.97159Z"
                        fill="#EB4335"
                      />
                    </svg>
                    <p>Continue with Google</p>
                </div>
             <p className="mt-[40px]">Or</p>
             
                </div>
      
            <form className="  justify-center items-center text-center  ">
              <div className="flex flex-col justify-ceter items-center w-[100%]  md:mt-[0px] mt-[10px]">          
                <div className="flex flex-wrap justify-center ">
                {/* <span   className="mt-[20px] md:mx-[10px] flex justify-start items-center bg-[#ffffff] w-[80%] lg:w-[40.5%] h-[64px] border border-1 border-black pl-[15px] rounded-[10px] focus:outline-none focus:border-orange-500  ">
        
                <input
                 className=" w-[100%] h-[54px] rounded-[10px] md:pl-[15px]  focus:outline-none  "
            
                  placeholder="First Name"
                  type="text"
             
                  onChange={onMutate}
                  required
                />
               
                    </span>
          
                <span   className="mt-[20px] gap-[10px] md:mx-[10px]  flex justify-start items-center bg-[#ffffff] w-[80%] lg:w-[40.5%] h-[64px] border border-1 border-black rounded-[10px] pl-[15px] focus:outline-none focus:border-orange-500  ">
         
                <input
                 className=" w-[100%] h-[54px] rounded-[10px] md:pl-[15px]  focus:outline-none  "
             
                  placeholder="Last Name"
                  type="text"
             
                  onChange={onMutate}
                  required
                />
               
                    </span> */}


                    <span   className="mt-[20px] gap-[10px] md:mx-[10px]  flex justify-start items-center bg-[#ffffff] w-[80%] lg:w-[40.5%] h-[64px] border border-1 border-black rounded-[10px] pl-[15px] focus:outline-none focus:border-orange-500  ">
                {/* <BiUser/> */}
                <input
                 className=" w-[100%] h-[54px] rounded-[10px] md:pl-[15px]  focus:outline-none  "
             
                  placeholder="Username"
                  type="text"
             
                  onChange={onMutate}
                  required
                />
               
                    </span>
                    <span   className="mt-[20px] md:mx-[10px] gap-[10px] flex justify-start items-center bg-[#ffffff] w-[80%] lg:w-[40.5%] h-[64px] border border-1 border-black rounded-[10px] pl-[15px]  focus:outline-none focus:border-orange-500  ">
  
                <input
                 className=" w-[100%] h-[54px] rounded-[10px] pl-[15px]  focus:outline-none  "
               
                 placeholder="Email Address"
                  type="email"
           
                  onChange={onMutate}
                  required
                />
               
                    </span>

            
                <span   className="mt-[20px] md:mx-[10px] gap-[10px] flex justify-start items-center bg-[#ffffff] w-[80%] lg:w-[40.5%] h-[64px] border border-1 border-black rounded-[10px] pl-[15px] focus:outline-none focus:border-orange-500  ">
                {/* <BiLock/> */}
                <input
                 className=" w-[100%] h-[54px] rounded-[10px] pl-[15px] focus:outline-none  "
                  id="password"
                  placeholder="Enter Password"
                  type="password"
               
                  onChange={onMutate}
                  required
                />
               
                    </span>
            
                <span   className="mt-[20px]  gap-[10px] md:mx-[10px] flex justify-start items-center bg-[#ffffff] w-[80%] lg:w-[40.5%] h-[64px] border border-1 border-black rounded-[10px] pl-[15px] focus:outline-none focus:border-orange-500  ">
                {/* <BiLock/> */}
                <input
                 className=" w-[100%] h-[54px] rounded-[10px] pl-[15px] focus:outline-none  "
                  id="password2"
                  placeholder="Confirm Password"
                  type="password2"
         
                  onChange={onMutate}
                  required
                />
               
                    </span>
           
       
      
       
              </div>
              <p className="flex justify-center items-center mt-[30px] w-[80%] lg:w-[40%] h-[64px]  bg-[#EA9C28] mouse-pointer text-white hover:bg-[#C41740] text-center rounded-[10px] ">
Signup
                </p>
              </div>
            </form>

            <div className="flex gap-[5px] text-[16px] justify-center items-center mt-[20px]">
<p>Already own an account? </p> 
<p onClick={() => navigate('/login')} className="text-[#AD1919] cursor-pointer">Login here</p>
</div>
        </div>
      </main>
    </>
  );
};

export default Signup;




