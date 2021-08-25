import React, { useEffect } from "react";
import "../style/Realisations.css";
import RealisationsTile from "../components/RealisationsTile";
import anime from "animejs/lib/anime.es";
import Images from "../wp-images";
const realisationsImg = Images.realisations;
function Realisations() {
  useEffect(() => {
    let navbarHeight = document.querySelector(".navbar-contact-wrapper");
    if (navbarHeight.offsetHeight > navbarHeight.clientHeight) {
      navbarHeight = navbarHeight.offsetHeight;
    } else {
      navbarHeight = navbarHeight.clientHeight;
    }
    document.querySelector(
      ".realisations-container"
    ).style = `margin-top : ${navbarHeight}px`;
  }, []);
  const AxaData = {
    src: realisationsImg.axa,
    header: "AXA France Services",
    details: [
      "Gestion de projets Infrastructures et migrations postes de travail",
      "Gestion de projets Innovation",
    ],
  };

  const AllianzData = {
    src: realisationsImg.allianz,
    header: "Allianz Assurance",
    details: [
      "Création d’un logiciel de suivi de portefeuille projets",
      "Création d’un outils de suivi de projet et suivi de la norme CMMI",
    ],
  };

  const CreditData = {
    src: realisationsImg.creditAgricole,
    header: "Crédit Agricole",
    details: [
      "Direction de programmes Infrastructures et urbanisation de système d’informations",
    ],
  };

  const SanofiData = {
    src: realisationsImg.sanofi,
    header: "Sanofi",
    details: [
      "Gestion de projets Infrastructures",
      "Projet Qualité de production",
      "Projet SAP : outil de reporting sur les audits de production",
      "Projet Oracle : outils de gestion de la logistique et transports",
    ],
  };
  const AssuranceData = {
    src: realisationsImg.csag,
    header: "CSAG Assurance",
    details: [
      "Création d’un logiciel de gestion des contrats",
      "Outil de suivi financier",
      "Création d’un CRM pour le suivi commercial",
      "Gestion Infrastructures et Reseaux",
    ],
  };
  const OrangeData = {
    src: realisationsImg.orange,
    header: "Orange",
    details: ["A", "B", "C"],
  };
  const animateTile = (tile, animationStart) => {
    anime({
      targets: tile.querySelector(".realisations-tile-img"),
      opacity: animationStart ? "0" : "1",
      duration: 1500,
    });
    anime({
      targets: tile.querySelector(".realisations-tile-header"),
      opacity: animationStart ? "1" : "0",
      duration: 2000,
    });

    anime({
      targets: tile.querySelector(".realisations-tile-details"),
      opacity: animationStart ? "1" : "0",
      duration: 1500,
    });
  };
  useEffect(() => {
    const realisationTiles = document.querySelectorAll(".realisations-tile");
    if (window.innerWidth > 1010) {
      realisationTiles.forEach((tile) => {
        tile.addEventListener("mouseenter", () => {
          animateTile(tile, true);
        });
        tile.addEventListener("mouseleave", () => {
          animateTile(tile, false);
        });
      });
    }
  }, []);

  return (
    <div className="realisations-container">
      <div className="realisations-header">
        <header>Nos Realisations</header>
      </div>
      <div className="realisations-tiles-section">
        <RealisationsTile data={AxaData} />
        <RealisationsTile data={AllianzData} />
        <RealisationsTile data={CreditData} />
        <RealisationsTile data={SanofiData} />
        <RealisationsTile data={AssuranceData} />
        <RealisationsTile data={OrangeData} />
      </div>
    </div>
  );
}

export default Realisations;

// realisationTiles.forEach((tile) => {
//   tile.addEventListener("mouseenter", () => {
//     // console.log("mouseenter");
//     realisationTiles.forEach((otherTile) => {
//       if (!otherTile.isSameNode(tile)) {
//         anime({
//           targets: otherTile,
//           opacity : ["1","0"],
//           duration: 1500,
//         });
//         otherTile.style.display = "none";
//       }
//     });
//     anime({
//       targets: tile.querySelector(".realisations-tile-img"),
//       top: "25%",
//       duration: 1000,
//     });
//     anime({
//       targets: tile,
//       width: "100%",
//       height: "60vh",
//       duration: 2000,
//       easing: "easeOutExpo",
//     });
//     tile
//       .querySelectorAll(
//         ".realisations-tile-header, .realisations-tile-details"
//       )
//       .forEach((el) => {
//         el.style.display = "block";
//       });
//   });

//   tile.addEventListener("mouseleave", () => {
//     console.log("mouseleave");
//     anime({
//       targets: tile.querySelector(".realisations-tile-img"),
//       top: "50%",
//       duration: 1000,
//       easing: "linear",
//     });

//     anime({
//       targets: tile,
//       width: "24vw",
//       height: "22vh",
//       duration: 2000,
//       easing: "easeOutExpo",
//     });

//     tile
//       .querySelectorAll(
//         ".realisations-tile-header, .realisations-tile-details"
//       )
//       .forEach((el) => {
//         el.style.display = "none";
//       });

//     realisationTiles.forEach((otherTile) => {
//       if (!otherTile.isSameNode(tile)) {
//         anime({
//           targets: otherTile,
//           opacity : ["0","1"],
//           duration: 1500,
//         });
//         otherTile.style.display = "block";
//       }
//     });
//     anime({
//       targets: tile.querySelector(".realisations-tile-img"),
//       opacity: ["0", "1"],
//       duration: 500,
//       easing: "linear"
//     });
//   });
// });
