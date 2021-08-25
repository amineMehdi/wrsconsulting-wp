import React, { useState, useEffect, useRef } from "react";
import "../style/components/Navbar.css";
import Images from "../wp-images";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { MenuItems } from "./MenuItems";
import NavItem from "./NavItem";
import anime from "animejs/lib/anime.es";

import facebookSocial from "../images/social-icons/facebook_social.svg";
import linkedinSocial from "../images/social-icons/linkedin_social.svg";
import twitterSocial from "../images/social-icons/twitter_social.svg";

function Navbar() {
  const navbarContainerRef = useRef(null);
  const [mobile, setMobile] = useState(false);
  const [menuIconClick, setMenuIconClick] = useState(false);
  const [expertiseDropdown, setExpertiseDropdown] = useState(false);
  const [contactDropdown, setContactDropdown] = useState(false);
  const [navbarBorder, setNavbarBorder] = useState(false);
  const closeMobileMenu = () => setMenuIconClick(false);

  useEffect(() => {
    if (window.innerWidth < 1010) {
      setMobile(true);
      setExpertiseDropdown(true);
      setContactDropdown(true);
      console.log("mobile");
    }
    document.addEventListener("scroll", () => {
      const contactNavbarHeight = navbarContainerRef.current.querySelector(
        ":scope > .contact-navbar-container"
      ).clientHeight;
      if (window.scrollY > 90) {
        anime({
          targets: navbarContainerRef.current,
          translateY : `-${contactNavbarHeight}px`,
          easing: "linear",
          duration : 500
        });
      } else if (window.scrollY < 60) {
        anime({
          targets: navbarContainerRef.current,
          translateY : "0px",
          easing: "linear",
          duration : 500
        });
      }
    });
  }, []);
  return (
    <div
      className={`navbar-contact-wrapper ${navbarBorder ? "active" : ""}`}
      onMouseEnter={() => setNavbarBorder(true)}
      onMouseLeave={() => setNavbarBorder(false)}
      ref={navbarContainerRef}
    >
      <div className="contact-navbar-container">
        <div className="contact-navbar">
          <p>
            Contactez-nous +33 6 34 27 40 69 |{" "}
            <a href="mailto:contact@wrsconsulting.fr">
              contact@wrsconsulting.fr
            </a>
          </p>
        </div>
        <div className="contact-social">
          <a href="#" title="facebook">
            <img src={facebookSocial} alt="facebook" />
          </a>
          <a href="#" title="twitter">
            <img src={twitterSocial} alt="twitter" />
          </a>
          <a href="#" title="linkedin">
            <img src={linkedinSocial} alt="linkedin" />
          </a>
        </div>
      </div>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="./">
            <img src={Images.logo} />
          </Link>
        </div>
        <div
          className="menu-icon"
          onClick={() => {
            setMenuIconClick(!menuIconClick);
          }}
        >
          <i className={`fas ${menuIconClick ? "fa-times" : "fa-bars"}`} />
        </div>

        <ul className={`nav-menu ${menuIconClick ? "active" : ""}`}>
          <NavItem title="ACCEUIL" path="" closeMobileMenu={closeMobileMenu} />
          <NavItem
            title="A PROPOS"
            path="a-propos"
            closeMobileMenu={closeMobileMenu}
          />
          <li
            className="nav-item"
            onMouseEnter={() => (mobile ? "" : setExpertiseDropdown(true))}
            onMouseLeave={() => (mobile ? "" : setExpertiseDropdown(false))}
            onClick={() => {
              if (mobile) {
                setExpertiseDropdown(!expertiseDropdown);
              }
            }}
          >
            <Link to="/" className="nav-links">
              EXPERTISE
            </Link>
            {mobile ? <i className="mobile-arrow fas fa-caret-right" /> : ""}
            {(mobile || expertiseDropdown) && (
              <Dropdown
                items={MenuItems.expertise}
                closeMobileMenu={closeMobileMenu}
                dropDownActive={expertiseDropdown}
                setDropDownActive={setExpertiseDropdown}
                menuIcon={menuIconClick}
              />
            )}
          </li>
          <NavItem
            title="REALISATIONS"
            path="realisations"
            closeMobileMenu={closeMobileMenu}
          />

          <NavItem
            title="PARTENAIRES"
            path="partenaires"
            closeMobileMenu={closeMobileMenu}
          />
          <li
            className="nav-item"
            onMouseEnter={() => (mobile ? "" : setContactDropdown(true))}
            onMouseLeave={() => (mobile ? "" : setContactDropdown(false))}
            onClick={() => {
              if (mobile) {
                setContactDropdown(!contactDropdown);
                console.log(contactDropdown);
              }
            }}
          >
            <Link to="/contact" className="nav-links">
              CONTACT
            </Link>
            {mobile ? <i className="mobile-arrow fas fa-caret-right" /> : ""}
            {(mobile || contactDropdown) && (
              <Dropdown
                items={MenuItems.contact}
                closeMobileMenu={closeMobileMenu}
                dropDownActive={contactDropdown}
                setDropDownActive={setContactDropdown}
                menuIcon={menuIconClick}
              />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
