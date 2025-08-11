import React from 'react'
import Hero from '../components/Hero'
import Empowering from '../components/Empowering'
import MedicalBoard from '../components/MedicalBoard'
import New from '../components/New'
import InterCollabs from '../components/InterCollabs'


const Home = () => {
  return (
      <>
          <Hero />
          <Empowering />
      <MedicalBoard />
      <InterCollabs/>
     <New/> 
      </>
  )
}

export default Home