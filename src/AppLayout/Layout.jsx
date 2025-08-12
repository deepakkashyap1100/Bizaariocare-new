import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import MyNavbar from './MyNavbar';
import Footer from './Footer';
// import Header from './Header'
// import Footer from './Footer';

const Layout = () => {
    const loadingNavigation= useNavigation();
    if(loadingNavigation.state=== 'loading'){
      return(<Loading/>)
    }

  return (
    <>
      <MyNavbar /> 
  
    <Outlet/>    
    <Footer/>
</>
  )
}

export default Layout