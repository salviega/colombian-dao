import "./ColombianProjectDetails.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export function ColombianProjectDetails({ item: project, setOpenModal }) {
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
      <div className="collection-modal-container">
        <div
          className="collection-modal-container__cancel"
          onClick={closeModal}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div className="collection-modal-container-head">
          <p className="collection-modal-container-head__title">
            {project.name}
          </p>
          <p className="collection-modal-container-head__slogan">
            {project.slogan}
          </p>
        </div>
        <div className="collection-modal-container__vector"></div>
        <div className="collection-modal-container-project">
          <figure>
            <img src={project.img} alt="logo" />
          </figure>
          <p className="collection-modal-container-project__description">
            {project.description}
          </p>
        </div>
      </div>
  );
}
