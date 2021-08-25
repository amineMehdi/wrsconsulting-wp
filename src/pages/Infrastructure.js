import React, { useEffect } from "react";
import "../style/Infrastructure.css";
import Images from "../wp-images";
const infrastructureImg = Images.infrastructure;
function Infrastructure() {
  useEffect(() => {
    let navbarHeight = document.querySelector(".navbar-contact-wrapper");
    if(navbarHeight.offsetHeight > navbarHeight.clientHeight){
      navbarHeight = navbarHeight.offsetHeight;
    }
    else{
      navbarHeight = navbarHeight.clientHeight;
    }
    document.querySelector(
      ".infrastructure-container"
    ).style = `margin-top : ${navbarHeight}px`;
  }, []);
  const infrastructureTiles = [
    {
      header: "Gestion, des comptes et des machines du réseau",
      details:
        "Assure la gestion des comptes et des machines du réseau informatique des entreprises",
    },
    {
      header: "Administrateur système",
      details:
        "Assiste à distance les utilisateurs dans leur environnement informatique et numérique.",
    },
    {
      header: "Serveurs de l'entreprise",
      details:
        "Gère aussi les postes de travail et les serveurs de l’entreprise.",
    },
    {
      header: "Conception des réseaux",
      details:
        "Assure la conception des réseaux de télécommunications (WAN, LAN, MAN, SAN)",
    },
    {
      header: "Architecture du réseau",
      details:
        "L’analyse technique nécessaire à la conception du diagramme de l’architecture du réseau en liaison avec les solutions informatiques",
    },
  ];
  return (
    <div className="infrastructure-container">
      <div className="infrastructure-header">
        <header>
          <strong>WRS Consulting : </strong>
          <span>Infrastructure & reseaux</span>
        </header>
        <p>Développez le cœur de réseau de votre entreprise</p>
      </div>
      <div className="infrastructure-intro">
        <div
          className="infrastructure-intro-img"
          style={{ backgroundImage: `url(${infrastructureImg})` }}
        ></div>
        <p>
          L’infrastructure est le pilier de votre réseau informatique et la base
          de votre système d’informations. C’est aussi le cœur de notre métier.
          <br />
          Nous vous accompagnons dans la conception et le dimensionnement de
          votre environnement de travail en tenant compte de vos contraintes
          fonctionnelles et budgétaires. <br />
          Nous veillons également à ce que nos solutions soient cohérentes avec
          votre stratégie de développement.
        </p>
      </div>
      <div className="infrastructure-tiles-container">
        <div className="infrastructure-tiles-header">
          <header>On vous propose</header>
        </div>
        <div className="infrastructure-tiles-section">
          {infrastructureTiles.map((element) => (
            <div className="infrastructure-tile">
              <header>{element.header}</header>
              <p>{element.details}</p>
            </div>
          ))}
        </div>

        <div className="infrastructure-list-container">
          <div className="infrastructure-list-header">
            <header>Nous assurons</header>
          </div>
          <div className="infrastructure-list-section">
            <ul>
              <li>Protégez et restaurez facilement vos données.</li>
              <li>
                Démarrez rapidement votre infrastructure en cas de crise
                majeure.
              </li>
              <li>
                Etendez votre réseau à vos sites distants de manière sécurisée.
              </li>
              <li>Protégez et restaurez facilement vos données.</li>
              <li>
                Redémarrez rapidement votre infrastructure en cas de crise
                majeure.
              </li>
              <li>
                Étendez votre réseau à vos sites distants de manière sécurisée.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infrastructure;
