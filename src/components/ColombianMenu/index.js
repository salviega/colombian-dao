import "./ColombianMenu.scss";
import logo from "../../asserts/images/mind-connection-logo.jpg";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';

export function ColombianMenu(props) {
  const auth = useAuth()
  
  return (
    <header>
      <nav>
        <ul className="main-nav">
          <li className="main-nav__item">
              <Link to='/' style={{ textDecoration: 'none', color: 'inherit'}}>
                <figure className="main-nav__logo">
                    <img src={logo} alt="logo" />
                    <figcaption>Colombian DAO</figcaption>
                </figure>
              </Link>
          </li>
          <div className="main-nav-right">
            {routes.map((route, index) => {
              if(route.private && auth.user.walletAddress === 'Connect your wallet') return null 
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
    to: "/about",
    title: "About Us",
    private: false,
  },
  {
    to: "/collection",
    title: "NFTs",
    private: true,
  },
  {
    to: "/projects",
    title: "Projects",
    private: false,
  },
  {
    to: "/form",
    title: "Apply for Colombian DAO",
    private: true,
  },
];
