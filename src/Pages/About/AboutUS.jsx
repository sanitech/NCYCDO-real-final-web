import React from "react";
import OurAdvisory from "../../Components/OurAdviser/OurAdvisery";
import Partner from "../../Components/Partner/Partener";
import TimeLine from "../../Components/Timeline/TimeLine";
import Footer from "../../Components/Footer/Footer";
import AnnouncementBanners from "../../Components/Banners/AnnouncementBanners";
import Faq from "../../Components/FAQ/Faq";
import About from "../../Components/AboutSection/About";
import State from "../../Components/State/State";
import Feature from "../../Components/Feature/Feature";
import CatTwo from "../../Components/CAT/CatTwo";
import HeroTextOnly from "../../Components/Hero/HeroTextOnly";

function AboutUS() {
  return (
    <div>
    <HeroTextOnly heroText={"Empowering Communities, Building a Brighter Future for Ethiopia"} catBtnTitle={"Who wer are"} link={"#whoweare"}/>
      <About />
      <State />
      <Feature/>
      {/* <CatTwo/> */}

      <OurAdvisory />
      <TimeLine />
      {/* // <AnnouncementBanners /> */}
      <Partner />
      <Faq />
    </div>
  );
}

export default AboutUS;
