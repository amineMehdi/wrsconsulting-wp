import React, { useEffect } from "react";
import "../style/components/TilesContainer.css";
import anime from "animejs/lib/anime.es";

const animationTimer = 1000;
function TilesContainer(props) {
  // Desktop version
  useEffect(() => {
    const allTiles = document.querySelectorAll(".tile");
    if (window.innerWidth > 1010) {
      allTiles.forEach((tile) => {
        tile.addEventListener("mouseenter", () => {
          anime({
            targets: tile,
            width: "100%",
            duration: animationTimer,
          });

          anime({
            targets: tile.querySelector(".tile-logo"),
            width: "55px",
            height: "55px",
            top: "12%",
            borderRadius: "10px",
            duration: animationTimer,
          });
          anime({
            targets: tile.querySelector(".tile-header"),
            fontSize: "50px",
            duration: 500,
            easing: "linear",
          });
          tile.querySelector(".tile-details").style.display = "block";
          tile.querySelector(".tile-learn-more").style.display = "block";
          allTiles.forEach((otherTile) => {
            if (!otherTile.isSameNode(tile)) {
              anime({
                targets: otherTile,
                opacity: ["1", "0"],
                duration: animationTimer,
              });
              otherTile.querySelector(".tile-header").style.display = "none";
            }
          });
        });

        tile.addEventListener("mouseleave", () => {
          anime({
            targets: tile.querySelector(".tile-logo"),
            top: "-15%",
            duration: animationTimer,
            borderRadius: "50%",
            easing: "linear",
          });
          anime({
            targets: tile,
            width: "25%",
            duration: animationTimer,
            easing: "linear",
          });
          anime({
            targets: tile.querySelector(".tile-header"),
            fontSize: "28px",
            duration: 500,
            easing: "linear",
          });
          tile.querySelector(".tile-details").style.display = "none";
          tile.querySelector(".tile-learn-more").style.display = "none";
          allTiles.forEach((otherTile) => {
            if (!otherTile.isSameNode(tile)) {
              anime({
                targets: otherTile,
                opacity: ["0.25", "1"],
                width: "25vw",
                duration: animationTimer,
              });
              otherTile.querySelector(".tile-header").style =
                "display:block; opacity: 0";

              anime({
                targets: otherTile.querySelector(".tile-header"),
                opacity: ["0", "1"],
                duration: 3000,
                delay: 500,
              });
            }
          });
        });
      });
    }
  }, []);
  return (
    <div className="tiles-section" id="expertise">
      <div className="tiles-section-header">
        <header>Nos Expertises</header>
      </div>
      <div className="tiles-container">{props.children}</div>
    </div>
  );
}

export default TilesContainer;
