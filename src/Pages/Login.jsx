import React from 'react'
import { Nav } from '../Component/Nav'
import logo from '../assets/image/logo/brand 2.png'

export const Login = () => {
  return (
    <>
    <section className='RejiBg'>
        <Nav />
        <div className="container position-relative d-flex justify-center align-items-center">
            <div className='bg-[#FFFFFF] nav modalView text-white position-absolute top-52 w-[90%] md:w-[40%] rounded-2xl shadow-md px-2 py-3'>
                <div className='d-flex align-items-center px-2'>
                    
                     <div> <img className='fluid' src={logo} alt="image" /></div>
                     <div className='ps-2'>
                        <h4 className='log m-0'>Van Lang <span className='text-black'>Tour</span></h4>
                        <span className='welcome'>Welcome to Van Lang Tour !</span>
                     </div>
                  
                </div>

                <form className='py-3 px-2 text-center'  action="">
                    <input className='logInpo my-3' type="email" placeholder='Email' />
                    <input className='logInpo my-3' type="password" placeholder='Password' />


                    <div className='cen mt-2'>
                        <button className='loginbt  p-0 shadow-md  transition duration-300 ease-in-out transform hover:bg-[#d3ab44] hover:shadow-lg hover:scale-105'>Login</button>
                     </div>
                </form>

                
     
            </div>
        </div>
    </section>
    </>
  )
}
