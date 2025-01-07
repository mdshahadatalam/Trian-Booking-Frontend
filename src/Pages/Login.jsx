import React, { useState } from 'react'
import { Nav } from '../Component/Nav'
import logo from '../assets/image/logo/brand 2.png'
import { useFormik } from 'formik'
import { signIn } from '../Validation/Validation'
import { toast, ToastContainer } from 'react-toastify'
import { SyncLoader } from 'react-spinners'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router'

export const Login = () => {
  
  const navigate = useNavigate()
  const auth = getAuth();
  const [loader,setLoader] = useState(false)
  const initialValues ={
    email: '',
    password: ''
  }

  const formik = useFormik({
    initialValues,
    onSubmit:(values,{resetForm})=>{
      signInNewUser()
      resetForm({values:''})
    },
    validationSchema:signIn
  })
  const signInNewUser =()=>{
    setLoader(true)
    // console.log(formik.values)
    signInWithEmailAndPassword(auth, formik.values.email,formik.values.password)
  .then((user) => {
    console.log("Sign In");
    setLoader(false)
    if(user.user.emailVerified == true){
      navigate('/')
    }else{
       toast.error('Your email is not verified', {
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
    
  })
  .catch((error) => {
    console.log(error);
    setLoader(false)
    if(error.message.includes('auth/invalid-credential')){
      toast.error('Email or Password Incorrect', {
         position: "top-right",
         autoClose: 1000,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
         
         });
        }
    
  });
  }
  return (
    <>
    <section className='RejiBg'>
        <Nav />
        <div className="container position-relative d-flex justify-center align-items-center">
            <div className='bg-[#FFFFFF] nav modalView text-white position-absolute top-52 w-[90%] md:w-[40%] rounded-2xl shadow-md px-2 py-3'>
                <div className='d-flex align-items-center px-2'>
                    
                     <div> <img className='fluid' src={logo} alt="image" /></div>
                     <div className='ps-2'>
                        <h4 className='log m-0'>Van Lang <span className='text-black'>Tour</span></h4>
                        <span className='welcome'>Welcome to Van Lang Tour !</span>
                     </div>
                  
                </div>

                <form onSubmit={formik.handleSubmit} className='py-3 px-2 text-center'  action="">
                    <input
                         className='logInpo my-3' 
                         type="email"
                         placeholder='Email'
                         id='email'
                          name='email'
                          value={formik.values.email}
                          onChange={formik.handleChange}
                       />
                    <input 
                     className='logInpo my-3'
                      type="password"
                       placeholder='Password' 
                       value={formik.values.password}
                       onChange={formik.handleChange}
                       id='password'
                        name='password'
                       />


                    <div className='cen mt-2'>
                        <button type='submit' className='loginbt  p-0 shadow-md  transition duration-300 ease-in-out transform hover:bg-[#d3ab44] hover:shadow-lg hover:scale-105'>
                          {
                            loader ? <SyncLoader size={5} color='white' />: "Login"
                          }
                          </button>
                     </div>
                </form>

                
     
            </div>
        </div>
    </section>
    <ToastContainer />
    </>
  )
}
