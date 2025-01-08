import React from 'react'
import { NavMain } from '../Component/NavMain'

export const Home = () => {
  return (
   <>
    <section className='HomeSec'>
    <NavMain/>
      <div className="container">
          <div className='pt-48 ps-32'>
          <h4 className='relax'>Relax with</h4>
         <h3 className='van pt-3'>Van Lang Tour</h3>
         <button className='ReadMore mt-3 rounded-lg transition duration-300 ease-in-out transform hover:bg-[#d3ab44] hover:shadow-lg hover:scale-105'>Read More !</button>
          </div>
      </div>
    </section>
   </>
  )
}
