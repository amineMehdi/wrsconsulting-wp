import React, { useEffect, useState, useRef } from "react";
import "../style/components/ArrowTop.css";

function ArrowTop() {
  const scrollArrow = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= window.innerHeight) {
        scrollArrow.current.style.display = "inline-block";
      } else {
        scrollArrow.current.style.display = "none";
      }
    });
  });
  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  };
  return (
    <div
      ref={scrollArrow}
      className="arrow-top-container"
      onClick={() => scrollTop()}
    >
      <span><i className="fas fa-caret-up"/></span>
    </div>
  );
}

export default ArrowTop;
