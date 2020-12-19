import React from 'react'
import API from '../utils/API';
import Jumbotron from "../components/Jumbotron/index"
import Subtitle from "../components/Subtitle/index"
import Services from "../components/Services/index"
import Map from "../components/Map/index"
import Reviews from "../components/Reviews/index"
import Footer from "../components/Footer/index"


function Home() {
  return (
    <div>
      <Jumbotron />
      <Subtitle />
      <Services />
      <Map />
      <Reviews />
      <Footer />
    </div>
  )
}

export default Home
