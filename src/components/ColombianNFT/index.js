import "./ColombianNFT.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

export function ColombianNFT({ index, image, currency, setItem, setOpenModal }) {
  
  const onShowDetail = (item) => {
    setItem(item)
    setOpenModal(true)
  }

  return (
    <div className="collection-card">
      <figure>
        <img src={image.url} alt="logo" />
      </figure>
      <div className="collection-card-description">
        <p className="collection-card-description__title">{image.title}</p>
        <p className="collection-card-description__price">Price</p>
        <div className="collection-card-description-container">
          <FontAwesomeIcon
            icon={faEthereum}
            className="collection-card-description-container__attribute"
          />
          <p className="collection-card-description-container__attribute">
            {image.price}
          </p>
          <p className="collection-card-description-container__currency">
            ${(currency * image.price).toFixed(2)}
          </p>
        </div>
        <div className="collection-card-description__buy">
          <button onClick={() => onShowDetail(image)}>Buy now</button>
        </div>
      </div>
    </div>
  );
}
