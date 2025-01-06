import React from 'react'
import { Nav } from '../Component/Nav'
import { Formik, useFormik } from 'formik'
import values from './../../node_modules/lodash-es/values';

export const Rejistration = () => {


  const initialValues ={
     firstName:"",
     lastName:"",
     phone:"",
     email:"",
     password:""
  }

  const Formik = useFormik({
    initialValues,
    onSubmit:(values,{resetForm})=>{
      createdNewUser()
      resetForm({values:''})
    }
  })

  const createdNewUser = () => {
    console.log(Formik.values)
  }
  return (
    <>
    <section className='RejiBg'>
    <Nav />
    <div className="container position-relative d-flex justify-center align-items-center">
        <div className='bg-[#FFFFFF] nav modalView text-white position-absolute top-52 w-[90%] md:w-[50%] rounded-2xl shadow-md px-2 py-5'>
            <div className='text-center'>
                <h4 className='ready text-xl md:text-2xl lg:text-3xl'>Ready to join Van Lang Tour? Let’s get started</h4>
                <p className='weNeed text-sm md:text-base lg:text-lg mt-2'>We need a few details about you to create your account profile</p>

                <form onSubmit={Formik.handleSubmit} action="">
                    <div className='flex flex-col md:flex-row justify-center'>
                        <input
                         className='inpoRe my-3 mx-2 w-full md:w-[48%] p-2 rounded-lg border border-gray-300' type="text"
                          placeholder='First name'
                          id='firstName'
                          name='firstName'
                          value={Formik.values.firstName}
                          onChange={Formik.handleChange}
                           />
                        <input 
                        className='inpoRe my-3 mx-2 w-full md:w-[48%] p-2 rounded-lg border border-gray-300' type="text"
                         placeholder='Last name'
                         id='lastName'
                         name='lastName'
                         value={Formik.values.lastName}
                         onChange={Formik.handleChange}
                          />
                    </div>
                    <div className='flex flex-col md:flex-row justify-center'>
                        <input
                         className='inpoRe my-3 mx-2 w-full md:w-[48%] p-2 rounded-lg border border-gray-300' type="tel"
                          placeholder='Phone number'
                          id='phone'
                          name='phone'
                          value={Formik.values.phone}
                          onChange={Formik.handleChange}
                           />
                        <input
                         className='inpoRe my-3 mx-2 w-full md:w-[48%] p-2 rounded-lg border border-gray-300' type="email"
                          placeholder='Email'
                          id='email'
                          name='email'
                          value={Formik.values.email}
                          onChange={Formik.handleChange}
                           />
                    </div>
                    <div className='flex '>
                        <input
                         className='inpoRe my-3 mx-2 w-full md:w-[48%] p-2 rounded-lg border border-gray-300' type="password"
                         id='password'
                         name='password'
                          placeholder='Password'
                          value={Formik.values.password}
                          onChange={Formik.handleChange}
                           />
                    </div>


                    <button type='submit' className='next  transition duration-300 ease-in-out transform hover:bg-[#d3ab44] hover:shadow-lg hover:scale-105'>Next</button>
                </form>
                
            </div>

            
        </div>
    </div>
</section>
    </>
  )
}
