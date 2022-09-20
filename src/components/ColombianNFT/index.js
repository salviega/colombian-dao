import "./ColombianNFT.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

export function ColombianNFT({ index, item, currency, setItem, setOpenModal }) {
  
  const onShowDetail = (item) => {
    console.log(item)
    setItem(item)
    setOpenModal(true)
  }

  return (
    <div className="collection-card">
      <figure onClick={() => onShowDetail(item)}>
        <img src={item.url} alt="logo" />
      </figure>
      <div className="collection-card-description">
        <p className="collection-card-description__title">{item.title}</p>
        <p className="collection-card-description__price">Price</p>
        <div className="collection-card-description-container">
          <FontAwesomeIcon
            icon={faEthereum}
            className="collection-card-description-container__attribute"
          />
          <p className="collection-card-description-container__attribute">
            {((parseInt(item.price) / currency)).toFixed(3)}
          </p>
          <p className="collection-card-description-container__currency">
            ${item.price}
          </p>
        </div>
        <div className="collection-card-description__buy">
          <button>Buy now</button>
        </div>
      </div>
    </div>
  );
}
