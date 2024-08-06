import React from 'react'
import Navbar from '../components/Navbar'
import Bodice from '../components/Bodice'
import HomeHero from '../components/HomeHero'

const Home = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <Bodice>
            <HomeHero/>
        </Bodice>
    </React.Fragment>
  )
}

export default Home