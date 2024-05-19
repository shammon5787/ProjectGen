import React from 'react'
import './Hero.css'
import puse from '../../assets/puse.png'
import play from '../../assets/play.png'
import arrow from '../../assets/arrow.png'

const Hero = ({heroCount, heroData, playStatus, setheroCount, setplayStatus}) => {
  return (
    <div className="hero">
        <div className="hero-text">
            <p> {heroData.text1} </p>
            <p> {heroData.text2} </p>
        </div>
        <div className="hero-explore">
            <p>See Explorer</p>
            <img src= {arrow} alt="" />
        </div>
        <div className="hero-dot-play">
            <ul className="hero-dots">
                <li onClick={()=>setheroCount(0)} className= {heroCount === 0 ? "hero-dot orange" : "hero-dot"} ></li>
                <li onClick={()=>setheroCount(1)} className= {heroCount === 1 ? "hero-dot orange" : "hero-dot"} ></li>
                <li onClick={()=>setheroCount(2)} className= {heroCount === 2 ? "hero-dot orange" : "hero-dot"} ></li>
            </ul>
            <div className="hero-play">
                <img onClick={()=>setplayStatus(!playStatus)} src={playStatus? puse : play} alt="" />
                <p>See video</p>
            </div>
        </div>
    </div>
  )
}

export default Hero