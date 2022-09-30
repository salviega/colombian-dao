import './ColombianTeam.scss'
import team from "../../asserts/json/team.json";
import banner from "../../asserts/images/my-projects-banner-horizontal.jpg";
import React from 'react'
import { ColombianBanner } from '../../shared/ColombianBanner';
import { ColombianLoading } from '../../shared/ColombianLoading';
import { ColombianProjects } from '../ColombianProjects';
import { ColombianProject } from '../ColombianProject';

export function ColombianTeam() { 
    const [loading, setLoading] = React.useState(false);
  
    return(
    <div className="team">
        <ColombianBanner banner={banner} />
        <h1 className="team__title">{team.information.title}</h1>
        <p className="team__description">{team.information.description}</p>
        {loading ? (
          <div className="team-container__loading">
            <ColombianLoading />
          </div>
        ) : (
          <>
          <ColombianProjects>
              {team.teams ? team.teams.map((project, index) => (
                  <ColombianProject key={index} project={project} />
              )) : "There don'projects"}
          </ColombianProjects>
          </>
        )}
    </div>
  )
}