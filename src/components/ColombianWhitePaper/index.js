import React from "react";
import "./ColombianWhitePaper.scss";
import iDownload from "../../asserts/images/icon-download.svg";
import iPlus from "../../asserts/images/icon-plus.svg";

export function ColombianWhitePaper({home}) {
  return (
    <div className="home-whitepaper">
      {home.whitepaper.map((whitepaper, index) => (
        <div className="home-whitepaper-container" key={index}>
          <div className="home-whitepaper-container-head">
            <figure>
              <img src={iPlus} alt="imagen" />
            </figure>
            <p className="home-whitepaper-container-head__title">{whitepaper.title}</p>
          </div>
          <p className="home-whitepaper-container__description">{whitepaper.description}</p>
        </div>
      ))}
      <a
        className="home-whitepaper-download"
        href={iDownload}
        download="ColombianDAO's Whitepaper"
        rel="noreferrer"
      >
        <figure>
          <img src={iDownload} alt="imagen"></img>
        </figure>
        <p className="home-whitepaper-download__title">
          Download our whitepaper
        </p>
      </a>
    </div>
  );
}
