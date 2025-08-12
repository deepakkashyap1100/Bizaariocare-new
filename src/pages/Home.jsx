import React from 'react'
import Hero from '../components/Hero'
import Empowering from '../components/Empowering'
import MedicalBoard from '../components/MedicalBoard'
import New from '../components/New'
import InterCollabs from '../components/InterCollabs'
import SwiperSlider1 from '../components/others/SwiperSlider1'


const Home = () => {
  return (
      <>
          <Hero />
    <Empowering />
    <MedicalBoard />
    <InterCollabs />
      <New />
      {/* <SwiperSlider1/> */}
      </>
  )
}

export default Home