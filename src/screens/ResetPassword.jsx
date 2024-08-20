import { useState } from "react";


const ResetPassword = () => {
    const [email, setEmail] = useState()

  return (
    <>
      <main className="justify-center items-center w-[100%] h-[100%]">
        {/* Small screen*/}
        <div className="  pb-[150px] w-[100%] h-[900px] justify-center items-center align-center ">
          <div className="flex pt-[30px] justify-center items-center align-center text-center">
         <img src="assets/logo.png" alt="" className="w-[50px]" />
          </div>
          <div className="my-[100px]">
            
        
          <div className="flex flex-col justify-center items-center text-center">
            <p className=" text-3xl pt-[10px] justify-center items-center text-center font-bold">
            Reset your password
            </p>

            <p className=" text-[13px] font-aderoLight max-w-[500px] text-light text-wrap font-neueRegular justify-center items-center text-center  p-[20px]   ">
            Enter your email address and we will send you instructions to reset your password.
            </p>
          </div>
      
            <form className="justify-center items-center text-center ">
              <div className="w-[100%] h-[100%] md:mt-[0px] mt-[10px]">
                <input
                  className="mt-[18px] bg-[#F5F5F5] md:w-[40%] w-[80%] h-[64px]  rounded-[10px] pl-[15px] focus:outline-none focus:border-orange-500  "
                  id="email"
                  placeholder="Enter your Email address"
                  type="email"
                  // value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></input>

                <br />
                <button className="mt-[30px] lg:w-[40%] w-[80%] h-[64px] mouse-pointer text-white bg-[#EA9C28] focus:outline-none border border-[1px] text-center hover:bg-[#C41740] rounded-[10px] ">
              Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default ResetPassword;
