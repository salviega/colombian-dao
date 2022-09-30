import React from 'react';
import './ColombianProject.scss'

export function ColombianProject({key, project, setOpenModal }) {
  const onShowDetail = () => {
    setOpenModal(true);
  };
  return (
    <div className="project-card">
      <figure onClick={onShowDetail}>
        <img src={project.img} alt="logo" />
        <p className="gray-text">Jajaja</p>
      </figure>
    </div>
  );
}