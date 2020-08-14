import React from 'react'
import NowPlaying from './NowPlaying'
import Upcoming from './Upcoming'
import Popular from './Popular'

function Home() {
  return (
    <div>
      <h1 style={{color : 'white', paddingLeft: 25}}>Now Playing</h1>
      <p><NowPlaying /></p>
      <h1 style={{color : 'white', paddingLeft: 25}}>Upcoming</h1>
      <p><Upcoming /></p>
      <h1 style={{color : 'white', paddingLeft: 25}}>Popular</h1>
      <p><Popular /></p>
    </div>
  )
}

export default Home
