import './MindMenu.scss'
import logo from '../../asserts/images/mind-connection-logo.jpg'
import React from 'react';
import { NavLink } from 'react-router-dom'

export function MindMenu() {
  return (
    <header>
      <nav>
        <ul className='main-nav'>
          <li className='main-nav__item'>
              <figure className='main-nav__logo'>
                  <img src={logo} alt='logo'/>
                  <figcaption>Mind Connection</figcaption>
              </figure>
          </li>
          <div className='main-nav-right'>
            <li className='main-nav-right__item'>
              <NavLink to='/about' className={({isActive}) => isActive ? 'main-nav-right__item--active' : ''}>About us</NavLink>
            </li>
            <li className='main-nav-right__item'>
              <NavLink to='/play' className={({isActive}) => isActive ? 'main-nav-right__item--active' : ''}>Play</NavLink>
            </li>
            <li className='main-nav-right__item'>
              <NavLink to='/login' className={({isActive}) => isActive ? 'main-nav-right__item--active' : ''}>Login</NavLink>
            </li>
            <li className='main-nav-right__item'>
              <NavLink to='/logout' className={({isActive}) => isActive ? 'main-nav-right__item--active' : ''}>Logout</NavLink>
            </li>
            <li className='main-nav-right__button'>
              <button>Connect your wallet</button>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}