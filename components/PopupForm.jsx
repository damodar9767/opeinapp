import React, { useState } from 'react'



const PopupForm = ( {closeModal, openModel2, formdat})  => {


  const [pform, setPform] = useState({
    name:'',
    email:'',
    phone:'',
    insta: '',
    youtu: '',
  });
  

  const handleChange = (e) => {
    const {name, value} = e.target;
    setPform({
      ...pform,
      [name]: value,
    })
   

  }
  
  return (
    <section className='popupform    ' id='basic' >

      <div className='modalComponent  pt-4 px-6  bg-white rounded-xl w-[300px] sm:w-[500px]'>
        <div className='modal__header text-xl font-semibold flex justify-between items-center '>
        <h3 className='pb-2'>Add New Profile</h3>

        <button onClick={() => closeModal(false)}><img src='/Icon.svg' alt='close tag' /></button>

        </div>        

        <div className='flex justify-evenly items-center gap-5 ' >
          <button className='modal_links active '>Basic</button>
          <button className='modal_links'>Social</button>
        </div>

        <div className='modalmiddle my-6'>
          <form>
            <p className='my-1 '>Enter Name*</p>
            <input placeholder='Eg.- Jhon Doe' className='modal_inputs' type='text'  required  name='name' value={pform.name} onChange={handleChange} />

            <p className='my-1 mt-5 '>Enter Email*</p>
            <input placeholder='Eg.- Jhon@xyz.com' className='modal_inputs' type='email'  required name='email' value={pform.email} onChange={handleChange} />

            <p className='my-1 mt-5 '>Enter Phone*</p>
            <input placeholder='Eg.- 9761235425' className='modal_inputs' type='tel'  required name='phone' value={pform.phone} onChange={handleChange} />

          </form>
        </div>

        <div className='modalfoot'>

        <button  onClick={() =>{
          closeModal(false)
          openModel2(true)
          formdat(pform)

        }} className='bg-[#3F84F8] px-4 py-3 text-white rounded-[10px]'>Next</button>

        </div>
      </div>

    </section>
  )
}

export default PopupForm