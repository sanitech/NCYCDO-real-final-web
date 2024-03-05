import React from "react";
import TestimonialsVolunteer from "../../Components/Testimonials/TestimonialsVolunteer";
import Partner from "../../Components/Partner/Partener";
import VolunteerForm from "../../Components/Volunteer/VolunteerForm";
import OurAdvisory from "../../Components/OurAdviser/OurAdvisery";
import Cat from "../../Components/CAT/Cat";
import CatTwo from "../../Components/CAT/CatTwo";
import GetInvolveForm from "../../Components/GetInvolveForm/GetInvolveForm";
import Faq from "../../Components/FAQ/Faq";
import JobList from "../../Components/Job/JobList";
import BuildEmpower from "../../Components/BuildSection/BuildEmpower";
import HeroDisplay from "../../Components/Hero/HeroDisplay";
import HeroTextOnly from "../../Components/Hero/HeroTextOnly";
import BenefitsVolunteer from "../../Components/IconSection/BenefitsVolunter";
import WhyInvolve from "../../Components/ProgramCom/WhyInvolve";

function GetInvolve() {
  return (
    <div>
      <HeroTextOnly  heroText={"Now it's easier than ever to make a difference"} subText={` Discover seamless ways to contribute, support, and create
                positive change. Join us in simplifying the path to impactful
                involvement and collectively building a better world.`}/>
      <WhyInvolve/>
      {/* <GetInvolveForm /> */}
      <Partner />
      <Cat status={false} about={""}/>
      <BenefitsVolunteer/>
      <TestimonialsVolunteer />
      <OurAdvisory /> 
      <Faq />
      {/* <JobList /> */}
    </div>
  );
}

export default GetInvolve;
