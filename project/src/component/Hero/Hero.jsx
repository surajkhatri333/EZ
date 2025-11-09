import React from 'react'
import Navbar from './Navbar.jsx'
import MainHero from './MainHero.jsx'
import heroBackground  from "../../assets/HeroBg/BG.png"

function Hero() {
  return (
    <>
      <div className='w-full h-auto' style={{ backgroundImage: `url(${heroBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <Navbar />
        <MainHero />
      </div>
    </>
  )
}

export default Hero
