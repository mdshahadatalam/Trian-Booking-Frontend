import React from 'react'
import { NavMain } from '../Component/NavMain'
import { BookinSearch } from '../Component/BookinSearch'
import { FaTrainSubway } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

export const Booking = () => {
  return (
     <>
        <section className='bookingSec'>
             <NavMain/>
             <BookinSearch/>
            <div className="container BookingRes">
                <div className="row py-5">
                    
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 bg-[#ffff] rounded-md shadow-md bookingOper   transition duration-300 ease-in-out transform  hover:shadow-lg hover:scale-105">

                         <div className="row justify-center  align-items-center py-5 px-1">
                               <div className="col-lg-2">
                                    <div className='text-center'>
                                         <h3 className='time m-0'>12:00</h3>
                                         <h4 className='timeHead m-0'>Sai Gon</h4>
                                    </div>
                               </div>
                               <div className="col-lg-1 d-flex justify-center">
                                   <span className='text-xl text-black'><FaTrainSubway /></span>
                               </div>
                               <div className="col-lg-2">
                               <div className='text-center'>
                                         <h3 className='time m-0'>12:00</h3>
                                         <h4 className='timeHead m-0'>Ha Noi</h4>
                                    </div>
                               </div>
                               <div className="col-lg-4">
                                    
                                    <p className='m-0 first'>first class - 24hrs00mins travel</p>
                                    <span className='details'>Details</span>
                                    
                               </div>

                               <div className="col-lg-1 d-flex justify-end h-full ">
                                  <span className='text-white cursor-pointer bg-black text-xl w-[40px] h-[40px] rounded-full justify-center align-items-center d-flex '><IoIosArrowForward /></span>
                               </div>
                         </div>

                           <p className='text-end'> <span className='text-lg font-bold text-black'>price:</span> <span className='text-xl  font-bold text-[#DCA400]'> 1,000,000</span> <span className='text-xl  font-bold text-black' > VND</span> </p>
                    </div>
                    <div className="col-lg-2"></div>
                    
                </div>


                <div className="row py-5">
                    
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 bg-[#ffff] rounded-md shadow-md bookingOper   transition duration-300 ease-in-out transform  hover:shadow-lg hover:scale-105">

                         <div className="row justify-center  align-items-center py-5 px-1">
                               <div className="col-lg-2">
                                    <div className='text-center'>
                                         <h3 className='time m-0'>12:00</h3>
                                         <h4 className='timeHead m-0'>Sai Gon</h4>
                                    </div>
                               </div>
                               <div className="col-lg-1 d-flex justify-center">
                                   <span className='text-xl text-black'><FaTrainSubway /></span>
                               </div>
                               <div className="col-lg-2">
                               <div className='text-center'>
                                         <h3 className='time m-0'>12:00</h3>
                                         <h4 className='timeHead m-0'>Ha Noi</h4>
                                    </div>
                               </div>
                               <div className="col-lg-4">
                                    
                                    <p className='m-0 first'>first class - 24hrs00mins travel</p>
                                    <span className='details'>Details</span>
                                    
                               </div>

                               <div className="col-lg-1 d-flex justify-end h-full ">
                                  <span className='text-white cursor-pointer bg-black text-xl w-[40px] h-[40px] rounded-full justify-center align-items-center d-flex '><IoIosArrowForward /></span>
                               </div>
                         </div>

                           <p className='text-end'> <span className='text-lg font-bold text-black'>price:</span> <span className='text-xl  font-bold text-[#DCA400]'> 1,000,000</span> <span className='text-xl  font-bold text-black' > VND</span> </p>
                    </div>
                    <div className="col-lg-2"></div>
                    
                </div>


                    
                <div className="row py-5">
                    
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 bg-[#ffff] rounded-md shadow-md bookingOper   transition duration-300 ease-in-out transform  hover:shadow-lg hover:scale-105">

                         <div className="row justify-center  align-items-center py-5 px-1">
                               <div className="col-lg-2">
                                    <div className='text-center'>
                                         <h3 className='time m-0'>12:00</h3>
                                         <h4 className='timeHead m-0'>Sai Gon</h4>
                                    </div>
                               </div>
                               <div className="col-lg-1 d-flex justify-center">
                                   <span className='text-xl text-black'><FaTrainSubway /></span>
                               </div>
                               <div className="col-lg-2">
                               <div className='text-center'>
                                         <h3 className='time m-0'>12:00</h3>
                                         <h4 className='timeHead m-0'>Ha Noi</h4>
                                    </div>
                               </div>
                               <div className="col-lg-4">
                                    
                                    <p className='m-0 first'>first class - 24hrs00mins travel</p>
                                    <span className='details'>Details</span>
                                    
                               </div>

                               <div className="col-lg-1 d-flex justify-end h-full ">
                                  <span className='text-white cursor-pointer bg-black text-xl w-[40px] h-[40px] rounded-full justify-center align-items-center d-flex '><IoIosArrowForward /></span>
                               </div>
                         </div>

                           <p className='text-end'> <span className='text-lg font-bold text-black'>price:</span> <span className='text-xl  font-bold text-[#DCA400]'> 1,000,000</span> <span className='text-xl  font-bold text-black' > VND</span> </p>
                    </div>
                    <div className="col-lg-2"></div>
                    
                </div>
            </div>

                  {/* small device  */}

                    <div className="container py-5  smallBooking d-lg-none">
                         <div className="row">
                              <div className="col-md-4">
                                  <div className='bg-white rounded-md shadow-md p-2 bookingOper mt-4    transition duration-300 ease-in-out transform  hover:shadow-lg hover:scale-105 '>
                                       <div className='d-flex justify-center py-3'><span className='text-3xl '><FaTrainSubway /></span></div>
                                        <div className='text-center'><span className=' text-slate-600 font-serif'>12:00 - 12:00</span> </div>
                                           <div className='text-center'><span className=' text-slate-600 font-serif py-2 font-bold tracking-wide'>Sai Gon - Ha Noi</span> </div>  
                                        

                                        <p className='text-slate-700 font-mono text-sm py-2 text-center'>first class - 24hrs00mins travel</p>
                                  </div>
                              </div>
                              <div className="col-md-4">
                              <div className='bg-white rounded-md shadow-md p-2 bookingOper mt-4    transition duration-300 ease-in-out transform  hover:shadow-lg hover:scale-105 '>
                                       <div className='d-flex justify-center py-3'><span className='text-3xl '><FaTrainSubway /></span></div>
                                        <div className='text-center'><span className=' text-slate-600 font-serif'>12:00 - 12:00</span> </div>
                                           <div className='text-center'><span className=' text-slate-600 font-serif py-2 font-bold tracking-wide'>Sai Gon - Ha Noi</span> </div>  
                                        

                                        <p className='text-slate-700 font-mono text-sm py-2 text-center'>first class - 24hrs00mins travel</p>
                                  </div>
                              </div>
                              <div className="col-md-4">
                              <div className='bg-white rounded-md shadow-md p-2 bookingOper  mt-4   transition duration-300 ease-in-out transform  hover:shadow-lg hover:scale-105 '>
                                       <div className='d-flex justify-center py-3'><span className='text-3xl '><FaTrainSubway /></span></div>
                                        <div className='text-center'><span className=' text-slate-600 font-serif'>12:00 - 12:00</span> </div>
                                           <div className='text-center'><span className=' text-slate-600 font-serif py-2 font-bold tracking-wide'>Sai Gon - Ha Noi</span> </div>  
                                        

                                        <p className='text-slate-700 font-mono text-sm py-2 text-center'>first class - 24hrs00mins travel</p>
                                  </div>
                              </div>
                         </div>
                    </div>
        </section>
     </>
  )
}
