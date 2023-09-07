'use client'
import React, { useState } from 'react'
import '@/styles/App.css'
import { signIn } from "next-auth/react"
import { redirect } from 'next/navigation'

export default  function Home() {

   const [cred, setCred] = useState({
      email :'',
      password:'',
   });
   


  return (
    <div className="relative z-0 ">
       <div className='signUp '>
          <h3 className='logo'>Logo</h3>

         <div className='singUp__board '>

           <div className='board'>
            Board.
           </div>

           <div className='signUp__social'>
              <img src='/github.svg' alt='github' className='singUp__social-logo '/>
              <img src='/react.svg' alt='react' className='singUp__social-logo'/>
              <img src='/linkedin.svg' alt='linkedin' className='singUp__social-logo'/>
              <img src='/discord.svg' alt='discord' className='singUp__social-logo'/>
           </div>

         </div>

         <div className='signUp__form'>
            <div className='sub__form w-[350px]'>
            <h3 className=' text-[30px] font-[700] pb-1  mb__signin '>Sign In</h3>
            <p className='mb__signinp'>Sign in to your account</p>
            <div className='googleapple flex gap-1 py-3'>
                  <button onClick={() => signIn("google", { callbackUrl: '/dashboard' } )}    className='flex bg-white  content-center  flex-1 gap-2 text-[11px]  items-center  glogo1'><img src='/glogo.svg'alt='glogo' />Sign in with Google </button>


                  <button className='flex bg-white content-center flex-1  gap-3 text-[11px]  items-center applogo1'> <img src='/applogo.svg' alt='applogog' className='applogog' />Sign in with Apple </button>
            </div>

            <form className='form  bg-white mb-6'>
               <p className='text-[14px] mb-2'>Email Address</p>
               <input type='email' placeholder='Enter your email' className='email' />

               <p className=' text-[14px] my-2'>Password</p>
               <input type='password' placeholder='Password' className='pasword ' /> 

               <a href='#' className='block forgpas py-4'>Forgot Password ?</a>

               <button className='form__sign'>Sign In</button>


            </form>

            <p className='text-[14px] text-[#858585] text-center'>Dont have an account ? <a href='#' className='text-[#346BD4]'> Register here</a> </p>

            </div>
         </div>
    </div>
    </div>

  
)
}
