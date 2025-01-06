import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Main } from './Pages/Main';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { RootLayout } from './RootLayout';
import { Rejistration } from './Pages/Rejistration';
import { Login } from './Pages/Login';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    
    <Route>
           <Route element={<RootLayout/>}>
           <Route path="/" element={<Main />} />
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
