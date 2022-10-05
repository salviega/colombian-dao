import "./ColombianFooter.scss";
import React from "react";
import iTelegram from "../../asserts/images/icon-telegram.svg";
import iLinkedin from "../../asserts/images/icon-linkedin.svg";
import iDiscored from "../../asserts/images/icon-discored.svg";
import iGithub from "../../asserts/images/icon-github.svg";
import logo from "../../asserts/images/colombian-dao-logo3.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faLinkedinIn,
  faDiscord,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export function ColombianFooter() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-container__ads">
          <h1>Join our community</h1>
        </div>
        <div className="footer-container__network">
          <a href="/">
            <div className="footer-container-icon">
                <img src={iGithub} alt="imagen" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/salviega/">
            <div className="footer-container-icon">
                <img src={iTelegram} alt="imagen" />
            </div>
          </a>
          <a href="https://github.com/salviega/colombian-dao">
            <div className="footer-container-icon">
                <img src={iLinkedin} alt="imagen" />
            </div>
          </a>
          <a href="https://github.com/salviega/colombian-dao">
            <div className="footer-container-icon">
                <img src={iDiscored} alt="imagen" />
            </div>
          </a>
        </div>
      </div>
      <div className="footer-container-copyright">
        <p className="footer-container-copyright__copyright">
          ©2022 CREA COLOMBIA
        </p>
        <figure className="footer-container-copyright__construction">
          <img src={logo} alt="logo" />
        </figure>
      </div>
    </footer>
  );
}
