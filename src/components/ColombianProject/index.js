import React from 'react';
import './ColombianProject.scss'

export function ColombianProject({key, project, setOpenModal }) {
  const onShowDetail = () => {
    setOpenModal(true);
  };
  return (
    <div className="project-card">
      <figure onClick={onShowDetail}>
        <img src={project.url} alt="logo" />
      </figure>
      <div className="project-card-description">
        <p className="project-card-description__title">{project.title}</p>
        <p className="project-card-description__price">Price</p>
        <div className="project-card-description-container">
          <p className="project-card-description-container__attribute">
            {project.price}
          </p>
          <p className="project-card-description-container__currency">
            ${project.price}
          </p>
        </div>
      </div>
    </div>
  );
}