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


function Home() {
  return (
    <div>
      <HomeHero />
      <State/>
      <NewsLetter />
      <Cat />
      <Event/>
      <Faq2 />
      {/* <Faq3 /> */}
    </div>
  )
}

export default Home
