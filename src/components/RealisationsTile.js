import React from "react";
import anime from "animejs/lib/anime.es";

function RealisationsTile(props) {
  const getDetails = (data) => {
    const liList = [];
    data.forEach((el, ind) => {
      liList.push(<li key={ind}>{el}</li>);
    });
    return liList;
  };
  const handleArrow = (element) => {
    const tile = element.parentNode;
    if (element.classList.contains("arrow-down")) {
      // tile.querySelector(".realisations-tile-img").style.top = "22%";
      anime({
        targets: tile.querySelector(".realisations-tile-img"),
        top: "22%",
        duration: 500,
        easing: "linear"
      })
      anime({
        targets: tile,
        height: "55vh",
        duration: 200,
        easing: "linear"

      });


      anime({
        targets: tile.querySelectorAll(
          ".realisations-tile-header, .realisations-tile-details"
        ),
        opacity: "1",
        duration: 500,
        easing: "linear",
      });
      element.classList.add("arrow-up");
      element.classList.remove("arrow-down");
    } else {
      tile.querySelector(".realisations-tile-header").style = "opacity: 0";
      tile.querySelector(".realisations-tile-details").style = "opacity: 0";
      anime({
        targets: tile,
        height: "26vh",
        duration: 200,
        easing: "linear"
      });
      anime({
        targets: tile.querySelector(".realisations-tile-img"),
        top: "50%",
        duration: 500,
        easing: "linear"
      })
      element.classList.add("arrow-down");
      element.classList.remove("arrow-up");
    }
  };
  return (
    <div className="realisations-tile">
      <div
        className="realisations-tile-img"
        style={{ backgroundImage: `url(${props.data.src})` }}
      ></div>
      <div className="realisations-tile-header">
        <header>{props.data.header}</header>
      </div>
      <ul className="realisations-tile-details">
        {getDetails(props.data.details)}
      </ul>
      <div
        className="realisations-arrow arrow-down"
        onClick={(event) => handleArrow(event.target)}
      ></div>
    </div>
  );
}

export default RealisationsTile;
