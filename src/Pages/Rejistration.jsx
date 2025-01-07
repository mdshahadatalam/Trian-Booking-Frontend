import React from 'react'
import { Nav } from '../Component/Nav'
import { useFormik } from 'formik'
import { signUp } from '../Validation/Validation';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const Rejistration = () => {

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
    // console.log(Formik.values)
    createUserWithEmailAndPassword(auth, formik.values.email, formik.values.password)
  .then((res) => {
    console.log("sign up");
    
  })
  .catch((error) => {
    console.log(error);
    
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
                            formik.errors.phone && Formik.touched.phone && <div className="text-red-500">
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
                    <button type='submit' className='next mt-2 transition duration-300 ease-in-out transform hover:bg-[#d3ab44] hover:shadow-lg hover:scale-105'>Next</button>
                    </div>
                </form>
                
            </div>

            
        </div>
    </div>
</section>
    </>
  )
}
