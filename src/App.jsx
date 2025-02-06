import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Main } from './Pages/Main';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { RootLayout } from './RootLayout';
import { Rejistration } from './Pages/Rejistration';
import { Login } from './Pages/Login';
import LoggedInUser from './PrivateRoute/LoggedInUser';
import LogOutInUser from './PrivateRoute/LogOutInUser';
import { Home } from './Pages/Home';
import { AboutUs } from './Pages/AboutUs';
import { Booking } from './Pages/Booking';
import { BookingFrom } from './Pages/BookingFrom';
import { Forget } from './Component/Forget';
import 'aos/dist/aos.css'
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    
    <Route>
           
        
           <Route element={<LoggedInUser/>}>
           <Route path="/booking" element={<Booking />} /> 
           <Route path="/bookingFrom" element={<BookingFrom />} />   
           </Route>

           <Route element={<RootLayout/>}>
           <Route path="/home" element={<Home />} />
           <Route path="/" element={<Main />} />
           <Route path="/about" element={<AboutUs />} />
           </Route>
           

           <Route element={<LogOutInUser/>}>
           </Route>

           <Route path="/rejistration" element={<Rejistration />} />
           <Route path="/login" element={<Login />} />
           <Route path="/forget" element={<Forget />} />
          


    </Route>

  ))
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
