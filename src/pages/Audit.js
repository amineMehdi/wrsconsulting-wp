import React, {useEffect} from 'react'
import "../style/Audit.css";

function Audit() {
    useEffect(() => {
        let navbarHeight = document.querySelector(".navbar-contact-wrapper");
        if (navbarHeight.offsetHeight > navbarHeight.clientHeight) {
          navbarHeight = navbarHeight.offsetHeight;
        } else {
          navbarHeight = navbarHeight.clientHeight;
        }
        document.querySelector(
          ".audit-container"
        ).style = `margin-top : ${navbarHeight}px`;
      }, []);
    return (
        <div className="audit-container">
            <div className="audit-header">
                <header>
                    <strong>WRS Consulting:</strong> <span>Audit</span>
                </header>
                <p>Audit</p>
            </div>

        </div>
    )
}

export default Audit
