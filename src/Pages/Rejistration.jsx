import React from 'react'
import { Nav } from '../Component/Nav'

export const Rejistration = () => {
  return (
    <>
    <section className='RejiBg' >
             <Nav/>
        <div className="container position-relative d-flex justify-center align-items-center">
     
              <div className='bg-[#FFFFFF] nav text-white position-absolute top-52 w-[80%] h-56 rounded-2xl shadow-md px-5 py-3'>
       
               <div>
                  <h4 className='ready'>Ready to join Van Lang Tour? Let’s get started</h4>
                  <p className='weNeed'>We need a few details about you to create your account profile</p>
               </div>
               

            </div> 
        </div>
    </section>
    </>
  )
}
