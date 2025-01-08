import React from 'react'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";

export const HomeBanner = () => {
  return (
    <>
    <section className='bg-[#EEE1BE] py-5'>
        <div className="container">
            <div className="row justify-center align-items-center">
                <div className="col-lg-5">
                <div className='box cursor-pointer mt-4 bg-[#CFB165] flex flex-col md:flex-row items-center rounded-md shadow-md p-4 hover:bg-[#B89A5A] transition-colors duration-300'>
                    <div className='mb-4 md:mb-0 md:mr-4'>
                        <span className='text-6xl md:text-9xl text-white'>
                            <HiOutlineDesktopComputer />
                        </span>
                    </div>
                    <div>
                        <p className='damiHome text-center md:text-left text-white p-2'>
                            It’s very easy to order a train ticket online, VLT E-ticket can not be lost or forgotten at home
                        </p>
                    </div>
                </div>
                </div>
                <div className="col-lg-5">
                <div className='box cursor-pointer mt-4 bg-[#CFB165] flex flex-col md:flex-row items-center rounded-md shadow-md p-4 hover:bg-[#B89A5A] transition-colors duration-300'>
                    <div className='mb-4 md:mb-0 md:mr-4'>
                        <span className='text-6xl md:text-9xl text-white'>
                           <TbWorld />
                        </span>
                    </div>
                    <div>
                        <p className='damiHome text-center md:text-left text-white p-2'>
                            To order ticket all you need is
                              Internet, a couple minutes
                              and a payment card.
                              Grab bonuses and discounts.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
