import React, { useState } from 'react'
import {IoIosSearch} from "react-icons/io";
import {CiMenuFries} from "react-icons/ci";
import logo from '../assets/image/logo/brand 2.png'
import { useLocation, useNavigate } from 'react-router';

export const Nav = () => {
    const navigate = useNavigate()
    const location = useLocation()
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const handleLogin =()=>{
    navigate('/login')
  }

  const handleSignUp =()=>{
    navigate('/rejistration')
  } 


  return (
    <>


  <section className=' bg-[#000000] nav py-3'>
    <div className="container">
        
    <nav
            className="flex items-center justify-between text-white font-bold w-full relative px-[10px] py-[8px]">
            <div className='d-flex align-items-center'>
            <img src={logo} alt="logo" className="w-[55px] "/>
            <p className='ps-2 tracking-wide text-lg '><span className='text-[#FFDA79]'>Van Lang</span> Tour</p>
            </div>
            <ul className="items-center text-white gap-[20px] text-[1rem]  lg:flex hidden">
                <li className=" text-lg tracking-wide px-2  before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">home</li>
                <li className=" text-lg tracking-wide px-2  before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">features</li>
                <li className=" text-lg tracking-wide px-2  before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">blogs</li>
                <li className=" text-lg tracking-wide px-2  before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">shop</li>
            </ul>

            <div className="items-center gap-[10px] flex">
                <button onClick={handleLogin}
                    className={`${location.pathname == '/login'? " SingInOutBtn py-[7px] text-lg tracking-wide text-[1rem] px-[16px] rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 sm:flex hidden":"py-[7px] text-lg tracking-wide text-[1rem] px-[16px] rounded-full capitalize hover:text-[#3B9DF8] transition-all duration-300 sm:flex hidden"}`}>Sign
                    in
                </button>
                <button 
                    onClick={handleSignUp}
                    className={`${location.pathname == '/rejistration'?" SingInOutBtn py-[7px] text-lg tracking-wide text-[1rem] px-[16px] rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 sm:flex hidden":"py-[7px] text-lg tracking-wide text-[1rem] px-[16px] rounded-full capitalize hover:text-[#3B9DF8] transition-all duration-300 sm:flex hidden"}`}>Sign
                    up
                </button>

                <CiMenuFries className="text-[1.8rem] mr-1 text-[#424242]c cursor-pointer lg:hidden flex"
                             onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}/>
            </div>

            <aside
                className={` ${mobileSidebarOpen ? "translate-y-0 opacity-100 z-20" : "translate-y-[200px] opacity-0 z-[-1]"} lg:hidden bg-black boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}>
                <div className="relative mb-5">
                    <input
                        className="py-1.5 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#3B9DF8]"
                        placeholder="Search..."/>
                    <IoIosSearch className="absolute top-[8px] left-3 text-gray-500 text-[1.3rem]"/>
                </div>
                {/* <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
                    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">home</li>
                    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize">Features
                    </li>
                    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">Blogs</li>
                    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">Shop</li>
                </ul> */}

                  <button onClick={handleSignUp} className='bg-white font-serif text-black w-[160px] h-[40px] rounded-md shadow-md'>Sign In / Sign Up</button>
            </aside>
        </nav>
    </div>
  </section>



    </>
  )
} 
