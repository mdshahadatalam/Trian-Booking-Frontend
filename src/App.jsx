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

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    
    <Route>
           
        
           <Route element={<LoggedInUser/>}>
           <Route element={<RootLayout/>}>
           <Route path="/home" element={<Home />} />
           <Route path="/" element={<Main />} />
           <Route path="/about" element={<AboutUs />} />
           </Route>
           </Route>

           <Route element={<LogOutInUser/>}>
           <Route path="/rejistration" element={<Rejistration />} />
           <Route path="/login" element={<Login />} />
           </Route>


    </Route>

  ))
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
