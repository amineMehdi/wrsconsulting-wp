import React, { useEffect, useRef, useState } from "react";
import "../style/components/SlideShow.css";
import { Link } from "react-router-dom";
import Images from "../wp-images";

const images = [
  {
    img: Images.slideImages.img1,
    header: "Reseaux & Infrastructure",
    details:
      "Maîtrisez l’évolution de votre Datacenter, vos Clouds et vos applications Saas.",
    link: "infrastructure-reseaux",
  },
  {
    img: Images.slideImages.img2,
    header: "Développement logiciel",
    details:
      "Maîtrisez vos développements et garantissez la meilleure expérience utilisateur à vos clients.",
    link: "developpement-logiciel",
  },
  {
    img: Images.slideImages.img3,
    header: "Gestion de projet",
    details:
      "Bordez vos budgets, prévenez vos risques, en garantissant vos coûts, vos délais, et votre qualité logicielle.",
    link: "gestion-de-projet",
  },
  {
    img: Images.slideImages.img4,
    header: "Consulting en stratégie IT",
    details:
      "Ayez toujours un coup d’avance en garantissant l’efficacité de votre veille stratégique.",
    link: "consulting-en-strategie-it",
  },
];
const delay = 3500;
function SlideShow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);
  useEffect(() => {
    const prevArrow = document.querySelector(".prev");
    const nextArrow = document.querySelector(".next");
    [prevArrow, nextArrow].forEach((arrow) => {
      const arrowSpan = arrow.querySelector("div");
      arrow.addEventListener("mouseenter", () => {
        arrowSpan.style.display = "block";
      });
      arrow.addEventListener("mouseleave", () => {
        arrowSpan.style.display = "none";
      });
    });

    // const navbarContainer = document.querySelector(".navbar-contact-wrapper").offsetHeight;
    // console.log(navbarContainer);
  }, []);
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  const toggleArrows = (direction) => {
    if (index + direction < 0) {
      setIndex(images.length - 1);
    } else if (index + direction >= images.length) {
      setIndex(0);
    } else {
      setIndex(index + direction);
    }
    // console.log(index);
    // setIndex(index + direction === images.length - 1 ? 0 : index + direction);
    // arrowElement.addEventListener("mouseenter",()=>{
    //   arrowElement.querySelector("span").style.display ="block";
    // });
  };
  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage: `url(${image.img})` }}
          >
            <div className="slide-header">
              <header>{image.header}</header>
            </div>
            <div className="slide-details">
              <p>{image.details}</p>
            </div>
            <div className="btn learn-more">
              <Link to={`/${image.link}`}>
                <button>
                  <span>En savoir plus</span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
      <div className="slide-controllers">
        <div className="prev" onClick={() => toggleArrows(-1)}>
          <div>
            <i className="arrow fas fa-caret-left" />
          </div>
        </div>
        <div className="next" onClick={() => toggleArrows(1)}>
          <div>
            <i className="arrow fas fa-caret-right" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SlideShow;
