import './ColombianFound404.scss'
import React from 'react'
import { Link } from 'react-router-dom'

export function ColombianFound404() {
  return (
    <div className='error-container'>
      <div className='error-container__content'>
        <h2 className='error-container__title'>Error 404</h2>
        <h4 className='error-container__description'>Opps! Page not found</h4>
        <p>Sorry, the page you're looking for doesn't exist</p>
        <div className='error-container__button'>
          <Link to='/'>Home</Link>
        </div>
      </div>
    </div>
  )
}