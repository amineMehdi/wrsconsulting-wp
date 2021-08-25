import React from "react";
import { Link } from "react-router-dom";

function NavItem(props) {
  return (
    <li className="nav-item">
      <Link
        to={`/${props.path}`}
        className="nav-links"
        onClick={props.closeMobileMenu}
      >
        {props.title}
      </Link>
    </li>
  );
}

export default NavItem;
