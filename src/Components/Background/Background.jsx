import React from 'react'
import './Background.css'
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import video from '../../assets/video.mp4'


const Background = ({heroCount, playStatus}) => {
  if(playStatus){
    return (
        <video className='background' autoPlay loop muted>
            <source src= {video} type='video/mp4'/>
        </video>
    )
  }
  else if(heroCount === 0){
    return(
        <img className='background' src= {img1} alt="" />
    )
  }
  else if(heroCount === 1){
    return(
        <img className='background' src= {img2} alt="" />
    )
  }
  else if(heroCount === 2){
    return(
        <img className='background' src= {img3} alt="" />
    )
  }
}

export default Background