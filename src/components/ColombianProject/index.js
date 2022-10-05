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
    </div>
  );
}