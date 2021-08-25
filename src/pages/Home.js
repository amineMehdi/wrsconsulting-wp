import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";

import SlideShow from "../components/SlideShow";
import Tile from "../components/Tile";
import TilesContainer from "../components/TilesContainer";

import developpementIcon from "../images/expertise-icons/developpement_logiciel_icon.svg";
import editionIcon from "../images/expertise-icons/edition_logiciel_icon.svg";
import reseauIcon from "../images/expertise-icons/reseaux_infrastructure_icon.svg";
import strategyIcon from "../images/expertise-icons/strategie_it_icon.svg";

function Home() {
  useEffect(()=>{
    const navbarHeight = document.querySelector(".navbar-contact-wrapper");
    document.querySelector(".home-container").style = `margin-top : ${navbarHeight.offsetHeight}px`;
  }, []);
  return (
    <div className="home-container">
      <SlideShow />
      <TilesContainer>
        <Tile
          logo={reseauIcon}
          header="Reseaux & Infrastructure"
          details="Maîtrisez l’évolution de votre Datacenter, vos Clouds et vos applications Saas."
          link="infrastructure-reseaux"
        />
        <Tile
          logo={developpementIcon}
          header="Développement logiciel"
          details="Maîtrisez vos développements et garantissez la meilleure expérience utilisateur à vos clients."
          link="developpement-logiciel"
        />
        <Tile
          logo={editionIcon}
          header="Gestion de projet"
          details="Bordez vos budgets, prévenez vos risques, en garantissant vos coûts, vos délais, et votre qualité logicielle."
          link="gestion-de-projet"
        />
        <Tile
          logo={strategyIcon}
          header="Consulting en stratégie IT"
          details="Ayez toujours un coup d’avance en garantissant l’efficacité de votre veille stratégique."
          link="consulting-en-strategie-it"
        />
      </TilesContainer>
      <div className="btn home-contact-container">
        <Link to="/contact">
          <button>
            <span>Contactez-Nous</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
