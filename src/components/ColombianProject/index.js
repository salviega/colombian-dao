import React from 'react';
import './ColombianProject.scss'

export function ColombianProject({ key, project, setItem, setOpenModal }) {
  
  const onShowDetail = (project) => {
    setItem(project)
    setOpenModal(true);
  };

  return (
    <div className="project-card">
      <figure onClick={()=> onShowDetail(project)}>
        <img src={project.img} alt="logo" />
      </figure>
      <figcaption className="project-card-onhover">
        <p className="project-card-onhover__title">{project.name}</p>
        <p className="project-card-onhover__description">{project.slogan}</p>
      </figcaption>
    </div>
  );
}