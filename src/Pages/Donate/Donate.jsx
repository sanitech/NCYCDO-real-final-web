import React from 'react'
import DonateForm from '../../Components/Donate/DonateForm'
import Footer from '../../Components/Footer/Footer'
import Partner from '../../Components/Partner/Partener'
import Testimonials from '../../Components/Testimonials/Testimonials'
import ContactApp from '../../Components/ContactForm/ContactApp'
import Faq from '../../Components/FAQ/Faq'

function Donate() {
  return (
    <div>
      <DonateForm/>
      <ContactApp/>
      {/* <Testimonials/> */}
      <Partner/>
      <Faq/>
    </div>
  )
}

export default Donate
