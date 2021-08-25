import React, { useEffect } from "react";
import "../style/About.css";
function About() {
  useEffect(() => {
    let navbarHeight = document.querySelector(".navbar-contact-wrapper");
    if(navbarHeight.offsetHeight > navbarHeight.clientHeight){
      navbarHeight = navbarHeight.offsetHeight;
    }
    else{
      navbarHeight = navbarHeight.clientHeight;
    }
    document.querySelector(
      ".about-container"
    ).style = `margin-top : ${navbarHeight}px`;
  }, []);
  return (
    <div className="about-container">
      <div className="about-header">
        <header>Qui Sommes Nous ?</header>
      </div>
      <div className="about-details">
        <p>
          <strong>WRSConsulting</strong> est une société qui a été crée en 2010
          pour répondre aux besoins en service informatique de clients de divers
          secteurs d’activité (ex : banques/assurances, Groupes
          pharmaceutiques).
        </p>
        <p>
          <strong>WRSConsulting</strong> est basée à Paris et collabore avec des
          clients aussi bien nationaux qu’internationaux, sur des problématiques
          d’ingénierie de systèmes complexes et hautement stratégiques. Depuis
          2010, nous n’avons de cesse de collaborer à la refonte et à
          l’optimisation des processus métier de nos clients.
        </p>
      </div>
    </div>
  );
}

export default About;
