import React, { useState } from 'react'
import {IoIosSearch} from "react-icons/io";
import {CiMenuFries} from "react-icons/ci";
import logo from '../assets/image/logo/brand 2.png'
import { useLocation, useNavigate } from 'react-router';
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { loggedInUser } from '../Fueature/Slice/LoginSlice';
import { SyncLoader } from 'react-spinners';

export const NavMain = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = getAuth();
    const [loader,setLoader] = useState()
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)


  const handleLoggedOutUser =()=>{
    signOut(auth).then(() => {
        setLoader(true)
        // console.log("signOut");
        setTimeout(()=>{
            navigate('/')
            dispatch(loggedInUser())
           localStorage.removeItem('user')
        },2500)
        
        
        
      }).catch((error) => {
        setLoader(false)
        console.log(error);
        
      });
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
                <button onClick={handleLoggedOutUser}
                    className="nextMain  bg-[#3B9DF8] text-white tracking-wide mt-2 transition duration-300 shadow-md ease-in-out transform hover:bg-[#337bbe] hover:shadow-lg hover:scale-105">
                        {
                            loader ? <SyncLoader size={5} color='white'/> : "LogOut"
                        } 
                </button>
                

                <CiMenuFries className="text-[1.8rem] mr-1 text-[#424242]c cursor-pointer lg:hidden flex"
                             onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}/>
            </div>

            <aside
                className={` ${mobileSidebarOpen ? "translate-y-0 opacity-100 z-20" : "translate-y-[200px] opacity-0 z-[-1]"} lg:hidden bg-white boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}>
                <div className="relative mb-5">
                    <input
                        className="py-1.5 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#3B9DF8]"
                        placeholder="Search..."/>
                    <IoIosSearch className="absolute top-[8px] left-3 text-gray-500 text-[1.3rem]"/>
                </div>
                <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
                    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">home</li>
                    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize">Features
                    </li>
                    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">Blogs</li>
                    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">Shop</li>
                </ul>
            </aside>
        </nav>
    </div>
  </section>



    </>
  )
} 

