import React from 'react'
import { Nav } from '../Component/Nav'

export const Rejistration = () => {
  return (
    <>
    <section className='RejiBg'>
    <Nav />
    <div className="container position-relative d-flex justify-center align-items-center">
        <div className='bg-[#FFFFFF] nav modalView text-white position-absolute top-52 w-[90%] md:w-[50%] rounded-2xl shadow-md px-2 py-5'>
            <div className='text-center'>
                <h4 className='ready text-xl md:text-2xl lg:text-3xl'>Ready to join Van Lang Tour? Let’s get started</h4>
                <p className='weNeed text-sm md:text-base lg:text-lg mt-2'>We need a few details about you to create your account profile</p>

                <form action="">
                    <div className='flex flex-col md:flex-row justify-center'>
                        <input className='inpoRe my-3 mx-2 w-full md:w-[48%] p-2 rounded-lg border border-gray-300' type="text" placeholder='First name' />
                        <input className='inpoRe my-3 mx-2 w-full md:w-[48%] p-2 rounded-lg border border-gray-300' type="text" placeholder='Last name' />
                    </div>
                    <div className='flex flex-col md:flex-row justify-center'>
                        <input className='inpoRe my-3 mx-2 w-full md:w-[48%] p-2 rounded-lg border border-gray-300' type="tel" placeholder='Phone number' />
                        <input className='inpoRe my-3 mx-2 w-full md:w-[48%] p-2 rounded-lg border border-gray-300' type="email" placeholder='Email' />
                    </div>
                    <div className='flex '>
                        <input className='inpoRe my-3 mx-2 w-full md:w-[48%] p-2 rounded-lg border border-gray-300' type="password" placeholder='Password' />
                    </div>
                </form>
                <button className='next  transition duration-300 ease-in-out transform hover:bg-[#d3ab44] hover:shadow-lg hover:scale-105'>Next</button>
            </div>

            
        </div>
    </div>
</section>
    </>
  )
}
