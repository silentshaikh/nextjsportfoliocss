import React from 'react'
import HeroContent from '../HeroContent/HeroContent'
import HeroImage from '../HeroImage/HeroImage'
import '../../styles/hero.css'
function Hero() {
  return (
    <section className='hero'>
      <HeroContent/>
      <HeroImage/>
    </section>
  )
}

export default Hero
