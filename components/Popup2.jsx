import React, { useState } from 'react'


const Popup2 = ( {closeModal2,formdat2, data, ffilled})  => {
    const [sform, setSform] = useState(data);
      
      
      
      const handleChange = (e) => {
        const {name, value} = e.target;
        setSform({
          ...sform,
          [name]: value,
        })
      }

    

  
  return (
    <section className='popupform    ' id='basic' >

      <div className='modalComponent  pt-4 px-6  bg-white rounded-xl w-[300px] sm:w-[500px]'>
        <div className='modal__header text-xl font-semibold flex justify-between items-center '>
        <h3 className='pb-2'>Add New Profile</h3>

        <button onClick={() => closeModal2(false)}><img src='/Icon.svg' alt='close tag' /></button>

        </div>        

        <div className='flex justify-evenly items-center gap-5 ' >
          <button className='modal_links  '>Basic</button>
          <button className='modal_links active '>Social</button>
        </div>

        <div className='modalmiddle my-6'>
          <form>
            <p className='my-1 '>Instagram Link <span className='text-gray opacity-70 text-sm'> &#40; Optional &#41;  </span></p>
            <input placeholder='Eg.- instagram.com/username' className='modal_inputs' type='text' name='insta' value={sform.insta} onChange={handleChange} />

            <p className='mt-8 '>Youtube Link <span className='text-gray opacity-70 text-sm' > &#40; Optional &#41; </span></p>
            <input placeholder='Eg.- youtube/username' className='modal_inputs' type='text' name='youtu' value={sform.youtu} onChange={handleChange} />


          </form>
        </div>

        <div className='modalfoot'>

        <button onClick={() => {
            closeModal2(false)
            formdat2(sform)
            ffilled(true)
        }} className='bg-[#3F84F8] px-4 py-3 text-white rounded-[10px]'>Done</button>

        </div>
      </div>

    </section>
  )
}

export default Popup2