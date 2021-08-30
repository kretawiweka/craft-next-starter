import React from 'react'
import Typist from 'react-typist'

const Hero = (): JSX.Element => {
  return (
    <div className="hero">
      <div className="canvas"></div>
      <img src={`static/images/hero-banner.png`} alt="hero-banner" />
      <div className="hero-text">
        <Typist>
          <h1 className="beginning">The wedding of</h1>
          <h3 className="name"> Dita {'&'} Eka </h3>
          <h5 className="date">Saturday, February 16 2021</h5>
        </Typist>
      </div>
    </div>
  )
}

export default Hero
