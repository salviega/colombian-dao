import "./ColombianHome.scss";
import React from "react";
import logo from "../../asserts/images/colombian-dao-logo2.svg";
import home from "../../asserts/json/home.json";
import banner from "../../asserts/images/banner-collection-horizontal.jpg";
import { ColombianWallet } from "../ColombianWallet";
import { ColombianRoadMap } from '../ColombianRoadMap';
import { ColombianTeam } from '../ColombianTeam';
import { ColombianWhitePaper } from '../ColombianWhitePaper';
const gifPaola = require('../../asserts/gif/gifPaola.gif')
const gifSantiago = require('../../asserts/gif/gifSantiago.gif')


export function ColombianHome() {

  return (
    <div className="home">
      <div className="home-definition">
        <div className="home-definition-description">
          <h2 className="home-definition-description__title">{home.title}</h2>
          <p className="home-definition-description__description">
            {home.description}
          </p>
        </div>
        <figure>
          <img src={logo} alt="isologo" />
        </figure>
      </div>
      <div className="home-snapshot">
        <p className="home-snapshot__subtitle">{home.snapshot.subtitle}</p>
        <h3 className="home-snapshot__title">{home.snapshot.title}</h3>
        <div className="home-snapshot__vector"></div>
        <div className="home-gallery">
          <div className="home-gallery__container">
            <figure>
              <img src={banner} alt="imagen" />
            </figure>
            <figure>
              <img src={banner} alt="imagen" />
            </figure>
            <figure>
              <img src={banner} alt="imagen" />
            </figure>
            <figure>
              <img src={banner} alt="imagen" />
            </figure>
          </div>
          <ColombianWallet />
        </div>
      </div>
      <div className="home-phrase">
        <h2>Connexition phrase</h2>
      </div>
      <div className='home-apply'>
        <div className='home-apply-container'>
          <figure>
            <img src={banner} alt="imagen" />
          </figure>
        </div>
        <div className='home-apply-description'>
          <p className="home-apply-description__subtitle">{home.apply.subtitle}</p>
          <h3 className="home-apply-description__title">{home.apply.title}</h3>
          <ColombianWallet />
        </div>
      </div>
      <ColombianRoadMap />
      <ColombianTeam/>
      <div className='home-members'>
        <p className='home-members__title'>{home.members.title}</p>
        <div className='home-members__vector'></div>
        <div className="home-members__container">
            <figure>
              <img src={gifPaola} alt="imagen" />
            </figure>
            <figure>
              <img src={gifSantiago} alt="imagen" />
            </figure>
            <figure>
              <img src={banner} alt="imagen" />
            </figure>
            <figure>
              <img src={banner} alt="imagen" />
            </figure>
          </div>
      </div>
      <ColombianWhitePaper home={home}/>
    </div>
  );
}
