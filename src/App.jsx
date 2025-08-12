import './App.css'

import ErrorComp from './AppLayout/ErrorComp';
import Layout from './AppLayout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import HospitalsPartners from './pages/HospitalsPartners';


export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      errorElement: <ErrorComp/>,
      children: [
        {
          path: '/',
          element: <Home /> 
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/partners',
          element: <HospitalsPartners />
        },
        {
          path: '/board',
          // element: <AluminumProfile />
        },
        {
          path: '/news',
          // element: <Projects />,
          // loader: getApi
        },
        // {
        //   path: '/contact',
        //   element: <Contact />,
        //   // action: contactFormData 
        // }
      ]
    },

  ]);
  return (<RouterProvider 
    router={router} future={{v7_startTransition: true, }} 
  />

) 
}