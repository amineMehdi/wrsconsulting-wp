import React, {useEffect} from "react";
import "../style/ConsultingIT.css";
import Images from "../wp-images";
const consultingImg  = Images.consulting;

function ConsultingIT() {
  useEffect(() => {
    let navbarHeight = document.querySelector(".navbar-contact-wrapper");
    if (navbarHeight.offsetHeight > navbarHeight.clientHeight) {
      navbarHeight = navbarHeight.offsetHeight;
    } else {
      navbarHeight = navbarHeight.clientHeight;
    }
    document.querySelector(
      ".consulting-container"
    ).style = `margin-top : ${navbarHeight}px`;
  }, []);
  const offers = [
    "Technologies web et mobile",
    "Architectures et implémentations Big Data",
    "Informatique décisionnelle",
    "Dématérialisation et la gestion électronique des documents",
    "Digitalisation Cloud et Saas",
    "ERP",
    "Portail, collaboratif et réseau social d’entreprise",
    "Cybersécurité et RGPD",
  ];
  return (
    <div className="consulting-container">
      <div className="consulting-header">
        <header>
          <strong>WRS Consulting : </strong>
          <span>Business expertise & IT strategy consulting</span>
        </header>
      </div>
      <div className="consulting-intro">
        <div
          className="consulting-intro-img"
          style={{ backgroundImage: `url(${consultingImg})` }}
        ></div>
        <div className="consulting-intro-details">
          <p>
            Le choix et la maitrise d’architectures ambitieuses et efficientes
            nécessite une grande expertise technologique.
          </p>
          <p>
            Le panel diversifié des experts estampillés WRS consulting vous
            garantit une maitrise de votre implémentation et de par conséquent
            des coûts de votre projet.
          </p>
          <p>
            De l’audit de l’existant et du conseil sont également à votre
            disposition dans des domaines aussi variés.
          </p>
        </div>
      </div>

      <div className="consulting-list-container">
        <div className="consulting-list-header">
          <header>On vous propose</header>
        </div>
        <div className="consulting-list-section">
          <ul>
            {offers.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ConsultingIT;
