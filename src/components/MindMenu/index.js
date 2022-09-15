import './MindMenu.scss';
import logo from '../../asserts/images/mind-connection-logo.jpg';
import React from 'react';
import { NavLink } from 'react-router-dom';

export function MindMenu() {
  return (
    <header>
      <nav>
        <ul className='main-nav'>
          <li className='main-nav__item'>
            <figure className='main-nav__logo'>
              <img src={logo} alt='logo' />
              <figcaption>Colombian DAO</figcaption>
            </figure>
          </li>
          <div className='main-nav-right'>
            {routes.map((route, index) => (
              <li key={index} className='main-nav-right__item'>
              <NavLink
                to={route.to}
                className={({ isActive }) =>
                  isActive ? 'main-nav-right__item--active' : ''
                }
              >
                {route.web}
              </NavLink>
            </li>
            ))}
            { true && 
                <li className='main-nav-right__button'>
                  <button>Connect your wallet</button>
                </li>
            }
            {/* <li className='main-nav-right__item'>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  isActive ? 'main-nav-right__item--active' : ''
                }
              >
                About us
              </NavLink>
            </li>
            <li className='main-nav-right__item'>
              <NavLink
                to='/play'
                className={({ isActive }) =>
                  isActive ? 'main-nav-right__item--active' : ''
                }
              >
                Play
              </NavLink>
            </li>
            <li className='main-nav-right__item'>
              <NavLink
                to='/login'
                className={({ isActive }) =>
                  isActive ? 'main-nav-right__item--active' : ''
                }
              >
                Login
              </NavLink>
            </li>
            <li className='main-nav-right__item'>
              <NavLink
                to='/logout'
                className={({ isActive }) =>
                  isActive ? 'main-nav-right__item--active' : ''
                }
              >
                Logout
              </NavLink>
            </li>
             */}
          </div>
        </ul>
      </nav>
    </header>
  );
}

const routes = [
  {
    to:'/web2',
    web: 'Web2',
    routes: [
      {
        to: '/',
        text: 'Home',
        private: false,
      },
      {
        to: 'about',
        text: 'About US',
        private: false,
      },
      {
        to: '/play',
        text: 'Play',
        private: true,
      },
      {
        to: '/profile',
        text: 'Profile',
        private: true,
      },
      {
        to: '/login',
        text: 'Login',
        private: false,
        publicOnly: true,
      },
      {
        to: '/logout',
        text: 'Logout',
        private: true,
      },
    ],
  },
  {
    to:'/web3',
    web: 'Web3',
    routes: [
      {
        to: '/',
        text: 'Home',
        private: false,
      },
      {
        to: 'about',
        text: 'About US',
        private: false,
      },
      {
        to: '/play',
        text: 'Play',
        private: true,
      },
      {
        to: '/profile',
        text: 'Profile',
        private: true,
      },
    ],
  },
];
