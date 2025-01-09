import React from 'react'
import { NavMain } from '../Component/NavMain'
import image1 from '../assets/image/about/image 1.png'
import image2 from '../assets/image/about/image 2.png'

export const AboutUs = () => {
  return (
    <>
    <section className='mainBg'>
       <NavMain />
       <div className="container mx-auto px-4 text-center">
           <div className='pt-20 md:pt-40 lg:pt-80'>
               <h3 className='tour text-2xl md:text-4xl lg:text-5xl font-bold'>
                   <span className='text-[#ffd979]'>Van Lang</span> Tour
               </h3>
                 <p className='aboutHead'>Your Gateway to Memorable Train Journeys</p>
               <button className='view  my-4 px-6 py-2 bg-[#ffd979] text-black font-bold rounded-lg transition duration-300 ease-in-out transform hover:bg-[#d3ab44] hover:shadow-lg hover:scale-105'>
                   View Page
               </button>
           </div>
       </div>
   </section>

     <section>
        <div className="container">
            <div className="row">
                    <div className="col-lg-6">
                         <img className='img-fluid' src={image1} alt="image" />
                    </div>
                    <div className="col-lg-6"></div>
            </div>
        </div>
     </section>
    </>
  )
}
