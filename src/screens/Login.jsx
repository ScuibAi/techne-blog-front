

import { useNavigate,  } from "react-router-dom";

const Login = () => {
 

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
        {/* Small screen*/}
        <div className="  bg-[#ffffff] pb-[150px] justify-center items-center align-center ">
          <div className="flex flex-col pt-[30px] justify-center items-center align-center mb-[20px] text-center">
          <p className=" text-xl pt-[10px] text-[36px] font-AderoRegular justify-center items-center text-center  font-neueRegular">
             Login
            </p>
          </div>
            <form className="  justify-center items-center text-center  ">
              <div className="w-[100%]  md:mt-[0px] mt-[10px]">          
                <div className="flex flex-col justify-center items-center gap-[10px]">
             
                    <span   className="mt-[20px] gap-[10px] flex justify-start items-center bg-[#ffffff] w-[80%] lg:w-[40%] h-[64px] border border-1 border-black rounded-[10px] pl-[15px]  focus:outline-none focus:border-orange-500  ">
                {/* <BiGlobe/> */}
                <input
                 className=" w-[100%] h-[54px] rounded-[10px] pl-[15px]  focus:outline-none  "
                  id="email"
                 placeholder="Email Address"
                  type="email"
                  onChange={onMutate}
                  required
                />
               
                    </span>

         
                <span   className="mt-[20px] gap-[10px] flex justify-start items-center bg-[#ffffff] w-[80%] lg:w-[40%] h-[64px] border border-1 border-black rounded-[10px] pl-[15px]  focus:outline-none focus:border-orange-500  ">
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
           
                <span className="flex justify-center items-center mt-[30px] w-[80%] lg:w-[40%] h-[64px] mouse-pointer  bg-[#EA9C28] mouse-pointer text-white hover:bg-[#C41740] focus:outline-none  text-center rounded-[10px] ">
                  Login
                </span>
<div className="flex gap-[5px] text-[16px]">
<p> New here? </p> 
<p onClick={() => navigate('/signup')} className="text-[#AD1919] cursor-pointer">Sign up here</p>
</div>
               
              </div>
              </div>
            </form>
      
        </div>
      </main>
    </>
  );
};

export default Login;




