import React from 'react'
import DonateForm from '../../Components/Donate/DonateForm'
import Footer from '../../Components/Footer/Footer'
import Partner from '../../Components/Partner/Partener'
import Testimonials from '../../Components/Testimonials/Testimonials'

function Donate() {
  return (
    <div>
      <DonateForm/>
      <Testimonials/>
      <Partner/>
    </div>
  )
}

export default Donate
