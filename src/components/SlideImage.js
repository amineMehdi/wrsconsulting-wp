import React from "react";
import { Link } from "react-router-dom";
function SlideImage(props) {
  return (
    <div className="slide">
      <div
        className="slide-img"
        style={{ backgroundImage: `url(${props.src})` }}
      ></div>
      <div className="slide-section">{props.section}</div>
      <p className="slide-details">{props.details}</p>
      <div className="learn-more">
        <Link to={`/${props.link}`}>
          <button>En savoir plus</button>
        </Link>
      </div>
    </div>
  );
}

export default SlideImage;
// onClick={() => (window.location.href = `/${props.link}`)}
