import React from 'react'
// import Hero from '../components/Hero'
// import New from '../components/NewsAndArticles'
import InterCollabs from '../components/InterCollabs'
import LiveSessions from '../components/LiveSessions'
import NewsAndArticles from '../components/NewsAndArticles'
import Awards from '../components/Awards'
import Testimonial from '../components/Testimonial'
import MedicalBoardPartnerHospitals from '../components/MedicalBoardPartnerHospitals'
import Empowering from '../components/Empowering'
import Hero2 from '../components/others/Hero2'


const Home = () => {
  return (
      <>
      {/* <Hero /> */}
      <Hero2/>
      <Empowering />
      <MedicalBoardPartnerHospitals/>
      <InterCollabs />
      <LiveSessions/> 
      <NewsAndArticles />
      <Awards />
      <Testimonial /> 
      </>
  )
}

export default Home