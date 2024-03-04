import React from 'react'
import HomeHero from '../../Components/Hero/HomeHero'
import Cat from '../../Components/CAT/Cat'
import NewsLetter from '../../Components/News/NewsLetter'
import Faq from '../../Components/FAQ/Faq'
import Faq2 from '../../Components/FAQ/Faq2'
import Faq3 from '../../Components/FAQ/Faq3'
import Footer from '../../Components/Footer/Footer'
import State from '../../Components/State/State'
import Event from '../../Components/Event/Event'
import NewsDisplay from '../../Components/News/NewsDisplay'
import CatTwo from '../../Components/CAT/CatTwo'
import Feature from '../../Components/Feature/Feature'
import BuildEmpower from '../../Components/BuildSection/BuildEmpower'


function Home() {
  return (
    <div>
      <HomeHero />
      <State/>
      {/* <NewsDisplay/> */}
      {/* <NewsLetter /> */}
      <BuildEmpower/>
      <Event/>
      <Faq />
      {/* <Faq3 /> */}
    </div>
  )
}

export default Home
