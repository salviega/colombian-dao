import React from 'react';
import './ColombianProject.scss'

export function ColombianProject({ key, project, setItem, setOpenModal, img:logo }) {
  const onShowDetail = (project, logo) => {
    setItem({...project, logo})
    setOpenModal(true);
  };

  return (
    <div className="project-card">
      <figure onClick={()=> onShowDetail(project , logo)}>
        <img src={logo} alt="logo" />
      </figure>
    </div>
  );
}