import React from 'react'
import TestimonialsVolunteer from '../../Components/Testimonials/TestimonialsVolunteer'
import Partner from '../../Components/Partner/Partener'
import VolunteerForm from '../../Components/Volunteer/VolunteerForm'
import OurAdvisory from '../../Components/OurAdviser/OurAdvisery'
import Cat from '../../Components/CAT/Cat'

function GetInvolve() {
  return (
    <div>
    <VolunteerForm/>
    <Partner/>
    <TestimonialsVolunteer/>
    <OurAdvisory/>
    <Cat/>
      
    </div>
  )
}

export default GetInvolve
