import { useState } from "react";
// import "../Design.css";
// import { BiGlobe, BiLock,  } from "react-icons/bi";
import { useNavigate,  } from "react-router-dom";

const Create = () => {
 
const [part1, setPart1] = useState()
const [part2, setPart2] = useState()
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
          POST A BLOG TODAY
            </p>
            <p>
            {/* (NB: Do not refresh page ) */}
            </p>
          </div>
            <form className="  justify-center items-center text-center  ">
              <div className="w-[100%]  md:mt-[0px] mt-[10px]">          
                <div className="flex flex-col justify-center items-center gap-[10px]">

{/* Title*/}
<div className="w-[80%] lg:w-[40%] h-[78px] justify-center items-center">
<span   className="mt-[10px] flex flex-col  flex justify-start items-start   ">
   <p className="">TITLE</p>
   <input
    className=" bg-[#F5F5F5] w-[100%] h-[48px] rounded-[10px] pl-[15px]  focus:outline-none  "
    placeholder="Enter blog title"
    type="email"
    onChange={onMutate}
     required
    />
    <span className="">
    <img src="assets/check_circle.svg" className="pr-[15px] pl-[5px]" alt="" />
    </span>
    </span>
      </div>
  {/*End Title*/}     


{/* file 1*/}
<div className="w-[80%] lg:w-[40%] h-[78px] justify-center items-center">
<span   className="mt-[10px] flex flex-col flex justify-start items-start   ">
   <p className="">IMAGE(Optional)</p>
   <input
    className=" bg-[#F5F5F5] w-[100%] pt-[10px] file:border-gray-200 file:rounded h-[48px] rounded-[10px] pl-[15px] "
    placeholder="Enter blog title"
    type="file"
    onChange={onMutate}
     required
    />
    </span>
      </div>
  {/*End file 1*/}     
             
             

             {/* Paragraph 1*/}
<div className="w-[80%] lg:w-[40%] justify-start items-start">
<span   className="mt-[10px] placeholder:items-start flex flex-col flex justify-start items-start   ">
   <p className="">PARAGRAPH</p>
   <input
    className=" bg-[#F5F5F5] w-[100%] pb-[108px] rounded-[10px] pl-[15px] pt-[10px]  focus:outline-none  "
    placeholder="Enter blog first paragraph"
    type="email"
    onChange={onMutate}
     required
    />
    { !part1 &&
       <span onClick={() => setPart1((prevPart) => !prevPart)} className=" mt-[10px] hover:cursor-pointer p-[5px] bg-[#EA9C28] text-white rounded-[10px]">More</span>
    }
    </span>

      </div>
      
  {/*Paragraph 1*/}


{/* part 1*/}

{ part1 &&
<>
<div className="w-[80%] lg:w-[40%] h-[78px] justify-center items-center">
<span   className="mt-[10px] flex flex-col flex justify-start items-start   ">
    {/* file 2*/}
   <p className="">IMAGE(2) Optional</p>
   <input
    className=" bg-[#F5F5F5] w-[100%] pt-[10px] file:border-gray-200 file:rounded h-[48px] rounded-[10px] pl-[15px] "
    placeholder="image"
    type="file"
    onChange={onMutate}
     required
    />
    </span>
      </div>


      {/*Paragraph 2*/}        
<div className="w-[80%] lg:w-[40%] justify-start items-start">
<span   className="mt-[10px] placeholder:items-start flex flex-col flex justify-start items-start   ">
   <p className="">PARAGRAPH(2)</p>
   <input
    className=" bg-[#F5F5F5] w-[100%] pb-[108px] rounded-[10px] pl-[15px] pt-[10px]  focus:outline-none  "
    placeholder="Enter blog second paragraph(Optional)"
    type="email"
    onChange={onMutate}
     required
    />
    <span className="flex gap-[10px]">
  
     { !part2 &&
       <span onClick={() => setPart1((prevPart) => !prevPart)} className="mt-[10px] hover:cursor-pointer p-[5px] bg-black text-white rounded-[10px]">Less</span>
    }
       { !part2 &&
       <span onClick={() => setPart2((prevPart) => !prevPart)} className="mt-[10px] hover:cursor-pointer p-[5px] bg-[#EA9C28] text-white rounded-[10px]">More</span>
    }
     
     </span>
 
    </span>
   
      </div>
      
      </>
}
  {/*end part 1*/}

  {part2 &&
<>
{/* part 2*/}
  {/* file 2*/}
<div className="w-[80%] lg:w-[40%] h-[78px] justify-center items-center">
<span   className="mt-[10px] flex flex-col flex justify-start items-start   ">
   <p className="">IMAGE(3) Optional</p>
   <input
    className=" bg-[#F5F5F5] w-[100%] pt-[10px] file:border-gray-200 file:rounded h-[48px] rounded-[10px] pl-[15px] "
    placeholder="Enter blog title"
    type="file"
    onChange={onMutate}
     required
    />
 
    </span>
      </div>
  {/*End file 2*/}    

               {/* Paragraph 2*/}
<div className="w-[80%] lg:w-[40%] justify-start items-start">
<span   className="mt-[10px] placeholder:items-start flex flex-col flex justify-start items-start   ">
   <p className="">PARAGRAPH(3)</p>
   <input
    className=" bg-[#F5F5F5] w-[100%] pb-[108px] rounded-[10px] pl-[15px] pt-[10px]  focus:outline-none  "
    placeholder="Enter blog third paragraph(Optional)"
    type="email"
    onChange={onMutate}
     required
    />

   { part2 &&
       <span onClick={() => setPart2((prevPart) => !prevPart)} className=" mt-[10px] hover:cursor-pointer p-[5px] bg-black text-white rounded-[10px]">Less</span>
    }
    </span>
      </div>
  {/*Paragraph 2*/}
 
  {/*end part 2*/}
  </>
  }
 
                <span className="flex justify-center hover:cursor-pointer items-center mt-[30px] w-[80%] lg:w-[40%] h-[64px] bg-[#EA9C28] mouse-pointer text-white hover:bg-[#C41740] text-center rounded-[10px] ">
POST
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




