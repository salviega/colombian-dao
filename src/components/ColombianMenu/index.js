import "./ColombianMenu.scss";
import logo from "../../asserts/images/mind-connection-logo.jpg";
import React from "react";
import { NavLink } from "react-router-dom";

export function ColombianMenu(props) {
  return (
    <header>
      <nav>
        <ul className="main-nav">
          <li className="main-nav__item">
            <figure className="main-nav__logo">
              <img src={logo} alt="logo" />
              <figcaption>Colombian DAO</figcaption>
            </figure>
          </li>
          <div className="main-nav-right">
            {routes.map((route, index) => {
              return <li key={index} className="main-nav-right__item">
                <NavLink
                  className={({ isActive }) => {
                    return isActive ? "main-nav-right__item--active" : ""
                  }}
                  to={route.to}
                >
                  {route.title}
                </NavLink>
              </li>
            })}
              <li className="main-nav-right__button">
                {props.children}
              </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

const routes = [
  {
    to: "/",
    title: "Home",
    private: false,
  },
  {
    to: "/about",
    title: "About Us",
    private: false,
  },
  {
    to: "/play",
    title: "Play",
    private: true,
  },
  {
    to: "/profile",
    title: "Profile",
    private: true,
  },
];
