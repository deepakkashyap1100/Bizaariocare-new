import React from 'react'
import Hero from '../components/Hero'
import Empowering from '../components/Empowering'
import MedicalBoard from '../components/MedicalBoard'
import New from '../components/NewsAndArticles'
import InterCollabs from '../components/InterCollabs'
import SwiperSlider1 from '../components/others/SwiperSlider1'
import LiveSessions from '../components/LiveSessions'
import NewsAndArticles from '../components/NewsAndArticles'


const Home = () => {
  return (
      <>
          <Hero />
    <Empowering />
    <MedicalBoard />
      <InterCollabs />
      <LiveSessions/>
     
      <NewsAndArticles />
       {/* <New /> */}
      {/* <SwiperSlider1/> */}
      </>
  )
}

export default Home