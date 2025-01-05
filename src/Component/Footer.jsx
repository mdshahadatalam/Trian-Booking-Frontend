import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
    <section className='bg-[#000000] py-5'>
        <div className="container">
             <div>
                <h4 className='happy'>We are very happy </h4>
                <h4 className='happy'>that you choose us</h4>
                <p className='footerDami pt-2'>Thank you for trusting us for choosing trips, exploring, traveling with relatives  <br/>
                and friends or for your own experiences.</p>
             </div>
            <div className="row py-5">
                <div className="col-lg-3"></div>
                <div className="col-lg-3">
                    <div>
                    <h4 className='home'>home</h4>
                    <p className='linkUp m-0'>about us</p>
                    <p className='linkUp m-0'>booking</p>
                    </div>
                </div>
                <div className="col-lg-3 mt-3">
                <div>
                    <h4 className='home'>contact us</h4>
                    <p className='linkUp m-0'>0703169545</p>
                    <p className='linkUp m-0'>contact@vanlang.tour</p>
                    </div>
                </div>
                <div className="col-lg-3 mt-3">
                 <div>
                    <h4 className='home'>follow us</h4>
                     <div className='d-flex align-items-center'>
                         <span className='w-[25px] cursor-pointer h-[25px] text-black bg-white rounded-full d-flex justify-center align-items-center  transition duration-300 ease-in-out transform hover:bg-white hover:shadow-lg hover:scale-105'><FaFacebookF /></span>
                     <p className='linkUp m-0 ps-2'>facebook</p>
                     </div>

                     <div className='d-flex align-items-center mt-2'>
                         <span className='w-[25px] cursor-pointer h-[25px] text-black bg-white rounded-full d-flex justify-center align-items-center transition duration-300 ease-in-out transform hover:bg-white hover:shadow-lg hover:scale-105'><FaInstagram /></span>
                     <p className='linkUp m-0 ps-2'>Instagram</p>
                     </div>
                    </div>
                </div>
            </div>

            <hr className='text-white' />

            <div>
                <p className='vanLan'>© VanLangTour 2023</p>
            </div>
        </div>
    </section>
    </>
  )
}
