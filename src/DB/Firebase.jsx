// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnWULBP9x4MmlpUmIZ3XXK3HTHuATnhqg",
  authDomain: "train-booking-2a89e.firebaseapp.com",
  projectId: "train-booking-2a89e",
  storageBucket: "train-booking-2a89e.firebasestorage.app",
  messagingSenderId: "process.env.REACT_APP_USERID",
  appId: "process.env.REACT_APP_APPLIED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig