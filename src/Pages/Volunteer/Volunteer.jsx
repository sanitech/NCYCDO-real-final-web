import React from 'react'
import VolunteerForm from '../../Components/Volunteer/VolunteerForm'
import VolunteerTestimonials from '../../Components/Volunteer/VolunteerTestimonials'
import BenefitsVolunteer from '../../Components/IconSection/BenefitsVolunter'
import Faq2 from '../../Components/FAQ/Faq2'
import JobList from '../../Components/Job/JobList'
import Faq from '../../Components/FAQ/Faq'

function Volunteer() {
  return (
    <div>
    <BenefitsVolunteer/>
    <VolunteerForm/>
    <VolunteerTestimonials/>
    <Faq/>
    <JobList/>
    </div>
  )
}

export default Volunteer
