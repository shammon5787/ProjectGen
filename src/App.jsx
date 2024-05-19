import React, { useState } from 'react'
import Background from './Components/Background/Background'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'

const App = () => {

  let heroData = [
    {text1: 'ORIGINAL ONE', text2: 'This is well'},
    {text1: 'ORIGINAL TWO', text2: 'The only best'},
    {text1: 'ORIGINAL THREE', text2: 'Comfort for well'},
  ]

  const [heroCount, setheroCount] = useState(0)
  const [playStatus, setplayStatus] = useState(false)

  return (
    <div>
      <Background heroCount = {heroCount} playStatus = {playStatus} />
      <Navbar />
      <Hero 
      heroCount = {heroCount}
      heroData = {heroData[heroCount]}
      playStatus = {playStatus}
      setheroCount = {setheroCount}
      setplayStatus = {setplayStatus}
      />
    </div>
  )
}

export default App