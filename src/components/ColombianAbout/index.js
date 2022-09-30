import './ColombianAbout.scss'
import React from 'react'
import banner from '../../asserts/images/about-us-banner-horizontal.jpg'
import about from '../../asserts/json/about.json'
import { ColombianBanner } from '../../shared/ColombianBanner'

export function ColombianAbout() {
  return (
    <React.Fragment>

      <ColombianBanner banner={banner}/>
      <h1 className="about__title">{about.title}</h1>
        <p className="about__description">{about.description}</p>
    </React.Fragment>
  )
}