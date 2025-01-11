import React from 'react'
import { NavMain } from '../Component/NavMain';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
export const Main = () => {


    const navigate = useNavigate()
    const location = useLocation()
    {
        location.pathname='/'?`${toast.success('See you again 👋', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            // transition: Bounce,
            })}` : ""
    }
    // console.log(location);
    
    const handleHome =()=>{
        navigate('/home')
    }


  return (
    <>
    <section className='mainBg'>
    <NavMain />
    <div className="container mx-auto px-4 text-center">
        <div className='pt-20 md:pt-40 lg:pt-40 h-[900px]'>
            <h4 className='welcome text-lg md:text-xl lg:text-2xl'>Welcome to</h4>
            <h3 className='tour text-2xl md:text-4xl lg:text-5xl font-bold'>
                <span className='text-[#ffd979]'>Van Lang</span> Tour
            </h3>
            <button onClick={handleHome} className='view mt-4 px-6 py-2 bg-[#ffd979] text-black font-bold rounded-lg transition duration-300 ease-in-out transform hover:bg-[#d3ab44] hover:shadow-lg hover:scale-105'>
                View Page
            </button>
        </div>
    </div>
</section>
    </>
  )
}
