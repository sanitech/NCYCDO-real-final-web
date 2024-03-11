import React from 'react'
import ContactApp from '../../Components/ContactForm/ContactApp'
import Partner from '../../Components/Partner/Partener'
import Faq from '../../Components/FAQ/Faq'
import Cat from '../../Components/CAT/Cat'
import HeroTextOnly from '../../Components/Hero/HeroTextOnly'

function PartnerWithUs() {
  return (
    <div>
    <HeroTextOnly heroText={"Join Forces for Change with NCYCDO"} subText={"Empower your brand's impact by partnering with NCYCDO. Together, we can innovate, inspire, and make a meaningful difference in the world. Join us in shaping a brighter future through collaboration and purposeful alliances."} catBtnTitle={"Partner with Us"} link="#partner"/>
    <ContactApp/>
    <Partner/>
    <Faq/>
      
    </div>
  )
}

export default PartnerWithUs
