import React from "react";
import "./ColombianWhitePaper.scss";
import iDownload from "../../asserts/images/icon-download.svg";

export function ColombianWhitePaper() {
  
  return (
    <div className="home-whitepaper">
      <div className="home-whitepaper-container">
        <p className="home-whitepaper-container__title">sss</p>
        <p className="home-whitepaper-container__description">aaa</p>
      </div>
      <div className="home-whitepaper-container">
        <p className="home-whitepaper-container__title">sss</p>
        <p className="home-whitepaper-container__description">aaa</p>
      </div>
      <div className="home-whitepaper-container">
        <p className="home-whitepaper-container__title">sss</p>
        <p className="home-whitepaper-container__description">aaa</p>
      </div>
      <div className="home-whitepaper-container">
        <p className="home-whitepaper-container__title">sss</p>
        <p className="home-whitepaper-container__description">aaa</p>
      </div>
      <div className="home-whitepaper-container">
        <p className="home-whitepaper-container__title">sss</p>
        <p className="home-whitepaper-container__description">aaa</p>
      </div>
      <a className="home-whitepaper-download"  href={iDownload} download="ColombianDAO's Whitepaper" rel="noreferrer">
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
