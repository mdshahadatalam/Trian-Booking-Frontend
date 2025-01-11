import React, { useState } from 'react'
import { NavMain } from '../Component/NavMain'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { PulseLoader } from 'react-spinners'

export const BookingFrom = () => {

const [fullName,setFullName] = useState("")
const [email,setEmail] = useState("")
const [phone,setPhone] = useState("")
const [address,setAddress] = useState("")

const [loader,setLoader] = useState(false)

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
// console.log(fullName,email,phone,address)
setLoader(true)

axios.post('http://localhost:3000/emailSend',{fullName,email,phone,address}).then(res=>{
    console.log(res.data)
    setLoader(false)
    setFullName('')
    setEmail('')
    setPhone('')
    setAddress('')
    toast.success('Thank you for apply', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
        });
}).catch(err=>{
    console.log(err)
    setLoader(false)
    toast.error('Please try again', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
        });
})

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
                            value={fullName}
                            required
                             />

                            <input 
                            className='bkFrom mx-3 my-4 font-serif tracking-wider' 
                            type="email"
                             placeholder='Email' 
                             id='email'
                             name='email'
                             onChange={handleEmail}
                             value={email}
                             required
                             /> <br />

                             <input
                              className='bkFrom mx-3 my-4 font-serif tracking-wider'
                              type="number"
                               placeholder='Phone' 
                               id='phone'
                               name='phone'
                               onChange={handlePhone}
                               value={phone}
                               required
                               />

                             <input 
                             className='bkFrom mx-3 my-4 font-serif tracking-wider' 
                             type="text"
                              placeholder='Address' 
                              id='address'
                              name='address'
                              onChange={handleAddress}
                              value={address}
                              required
                              />

                            <div className='mt-5'>
                                <button onClick={handleSubmit} className='w-[120px] h-[50px] bg-[#deb449] font-bold font-serif text-white tracking-wider rounded-md shadow-md '>
                                    {
                                        loader?<PulseLoader size={5} color='white' />: "Apply"
                                    }
                                    
                                    </button>
                            </div>
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
     </section>
     <ToastContainer />
   </>
  )
}
