import React from 'react'
import { Nav } from '../Component/Nav'
import { useFormik } from 'formik'
import { signUp } from '../Validation/Validation';
import { getAuth, createUserWithEmailAndPassword , sendEmailVerification } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';
import { SyncLoader } from 'react-spinners';
import { Link, useNavigate } from 'react-router';

export const Rejistration = () => {
  const navigate = useNavigate()
  const [loader,setLoader] = useState(false)
  const auth = getAuth();
  const initialValues ={
     firstName:"",
     lastName:"",
     phone:"",
     email:"",
     password:""
  }

  const formik = useFormik({
    initialValues,
    onSubmit:(values,{resetForm})=>{
      createdNewUser()
      resetForm({values:''})
    },
    validationSchema:signUp
    
  })

  const createdNewUser = ()=>{
    setLoader(true)
    // console.log(Formik.values)
    createUserWithEmailAndPassword(auth, formik.values.email, formik.values.password)
  .then((res) => {
    setLoader(false)
    // console.log("sign up");
    sendEmailVerification(auth.currentUser)
    toast.success('Email verification send', {
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

      setTimeout(()=>{
        navigate('/login')
      },2500)
    
  })
  .catch((error) => {
    console.log(error);
    setLoader(false)

    if(error.message.includes('auth/email-already-in-use')){
      toast.error('Something wrong', {
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
    }
    
    
  });
  }
  return (
    <>
    <section className='RejiBg'>
    <Nav />
    <div className="container position-relative d-flex justify-center align-items-center">
        <div className='bg-[#FFFFFF] nav modalView text-white position-absolute top-52 w-[90%] md:w-[50%] rounded-2xl shadow-md px-2 py-5'>
            <div className='text-center'>
                <h4 className='ready text-xl md:text-2xl lg:text-3xl'>Ready to join Van Lang Tour? Let’s get started</h4>
                <p className='weNeed text-sm md:text-base lg:text-lg my-2'>We need a few details about you to create your account profile</p>

                <form onSubmit={formik.handleSubmit} action="">
                    
                        <input
                         className='logInpo my-3' type="text"
                          placeholder='First name'
                          id='firstName'
                          name='firstName'
                          value={formik.values.firstName}
                          onChange={formik.handleChange}
                           />
                            {
                              formik.errors.firstName && formik.touched.firstName && <div className="text-red-500"> {formik.errors.firstName} </div>
                            }
                        <input 
                        className='logInpo my-3' type="text"
                         placeholder='Last name'
                         id='lastName'
                         name='lastName'
                         value={formik.values.lastName}
                         onChange={formik.handleChange}
                          />
                          {
                            formik.errors.lastName && formik.touched.lastName && <div className="text-red-500"> {formik.errors.lastName} </div>
                          }
                    
                    
                        <input
                         className='logInpo my-3 ' type="tel"
                          placeholder='Phone number'
                          id='phone'
                          name='phone'
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                           />
                           {
                            formik.errors.phone && formik.touched.phone && <div className="text-red-500">
                              {formik.errors.phone}
                            </div>
                           }
                        <input
                         className='logInpo my-3' type="email"
                          placeholder='Email'
                          id='email'
                          name='email'
                          value={formik.values.email}
                          onChange={formik.handleChange}
                           />
                           {
                            formik.errors.email && formik.touched.email && <div className="text-red-500">
                              {formik.errors.email} </div>
                           }
                    
                    
                        <input
                         className='logInpo my-3' type="password"
                         id='password'
                         name='password'
                          placeholder='Password'
                          value={formik.values.password}
                          onChange={formik.handleChange}
                           />
                           {
                            formik.errors.password && formik.touched.password && <div className="text-red-500">
                              {formik.errors.password}
                            </div>
                           }
                  


                    <div>
                    <button type='submit' className='next mt-2 transition duration-300 ease-in-out transform hover:bg-[#d3ab44] hover:shadow-lg hover:scale-105'>
                      {
                        loader? <SyncLoader size={5} color='white'  /> : " Sign up"
                      }
                      </button>
                    </div>
                </form>

                <p className='text-slate-700 font-serif tracking-wide pt-3'> Have a account? <Link className='text-slate-700 no-underline hover:text-blue-500 hover:underline' to={'/login'}>Sign In</Link> </p>
                
            </div>

            
        </div>
    </div>
</section>
<ToastContainer />
    </>
  )
}
