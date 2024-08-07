import React from 'react'
import HeroSection2 from './HeroSection2'
import Cards3 from './Cards3'
import Footer from './Footer'

function CustomizeTour() {
  return (
    <div>
      <HeroSection2 heading="Customize Tours"/>
      <div className='container d-flex justify-content-center'>
        <Cards3/>
      </div>
      <Footer/>
    </div>
  )
}

export default CustomizeTour
