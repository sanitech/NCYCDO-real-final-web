import React from 'react'
import VolunteerForm from '../../Components/Volunteer/VolunteerForm'
import VolunteerTestimonials from '../../Components/Volunteer/VolunteerTestimonials'
import BenefitsVolunteer from '../../Components/IconSection/BenefitsVolunter'
import Faq2 from '../../Components/FAQ/Faq2'
import JobList from '../../Components/Job/JobList'
import Faq from '../../Components/FAQ/Faq'
import HeroTextOnly from '../../Components/Hero/HeroTextOnly'

function Volunteer() {
  return (
    <div>
    <HeroTextOnly heroText={"Join Us in Creating Positive Change"} subText={"Your time and skills can contribute to meaningful causes, create lasting change, and inspire others."} catBtnTitle={"Join the Team"} link={"#volunteer"}/>
    <VolunteerForm/>
    {/* <VolunteerTestimonials/> */}
    <Faq/>
    {/* <JobList/> */}
    </div>
  )
}

export default Volunteer
