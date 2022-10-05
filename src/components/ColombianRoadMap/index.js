import React from "react";
import "./ColombianRoadMap.scss";
import home from "../../asserts/json/home.json";

export function ColombianRoadMap() {
  return (
    <div className="home-roadmap">
      <div className="home-container">
        <div className="home-container__content1">
          <div className="home-roadmap-fase">
            <p className="home-roadmap-fase__subtitle">
              {home.roadmap.fase.dos}
            </p>
            <p className="home-roadmap-fase__title">{home.roadmap.fase.uno}</p>
            <p className="home-roadmap-fase__subtitle">
              {home.roadmap.fase.tres}
            </p>
          </div>
          <div className="home-roadmap-information">
            <p className="home-roadmap-information__title">
              {home.roadmap.title.uno}
            </p>
            <div className="home-roadmap-information__description">
              <strong>
                <p>{home.roadmap.bullet.uno}</p>
              </strong>
              <p>{home.roadmap.description.uno}</p>
            </div>
          </div>
        </div>
        <div className="home-container__content2">
          <div className="home-roadmap-fase">
            <p className="home-roadmap-fase__subtitle">
              {home.roadmap.fase.tres}
            </p>
            <p className="home-roadmap-fase__title">{home.roadmap.fase.dos}</p>
            <p className="home-roadmap-fase__subtitle">
              {home.roadmap.fase.uno}
            </p>
          </div>
          <div className="home-roadmap-information">
            <p className="home-roadmap-information__title">
              {home.roadmap.title.dos}
            </p>
            <div className="home-roadmap-information__description">
              <strong>
                <p>{home.roadmap.bullet.dos}</p>
              </strong>
              <p>{home.roadmap.description.dos}</p>
            </div>
          </div>
        </div>
        <div className="home-container__content3">
          <div className="home-roadmap-fase">
            <p className="home-roadmap-fase__subtitle">
              {home.roadmap.fase.uno}
            </p>
            <p className="home-roadmap-fase__title">{home.roadmap.fase.tres}</p>
            <p className="home-roadmap-fase__subtitle">
              {home.roadmap.fase.dos}
            </p>
          </div>
          <div className="home-roadmap-information">
            <p className="home-roadmap-information__title">
              {home.roadmap.title.tres}
            </p>
            <div className="home-roadmap-information__description">
              <strong>
                <p>{home.roadmap.bullet.tres}</p>
              </strong>
              <p>{home.roadmap.description.tres}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
