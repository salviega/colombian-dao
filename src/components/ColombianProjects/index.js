import './ColombianProjects.scss'
import projects from "../../asserts/json/projects.json";
import banner from "../../asserts/images/my-projects-banner-horizontal.jpg";
import React from 'react'
import { ColombianBanner } from '../../shared/ColombianBanner';

export function ColombianProjects() {
  return(
    <div className="collection">
        <ColombianBanner banner={banner} />
        <h1 className="collection__title">{projects.information.title}</h1>
        <p className="collection__description">{projects.information.description}</p>
    </div>
  )
}