import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import firebaseConfig from './../DB/Firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { loggedInUser } from '../Fueature/Slice/LoginSlice';

export const Google = () => {
    const auth = getAuth();
    auth.languageCode = 'it';
    const provider = new GoogleAuthProvider();
    const dispatch = useDispatch()
    const navigate = useNavigate()
  initializeApp(firebaseConfig)

    const handleLoginGoogle =(e)=>{
        e.preventDefault()
        signInWithPopup(auth, provider)
  .then((result) => {
   console.log(result);
       dispatch(loggedInUser(result?.user))
         localStorage.setItem("user",JSON.stringify(result?.user))
         navigate('/')
   
  }).catch((error) => {
   console.log(error);
   
  });
    }
  return (
    <div className="flex flex-col items-center text-black py-4">
      <h2 className="font-serif text-lg mb-4 text-gray-600">Or</h2>
      <button 
        onClick={handleLoginGoogle}
        className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300">
        <span className="mr-3 text-lg">
          <FaGoogle />
        </span>
        Login with Google
      </button>
    </div>
  );
};

export default Google;