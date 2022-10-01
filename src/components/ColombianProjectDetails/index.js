import './ColombianProjectDetails.scss'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export function ColombianProjectDetails({ item:project, setOpenModal }) {
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="collection-modal">
      <div className="collection-modal__cancel" onClick={closeModal}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
        <div className="collection-modal__title">
          <p className="collection-modal-description-container__title">
            {project.name}
          </p>
          <p className="collection-modal-description-container__atrribute">
            {project.slogan}
          </p>
        </div>
      <div className="collection-modal__header">
        <figure>
          <img src={project.img} alt="logo" />
        </figure>
        <div className="collection-modal-description">
          <div className="collection-modal-description-container">
            <p className="collection-modal-description__text">{project.description}</p>
            <p className="collection-modal-description-container__attribute">
              <a href={project.github}>{project.github}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}