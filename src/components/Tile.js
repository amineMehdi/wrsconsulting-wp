import React from "react";
import anime from "animejs/lib/anime.es";
import { Link } from "react-router-dom";

const animationTimer = 1500;
function Tile(props) {
  const handleArrow = (element) => {
    const tile = element.parentNode;
    if (element.classList.contains("arrow-down")) {
      anime({
        targets: tile,
        height: "45vh",
        duration: animationTimer,
      });
      tile.querySelector(".tile-details").style = "display: block";
      tile.querySelector(".tile-learn-more").style = "display: block";
      anime({
        targets: tile.querySelector(".tile-learn-more"),
        opacity: ["0", "1"],
        delay: 500,
        duration: animationTimer,
      });
      element.classList.add("arrow-up");
      element.classList.remove("arrow-down");
    } else {
      tile.querySelector(".tile-details").style = "display: none";
      tile.querySelector(".tile-learn-more").style = "display: none";
      anime({
        targets: tile,
        height: "32vh",
        duration: animationTimer,
      });
      element.classList.add("arrow-down");
      element.classList.remove("arrow-up");
    }
  };
  return (
    <div className="tile">
      <div className="tile-logo">
        <img src={props.logo} alt="p" />
      </div>
      <div className="tile-header">{props.header}</div>
      <div className="tile-details">
        <p>{props.details}</p>
      </div>
      <div
        className="tile-arrow arrow-down"
        onClick={(event) => handleArrow(event.target)}
      ></div>
      <div className="btn tile-learn-more">
        <Link to={`/${props.link}`}>
          <button>
            <span>En savoir plus</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Tile;
// onClick={() => (window.location.href = `/${props.link}`)}
