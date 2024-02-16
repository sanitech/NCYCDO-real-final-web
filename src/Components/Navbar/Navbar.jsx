import React from "react";
import "./Navbar.css";
import "./Drop.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import fb from "../../assets/images/Social/fb.png";
import insta from "../../assets/images/Social/insta.png";
import linkedin from "../../assets/images/Social/linkedin.png";
function Navbar() {
  return (
    <nav className="navbar shadow-lg lato-bold">
      <div className="left-nav">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav-links">
          <hr className="nav-divider"></hr>
          <ul className="nav-list">
            <Link to="" className="nav-link">
              Home
            </Link>
            <div class="dropdown">
              <button class="dropdown-btn">Who we are</button>
              <i class="fa-solid fa-angle-down"></i>
              <div class="dropdown-content">
                <Link className="dropdown-item">About us</Link>
                <Link className="dropdown-item">Advisory counsel</Link>
                <Link className="dropdown-item">Our Partner</Link>
                <Link className="dropdown-item">National advocacy</Link>
              </div>
            </div>
            <Link to="" className="nav-link">
              Program Area
              <i class="fa-solid fa-angle-down"></i>
            </Link>
            <Link to="" className="nav-link">
              Get Involve
              <i class="fa-solid fa-angle-down"></i>
            </Link>
            <Link to="" className="nav-link">
              Contact
            </Link>
          </ul>
        </div>
      </div>
      <div className="donate-container">
        <div className="social-media">
          <Link to="" className="social-icon">
            <img src={fb} alt="fb" />
          </Link>
          <Link to="" className="social-icon">
            <img src={insta} alt="insta" />
          </Link>

          <Link to="" className="social-icon">
            <img src={linkedin} alt="linkedin" />
          </Link>
        </div>

        <hr className="nav-divider"></hr>

        <Link to="" className="dotnet-btn">
          <span className="dotnet-btn-text">Donate</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
