'use client'

import React, { useEffect } from 'react'


import Compchart from '@/components/Compchart'
import Donutpie from '@/components/Donutpie'

import '@/styles/dashboard.css'


import { useState } from 'react'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import PopupForm from '@/components/PopupForm'
import Popup2 from '@/components/Popup2'



const page = () => {
   
  const [mbmenu, setMbmenu] = useState(false);
  
  
  
  const [isMobile, setIsMobile] = useState(false);
  
  const [signlo, setSignlo] = useState(false);
  const { data: session, status} = useSession()
  
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopu, setIsPopu] = useState(false);
  const [formFilled, setFormFilled] = useState(false);
  
  const [from, setFrom] = useState({
    name:'',
    email:'',
    phone:'',
    insta: '',
    youtu: '',
  });
  
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.outerWidth <= 479);
    };

    window.addEventListener('resize', handleResize);

    handleResize();
    
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  
    return (
      <section className='dahboard relative z-0  pb-[1px]'>
          <div className='leftnav'>
            <div className='leftnav__p1'>
             <h3 className='font-[700] text-[36px] leading-[44px] text-white mb-10' >Board.</h3>
  
             <ul>
              <li><button className='flex gap-5 items-center mt-6 text-white opacity-70 focus:opacity-100 font-[100]'> <img src='/dashboard_icon.svg' alt='dasboard' className='dashboard' /> Dashboard</button></li>
              <li><button className='flex gap-5 items-center mt-6 text-white opacity-70 focus:opacity-100 font-[100]'> <img src='/transaction_icon.svg' alt='transaction' className='transaction' /> Transaction</button></li>
              <li><button className='flex gap-5 items-center mt-6 text-white opacity-70 focus:opacity-100 font-[100]'> <img src='/schedule_icon.svg' alt='schedule' className='schedule' /> Schedules</button></li>
              <li><button className='flex gap-5 items-center mt-6 text-white opacity-70 focus:opacity-100 font-[100]'> <img src='/user_icon.svg' alt='user' className='user' /> Users</button></li>
              <li><button className='flex gap-5 items-center mt-6 text-white opacity-70 focus:opacity-100 font-[100]'> <img src='/setting_icon.svg' alt='setting' className='setting' /> Settings</button></li>
  
             </ul>
  
            </div>
  
            <div className='leftnav__p2'>
              <button>Help</button>
              <button>Contact Us</button>
  
            </div>
  
          </div>
  
          <div className='maindash'>
            <div className='maindash1'>
              <div className={` ml-3 sm:hidden  mb__menu relative`}>
                <img  onClick={() => setMbmenu(!mbmenu)}
                         src='/mbmenu.svg' alt='menu' className='w-5 h-5 object-contain' />
                  <div className={`mmobilemenu absolute w ${!mbmenu && 'hidden'} `}>
                    <ul className='bg-[#4285F4] py-6 px-8 pr-10 rounded-xl'>
                        
                        <li><button className='flex gap-5 items-center mt-6 text-white opacity-70 focus:opacity-100 font-[100]'> <img src='/searchcopy.svg' alt='transaction'         className='search w-5 h-5 text-white' /> Search </button></li>
                        
                        <li><button className='flex gap-5 items-center mt-6 text-white opacity-70 focus:opacity-100 font-[100]'> <img src='/dashboard_icon.svg' alt='transaction' className='dashboardmb' /> Dashboard</button></li>

                        <li><button className='flex gap-5 items-center mt-6 text-white opacity-70 focus:opacity-100 font-[100]'> <img src='/transaction_icon.svg' alt='transaction' className='transaction' /> Transaction</button></li>
                        <li><button className='flex gap-5 items-center mt-6 text-white opacity-70 focus:opacity-100 font-[100]'> <img src='/schedule_icon.svg' alt='schedule' className='schedule' /> Schedules</button></li>
                        <li><button className='flex gap-5 items-center mt-6 text-white opacity-70 focus:opacity-100 font-[100]'> <img src='/user_icon.svg' alt='user' className='user' /> Users</button></li>
                        <li><button className='flex gap-5 items-center mt-6 text-white opacity-70 focus:opacity-100 font-[100]'> <img src='/setting_icon.svg' alt='setting' className='setting' /> Settings</button></li>

                        <li>   <div className=' mt-5 text-xs flex justify-between items-center '>
                              <button>Help</button>
                              <button>Contact Us</button>
                              </div>
                        </li>



            
                  </ul>

               

                  </div>

              </div>


              <h3 className=' text-3xl sm:text-[33px] font-[700] '>Dasboard </h3>
  
              <div className='maindash1__right'>
                 <div className='maindash1__search relative'>
                 <input type='text ' className='  hidden sm:block search focus:outline-none' placeholder='Search...' />
                 <img  src='/search.svg' alt='search' className=' absolute top-[30%] right-7' />
  
                 </div>
                 <img src='/bell.svg' alt='bell' />
  
                  
      
  
                 <img src={`${status === "authenticated" ? session.user?.image : '/user_icon.svg'}`} alt='user' className={`${status === "authenticated" ?  'bg-red-800' : 'bg-black' } ml-4  rounded-full object-contain h-6 cursor-pointer  `} onClick={() => setSignlo(!signlo)} />
  
                 <div className={` ${signlo ? '': 'hidden' } fixed top-[60px] right-[40px] bg-white flex flex-col p-6 rounded-2xl  gap-3` }>
                  <button onClick={()=>signOut({callbackUrl: '/'})}>Sign Out</button>
  
                 </div>
  
                
  
              </div>
  
            </div>
  
            <div className='maindash2'>
                <div className='ana1'>
                  <div className='w-8 h-8 rounded-full bg-lightGr flex items-center  ' >
                    <img src='/revenues.svg' alt='revnues' className='mx-auto' />
                  </div>
                  <p  className='text-[11px] font-[400] my-2'>Total Revenues</p>
                  <div className='flex justify-between items-center '>
                  <p className=' font-[700] text-[15px] sm:text-[21px]'>$2,129,430</p>
                  <p className=' p-2 sm:p-[10px] text-center text-[8px] sm:text-[10px]  font-[600] leading-[0.5px] rand1 bg-green-100 rounded-xl inline sm:block'>+2.5%</p>
                  </div>
  
                </div>
  
  
                <div className='ana1'>
                  <div className='w-8 h-8 rounded-full bg-lightYe flex items-center ' >
                    <img src='/trans.svg' alt='trans' className='mx-auto'  />
                  </div>
                  <p  className='text-[11px] font-[400] my-2'>Total Transactions</p>
                  <div className='flex justify-between items-center '>
                  <p className=' font-[700] text-[15px] sm:text-[21px]'>1,520</p>
                  <p className=' p-2 sm:p-[10px] text-center text-[8px] sm:text-[10px]  font-[600] leading-[0.5px] rand1 bg-green-100 rounded-xl inline sm:block'>+2.5%</p>
                  </div>
  
                </div>
  
                <div className='ana1'>
                  <div className='w-8 h-8 rounded-full bg-lightPi flex items-center ' >
                    <img src='/likes.svg' alt='likes' className='mx-auto'  />
                  </div>
                  <p  className='text-[11px] font-[400] my-2'>Total Revenues</p>
                  <div className='flex justify-between items-center '>
                  <p className=' font-[700] text-[15px] sm:text-[21px]'>9,841</p>
                  <p className=' p-2 sm:p-[10px] text-center text-[8px] sm:text-[10px]  font-[600] leading-[0.5px] rand1 bg-green-100 rounded-xl inline sm:block'>+2.5%</p>
                  </div>
  
                </div>
  
  
                <div className='ana1'>
                  <div className='w-8 h-8 rounded-full bg-lightBl flex items-center ' >
                    <img src='/user2.svg' alt='user2'  className='mx-auto'/>
                  </div>
                  <p className='text-[11px] font-[400] my-2'>Total Users</p>
                  <div className='flex justify-between items-center '>
                  <p className=' font-[700] text-[15px] sm:text-[21px]'>9,721</p>
                  <p className=' p-2 sm:p-[10px] text-center text-[8px] sm:text-[10px]  font-[600] leading-[0.5px] rand1 bg-green-100 rounded-xl inline sm:block'>+2.5%</p>
                  </div>
  
                </div>
            </div>
  
            <div className='maindash3'>
              <h3 className='text-[18px] font-[700] activites'>Activites</h3>
              <div className='flex justify-between belowactivites'>
                <p className='text-xs sm:text-[14px] text-gray mt-[-1px]'>May - June 2021</p>
                <div className='flex items-center justify-center gap-9'>

                  <div className=' flex items-center gap-2 '>
                    <div className=' w-[9px] h-[9px] bg-lightPi rounded-full' > &nbsp;</div>
                    <p className='text-xs sm:text-[14px]'>Guest</p>
                  </div>

                  <div className='flex items-center gap-2 '>
                    <div className=' w-[9px] h-[9px] bg-lightGr rounded-full' > &nbsp;</div>
                    <p className='text-xs sm:text-[14px]'>User</p>
                  </div>

                </div>
              </div>
  
              <div className='bargraph w-full p-[20px] compachart'>
  
              <Compchart mobile={isMobile} />
  
              </div>
  
            </div>
  
            <div className='maindash4'>
              <div className='maindash4__pt1 relative'>
              <h3 className='text-lg font-bold '>Top Products</h3>
              <p className='absolute top-[31px] right-[56px] text-xs text-gray'> May - June 2021</p>
              <div className='flex donutpie'>
              <div className='piechart flex-1 flex items-center justify-center mt-3'>
                <Donutpie />
                &nbsp;
              </div>
  
  
              <div className=' flex-1   mt-2'>
              
              <div className='flex  gap-2 mb-4  '>
                    <div className=' w-[9px] h-[9px] mt-1 bg-lightGr rounded-full' > &nbsp;</div>
                    <div className='text-[14px]'><p className='text-xs font-bold '>Basic Tees</p> <p className='text-xs text-gray'>55%</p></div>
                  </div>
  
                  <div className='flex  gap-2 mb-4 '>
                    <div className=' w-[9px] h-[9px] mt-1 bg-[#F6DC7D] rounded-full' > &nbsp;</div>
  
                    <div className='text-[14px]'><p className='text-xs font-bold '>Custom Short Pants</p> <p className='text-xs text-gray'>31%</p></div>
                  </div>
  
                  <div className='flex  gap-2  '>
                    <div className=' w-[9px] h-[9px] mt-1 bg-lightPi rounded-full' > &nbsp;</div>
                    <div className='text-[14px]'><p className='text-xs font-bold '>Super hoodies</p> <p className='text-xs text-gray'>14%</p></div>
                  </div>
  
                  
  
  
                </div>
  
  
              </div>
  
  
              </div>
  
  
              <div className='maindash4__pt2 flex flex-col items-center justify-center '>



                  {
                  isPopupOpen && <PopupForm closeModal={setIsPopupOpen} openModel2={setIsPopu} formdat={setFrom}   />
                
                }


                { isPopu && <Popup2 closeModal2={setIsPopu } formdat2={setFrom} data={from}  ffilled={setFormFilled} /> }

                

              { !formFilled && <> <button onClick={() => setIsPopupOpen(true)} className='bg-[#f5f5f5] rounded-full object-contain'><img src='/Controls.svg' alt='+' className='p-2'/>
                </button>
               <p className='font-thin tracking-wide  text-gray mt-4'>Add Profile</p> </>} 




               { formFilled && <div className='maindash4__details w-full h-full'>
               <h3 className='text-2xl text-black font-semibold pb-[30px]'>{from.name}</h3>


               <div className='maindash4__dgrid mt-7 '>

                <div className='flex gap-3 items-center '>
                <div className='rounded-full bg-green-100 p-1.5 inline-block  '>
                <img src='/whatsapp.svg'  alt='whatsapp'  className='h-[18px] w-[18px] object-cover '/>
                </div>

                <p className='underline text-sm '> {from.phone}</p>

                </div>

                <div className='flex gap-3 items-center '>
                <div className='rounded-full bg-pink-100 p-1.5 inline-block  '>
                <img src='/insta.svg'  alt='insta'  className='h-[18px] w-[18px] object-cover '/>
                </div>

                <p className='underline text-sm '> {from.insta}</p>

                </div>
                <div className='flex gap-3 items-center '>
                <div className='rounded-full min-w-min bg-purple-100 p-1.5 inline-block  '>
                <img src='/Mail.svg'  alt='mail'  className='h-[18px] w-[18px] object-cover '/>
                </div>

                <p className='underline text-sm '> {from.email}</p>

                </div>
                <div className='flex gap-3 items-center '>
                <div className='rounded-full bg-red-100 p-1.5 inline-block  '>
                <img src='/youtube.svg'  alt='whatsapp'  className='h-[18px] w-[18px] object-cover '/>
                </div>

                <p className='underline text-sm '> {from.youtu}</p>

                </div>

               </div>

               </div>

               }


  
  
              </div>
  
            </div>
          </div>
  
  
      </section>
    )
}

export default page
