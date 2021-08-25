import React, { useEffect, useRef } from "react";
import "../style/Contact.css";
import { Link } from "react-router-dom";
import Images from "../wp-images";
const contactImg = Images.contact;

function Contact() {
  useEffect(() => {
    let navbarHeight = document.querySelector(".navbar-contact-wrapper");
    if (navbarHeight.offsetHeight > navbarHeight.clientHeight) {
      navbarHeight = navbarHeight.offsetHeight;
    } else {
      navbarHeight = navbarHeight.clientHeight;
    }
    document.querySelector(
      ".contact-container"
    ).style = `margin-top : ${navbarHeight+50}px`;
  }, []);
  const contactTilesImgRef = useRef(null);
  const contactTilesContainerRef = useRef(null);
  useEffect(() => {
    contactTilesImgRef.current.style.height = `${
      contactTilesContainerRef.current.clientHeight + 50
    }px`;
  });
  return (
    <div className="contact-container">
      <div className="contact-header">
        <header>Contact</header>
        <p>
          Merci pour l'intérêt que vous portez à WRS CONSULTING et à nos
          services. Pour qu'on puisse répondre à votre demande, veuillez choisir
          le type de contact.
        </p>
      </div>
      <div ref={contactTilesContainerRef} className="contact-tiles-container">
        {/* style={{ backgroundImage: `url(${ContactBg})` }} */}
        <div ref={contactTilesImgRef} className="contact-tiles-bg">
          <img src={contactImg.background} alt="contact" />
        </div>
        <div className="contact-tile">
          <div className="contact-tile-header">
            <header>Joignez WRS Consulting</header>
            <p>
              Avez-vous un projet ? une question ? N'hesitez pas à nous
              contacter
            </p>
          </div>
          <div className="contact-tile-img">
            <img src={contactImg.entreprise} />
          </div>
          <div className="contact-tile-btn btn">
            <Link to="/entreprise">
              <button>Contact</button>
            </Link>
          </div>
        </div>

        <div className="contact-tile">
          <div className="contact-tile-header">
            <header>Nous Rencontrer</header>
            <p>4 bis rue cadet de vaux 95130 Franconville</p>
          </div>
          <div className="contact-tile-img">
            <img src={contactImg.map} />
          </div>
          <div className="contact-tile-btn btn">
            <button>
              <a
                href="https://www.google.com/maps?q=48.991853677927324,+2.234105298316715"
                target="_blank"
              >
                Nous visiter
              </a>
            </button>
          </div>
        </div>

        <div className="contact-tile">
          <div className="contact-tile-header">
            <header>Candidature</header>
            <p>
              Cherchez vous un poste en particulier? Envoyez nous votre
              candidature.
            </p>
          </div>
          <div className="contact-tile-img">
            <img src={contactImg.candidature} />
          </div>
          <div className="contact-tile-btn btn">
            <Link to="/candidature">
              <button>Candidature</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

// <div className="btn">
// <Link to="/entreprise">
//   <button>
//     <span>Entreprise</span>
//   </button>
// </Link>
// </div>
// <div className="btn">
// <Link to="/candidature">
//   <button>
//     <span>Candidature</span>
//   </button>
// </Link>
// </div>
