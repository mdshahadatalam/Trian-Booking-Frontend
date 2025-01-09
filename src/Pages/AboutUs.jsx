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
                  Click Here
               </button>
           </div>
       </div>
   </section>

   <section className='bg-[#1E1E1E] py-5'>
    <div className="container">
        <div className="row align-items-center">
            {/* Image Column */}
            <div className="col-12 col-lg-6 order-lg-1 order-2">
                <img className='img-fluid w-100' src={image1} alt="image" />
            </div>

            {/* Text Column */}
            <div className="col-12 col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0 cursor-pointer">
                <h4 className='ourSto'>Our Story</h4>
                <p className='aboutDami text-white'>
                    At Van Lang Tour, we believe that every journey holds the promise of adventure, discovery, and unforgettable memories. Established with a passion for travel and a commitment to seamless experiences, we are your trusted partner in exploring the world through train travel.
                </p>
            </div>
        </div>


           <div className="row align-items-center mt-5">
            {/* Image Column */}
            <div className="col-12 col-lg-6 order-lg-1 order-2">
            <h4 className='ourSto'>Who We Are</h4>
                <p className='aboutDami text-white'>
                Van Lang Tour is a dedicated online platform designed to revolutionize the way you embark on train journeys. Whether you're a first-time traveler, a seasoned explorer, or planning a memorable trip with family and friends, we're here to make your travel dreams a reality.
                </p>
            </div>

            {/* Text Column */}
            <div className="col-12 col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0 cursor-pointer">
            
                <img className='img-fluid w-100' src={image2} alt="image" />
            </div>
        </div>
    </div>
</section>
    </>
  )
}
