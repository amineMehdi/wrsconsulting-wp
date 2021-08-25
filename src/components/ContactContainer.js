import React from "react";
import "../style/components/ContactContainer.css";
// import anime from "animejs/lib/anime.es";
import { Link } from "react-router-dom";
function ContactContainer() {
  return (
    <div className="home-contact-container">
      <div className="home-contact-img"></div>
      <div className="home-contact-header">
        <header>Avez-vous une Question ? Contactez-nous</header>
      </div>
      <div className="btn home-contact-btn">
        <Link to="/contact">
          <button>
            <span>Contact</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ContactContainer;
