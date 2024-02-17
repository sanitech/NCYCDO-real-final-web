import React from 'react'
import HomeHero from '../../Components/Hero/HomeHero'
import Cat from '../../Components/CAT/Cat'
import NewsLetter from '../../Components/News/NewsLetter'
import Faq from '../../Components/FAQ/Faq'
import Faq2 from '../../Components/FAQ/Faq2'
import Faq3 from '../../Components/FAQ/Faq3'
import Footer from '../../Components/Footer/Footer'


function Home() {
  return (
    <div>
      <HomeHero />
      <Cat />
      <NewsLetter />
      <Faq2 />
      <Faq3 />
      <Footer />
    </div>
  )
}

export default Home
