import React, { useState } from 'react'
import img from "/assets/headp.jpeg"
import Button from './Button'
import Modal from './ModalComponent/Modal'

const UserBlogs = () => {

  const [showMode, setShowMode] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [color, setColor] =useState(false)
  const showDeleteWarningHandler = () => {
   setShowConfirmModal(true);
 };

 const cancelDeleteHandler = () => {
   setShowConfirmModal(false);
 };

 const openModeHandler = () => setShowMode(true);

 const closeModeHandler = () => setShowMode(false);

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

{/* 
<Modal
            show={showMode}
            onCancel={cancelDeleteHandler}
            header="Are you sure?"
            footerClass="-item__modal-actions"
            footer={
              <React.Fragment>
                <Button inverse onClick={cancelDeleteHandler} >
                  CANCEL
                </Button>
                <Button danger  >
                  DELETE
                </Button>
              </React.Fragment>
            }
          >
            <p>
              Do you want to proceed and delete this product? Please note that
              it can't be undone thereafter.
            </p>
          </Modal> */}

<div className="justify-center items-center text-center  ">
              <Modal
                show={showMode}
                onCancel={closeModeHandler}
                header={`Successful`}
                contentClass="product-item__modal-content"
                footerClass="product-item__modal-actions"
                footer={
                <span className='flex gap-[15px] justify-center items-center'>
                 <span className='bg-blue-800 text-white p-[8px] hover:cursor-pointer rounded-[5px]' onClick={closeModeHandler}>EDIT</span>
                 <span className='bg-[#AD1919] text-white p-[8px] hover:cursor-pointer rounded-[5px]' onClick={closeModeHandler}>DELETE</span>
                 <span className='border border-gray-400 p-[8px] hover:cursor-pointer rounded-[5px]' onClick={closeModeHandler}>CANCEL</span>
                </span>
               }
               className=" w-auto justify-center items-center"
              >
                <div >
               
                  
                    <span danger onClick={showDeleteWarningHandler} className="font-neueRegular">
                 What action do you want to perform
                    
                    </span>
                  
                </div>
              </Modal>
            </div>

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

<span  className='rounded flex gap-[20px] pl-[55px] pb-[2px] flex justify-center items-center '>
  <span onClick={() => setColor((activeColor) => !activeColor)}><svg className='`w-[20px] h-[18px] rounded-full' height="24" viewBox="0 0 24 24" fill={color ? `black` : "none"} xmlns="http://www.w3.org/2000/svg">
<path d="M17.5933 3.32241C18.6939 3.45014 19.5 4.399 19.5 5.50699V21L12 17.25L4.5 21V5.50699C4.5 4.399 5.30608 3.45014 6.40668 3.32241C8.24156 3.10947 10.108 3 12 3C13.892 3 15.7584 3.10947 17.5933 3.32241Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
{/* <img onClick={() => setColor((activeColor) => !activeColor)} src="assets/bookmark.svg" alt="" className={ color ? `w-[20px] h-[18px] rounded-full`:`w-[20px] h-[18px] rounded-full `}/> */}
<img  onClick={() => openModeHandler()}  src="assets/edit.svg" alt="" className='w-[15px] h-[13px] rounded-full'/>
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