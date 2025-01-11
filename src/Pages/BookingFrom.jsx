import React, { useState } from 'react'
import { NavMain } from '../Component/NavMain'


export const BookingFrom = () => {

const [fullName,setFullName] = useState("")
const [email,setEmail] = useState("")
const [phone,setPhone] = useState("")
const [address,setAddress] = useState("")

const handleFullName = (e) => {
    setFullName(e.target.value)
} 

const handleEmail =(e)=>{
    setEmail(e.target.value)
}

const handlePhone =(e)=>{
    setPhone(e.target.value)
}

const handleAddress =(e)=>{
    setAddress(e.target.value)
}

const handleSubmit =()=>{
console.log(fullName,email,phone,address)
}
  return (
   <>
     <section className='BookingForm h-[800px] ' >
         <NavMain />
        <div className="container">
        <h4 className='text-center text-3xl font-serif font-bold text-[#CFB165] tracking-wider pt-5'> Apply for Booking</h4>
            <div className="row pt-20">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <div className=' FromSecBk  py-5 text-center  bg-white rounded-md opacity-[70%] '>

                           <input
                            className='bkFrom mx-3 my-4 font-serif tracking-wider text-black' 
                            type="text" 
                            placeholder='Full name'
                            id='full name'
                            name='full name'
                            onChange={handleFullName}
                             />

                            <input 
                            className='bkFrom mx-3 my-4 font-serif tracking-wider' 
                            type="email"
                             placeholder='Email' 
                             id='email'
                             name='email'
                             onChange={handleEmail}
                             /> <br />

                             <input
                              className='bkFrom mx-3 my-4 font-serif tracking-wider'
                              type="number"
                               placeholder='Phone' 
                               id='phone'
                               name='phone'
                               onChange={handlePhone}
                               />

                             <input 
                             className='bkFrom mx-3 my-4 font-serif tracking-wider' 
                             type="text"
                              placeholder='Address' 
                              id='address'
                              name='address'
                              onChange={handleAddress}
                              />

                            <div className='mt-5'>
                                <button onClick={handleSubmit} className='w-[120px] h-[50px] bg-[#deb449] font-bold font-serif text-white tracking-wider rounded-md shadow-md '>Apply</button>
                            </div>
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
     </section>
    
   </>
  )
}
