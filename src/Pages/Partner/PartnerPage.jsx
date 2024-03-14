import React from "react";
import Partner from "../../Components/Partner/Partener";
import Faq from "../../Components/FAQ/Faq";
import HeroTextOnly from "../../Components/Hero/HeroTextOnly";

function PartnerPage() {
  return (
    <div>
      <HeroTextOnly heroText={"Strategic Alliances, Lasting Impact"} subText={"At [Your Company/Organization], we believe that true success is achieved through strategic partnerships. Unleash the power of collaboration with us and embark on a journey where shared visions become reality."} link={"#ourpartner"} catBtnTitle={"Our Partners"}/>
      <Partner />
      <Faq />
    </div>
  );
}

export default PartnerPage;
