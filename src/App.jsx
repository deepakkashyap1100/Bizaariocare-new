import './App.css'

import ErrorComp from './AppLayout/ErrorComp';
import Layout from './AppLayout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';


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
        // {
        //   path: '/ourproduct',
        //   element: <OurProduct />
        // },
        // {
        //   path: '/aluminum',
        //   element: <AluminumProfile />
        // },
        {
          // path: '/project',
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