import React from 'react'
import Jumbotron from "../components/Jumbotron/index"
import Subtitle from "../components/Subtitle/index"
import Services from "../components/Services/index"
import Map from "../components/Map/index"
import Reviews from "../components/Reviews/index"


function Home() {
  return (
    <div>
      <Jumbotron />
      <Subtitle />
      <Map />
      <br />
      <br />
      <Services />
      <Reviews />
    </div>
  )
}

export default Home
