import React from 'react'
import { NavMain } from '../Component/NavMain'
export const BookingFrom = () => {
  return (
   <>
     <section className='BookingForm h-[800px] ' >
         <NavMain />
        <div className="container">
        <h4 className='text-center text-3xl font-serif font-bold text-[#CFB165] tracking-wider pt-5'> Apply for Booking</h4>
            <div className="row pt-20">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <form action="" className=' FromSecBk  py-5 text-center  bg-white rounded-md opacity-[50%] '>

                           <input className='bkFrom mx-3 my-4 font-serif tracking-wider' type="text" placeholder='Full name' />
                            <input className='bkFrom mx-3 my-4 font-serif tracking-wider' type="email" placeholder='Email' /> <br />
                             <input className='bkFrom mx-3 my-4 font-serif tracking-wider' type="number" placeholder='Phone' />
                             <input className='bkFrom mx-3 my-4 font-serif tracking-wider' type="text" placeholder='Address' />

                            <div className='mt-5'>
                                <button className='w-[120px] h-[50px] bg-[#deb449] font-bold font-serif text-white tracking-wider rounded-md shadow-md '>Apply</button>
                            </div>
                    </form>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
     </section>
    
   </>
  )
}
