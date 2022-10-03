import './ColombianHome.scss'
import React from 'react'
import home from "../../asserts/json/home.json";
import banner from "../../asserts/images/home-banner-horizontal.jpg";
import { ColombianBanner } from '../../shared/ColombianBanner';

export function ColombianHome() {
  return (
    <div className="home">
      <ColombianBanner banner={banner} />
      <h1 className="home__title">{home.title}</h1>
      <p className="home__description">{home.description}</p>
</ div>
)
}