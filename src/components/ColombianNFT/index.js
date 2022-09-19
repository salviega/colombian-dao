import "./ColombianNFT.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

export function ColombianNFT({ index, image, currency }) {
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
          <Link to="/">Buy now</Link>
        </div>
      </div>
    </div>
  );
}
