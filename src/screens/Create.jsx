import { useState } from "react";
// import "../Design.css";
// import { BiGlobe, BiLock,  } from "react-icons/bi";
import { useNavigate,  } from "react-router-dom";

const Create = () => {
 

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
          Post a blog today
            </p>
          </div>
            <form className="  justify-center items-center text-center  ">
              <div className="w-[100%]  md:mt-[0px] mt-[10px]">          
                <div className="flex flex-col justify-center items-center gap-[10px]">
             
                    <span   className="mt-[20px] gap-[10px] flex justify-start items-center bg-[#ffffff] w-[80%] lg:w-[40%] h-[64px] border border-1 border-black rounded-[10px] pl-[15px]  focus:outline-none focus:border-orange-500  ">
                {/* <BiGlobe/> */}
                <input
                 className=" w-[100%] h-[54px] rounded-[10px] pl-[15px]  focus:outline-none  "
                  id="title"
                 placeholder="Enter post title"
                  type="text"
                  onChange={onMutate}
                  required
                />
               
                    </span>

         
                <span   className="mt-[20px] flex justify-start items-start bg-[#ffffff] w-[80%] lg:w-[40%] h-[204px] border border-1 border-black rounded-[10px] pl-[15px]  focus:outline-none focus:border-orange-500  ">
                {/* <BiLock/> */}
                <textarea
                 className=" w-[100%] h-[54px] rounded-[10px] pl-[15px] focus:outline-none  "
                  id="description"
                  placeholder="Enter post description"
                  type="password"
                  onChange={onMutate}
                  required
                />
               
                    </span>
           
                <span className="flex justify-center items-center mt-[30px] w-[80%]  lg:w-[40%] h-[64px] mouse-pointer text-white bg-[#AD1919] focus:outline-none focus:border-orange-500 border border-[1px] border-solid border-[#AD1919]  text-center rounded-[10px] ">
Post
                </span>
               
              </div>
              </div>
            </form>
      
        </div>
      </main>
    </>
  );
};

export default Create;




