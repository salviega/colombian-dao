import "./ColombianBanner.scss"
import React from 'react'

export function ColombianBanner({banner}) {
  return (
    <figure className='collection__banner'>
      <img src={banner} alt='banner' />
    </figure>
  )
}