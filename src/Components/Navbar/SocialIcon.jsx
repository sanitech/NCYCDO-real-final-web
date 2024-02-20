import React from "react";
import { Link } from "react-router-dom";

function SocialIcon({link, icon, alt}) {
  return (
    <div>
      <a href={link} className="social-icon" target="_blank">
        <img src={icon} alt={alt} />
      </a>
    </div>
  );
}

export default SocialIcon;
