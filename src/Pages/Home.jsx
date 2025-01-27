import React, { useEffect } from 'react'
import { NavMain } from '../Component/NavMain'
import { HomeBanner } from '../Component/HomeBanner'
import { HomeSearch } from '../Component/HomeSearch'
import Aos from 'aos'
export const Home = () => {
  useEffect( ()=>{
          Aos.init();
        })
  return (
   <>
    <section className='HomeSec'>
    <NavMain/>
      <div className="container">
          <div className='pt-48 ps-32'>
          <h4 data-aos="zoom-in" data-aos-duration="2500" className='relax'>Relax with</h4>
         <h3 data-aos="zoom-in" data-aos-duration="2500" className='van pt-3'>Van Lang Tour</h3>
         <button data-aos="zoom-in" data-aos-duration="2500" className='ReadMore mt-3 rounded-lg transition duration-300 ease-in-out transform hover:bg-[#d3ab44] hover:shadow-lg hover:scale-105'>Read More !</button>
          </div>
      </div>
    </section>
     <HomeBanner/>
     <HomeSearch/>
   </>
  )
}
