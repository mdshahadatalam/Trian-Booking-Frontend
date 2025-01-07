import * as Yup from 'yup'

export const signUp = Yup.object({
    firstName:Yup.string().min(5).max(15).required("Please enter your first name"),
     lastName:Yup.string().min(5).max(10).required("Please enter your last name"),
     phone:Yup.string().min(11).max(20).required("Enter your phone number"),
     email:Yup.string().required("Please enter your email"),
     password:Yup.string().min(8).matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,'Enter one special character')
}).required('Fill up all the fields' )

export const signIn = Yup.object({
     email:Yup.string().required("Please enter your email"),
     password:Yup.string()
}).required('Fill up all the fields' )