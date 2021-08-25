import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Dropdown(props) {
  const [click, setClick] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1010) {
      setMobile(true);
    }
  }, []);
  useEffect(() => {
    if (!props.menuIcon) {
      props.setDropDownActive(true);
    }
  }, [props.menuIcon]);
  return (
    <ul className={`dropdown-menu ${click ? "clicked" : ""} ${props.dropDownActive ? "" : "active"}`}>
      {mobile ? (
        <div
          className="arrow-back"
          onClick={() => props.setDropDownActive(!props.dropdownActive)}
        >
          <i className="fas fa-caret-left" /> Retour
        </div>
      ) : (
        ""
      )}
      {props.items.map((item, index) => {
        return (
          <li
            key={index}
            onClick={() => {
              mobile ? props.closeMobileMenu() : setClick(true);
            }}
          >
            <Link to={item.path} className="dropdown-link">
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
