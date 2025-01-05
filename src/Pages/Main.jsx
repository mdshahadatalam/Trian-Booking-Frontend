import React from 'react'
import { Nav } from '../Component/Nav';
export const Main = () => {
  return (
    <>
    <section className='mainBg'>
    <Nav />
    <div className="container mx-auto px-4 text-center">
        <div className='pt-20 md:pt-40 lg:pt-80'>
            <h4 className='welcome text-lg md:text-xl lg:text-2xl'>Welcome to</h4>
            <h3 className='tour text-2xl md:text-4xl lg:text-5xl font-bold'>
                <span className='text-[#ffd979]'>Van Lang</span> Tour
            </h3>
            <button className='view mt-4 px-6 py-2 bg-[#ffd979] text-white rounded-lg transition duration-300 ease-in-out transform hover:bg-[#d3ab44] hover:shadow-lg hover:scale-105'>
                View Page
            </button>
        </div>
    </div>
</section>
    </>
  )
}
