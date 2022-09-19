import "./ColombianNFTDetails.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { faWallet} from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';

export function ColombianNFTDetails({ item, currency, setOpenModal }) {
  const closeModal = (event) => {
    setOpenModal(false);
  };

  return (
    <div className="collection-modal">
      <div className="collection-modal__header">
        <figure>
          <img src={item.url} alt="logo" />
        </figure>
        <div className="collection-modal-description">
            <p className="collection-modal-description-container__title">
              {item.title}
            </p>
            <p className="collection-modal-description-container__price">
              Price
            </p>
          <div className="collection-modal-description-sale">
            <FontAwesomeIcon
              icon={faEthereum}
              className="collection-modal-description-sale__attribute"
            />
            <p className="collection-card-description-sale__attribute">
              {item.price}
            </p>
            <p className="collection-modal-description-sale__currency">
              ${(currency * item.price).toFixed(2)}
            </p>
          </div>
          <div className="collection-modal-description-container">
            <p className="collection-modal-description-container__attribute">
              Contract Address <Link to={`https://etherscan.io/address/${item.contract}`}> {item.contract.slice(0, 6) + '...' + item.contract.slice(36)}</Link>
            </p>
            <p className="collection-modal-description-container__attribute">
              Token ID <p>{item.tokenId}</p>
            </p>
            <p className="collection-modal-description-container__attribute">
              Token Standard <p>{item.tokenStandard}</p>
            </p>
            <p className="collection-modal-description-container__attribute">
              Blockchain <p>{item.Blockchain}</p>
            </p>
          </div>
        </div>
      </div>
      <p className="collection-modal-description__text">{item.description}</p>
      <div className="collection-modal-description-buy" onClick={closeModal}>
        <button>
          <FontAwesomeIcon
              icon={faWallet}
              className="collection-modal-description-buy__icon"
          />
          Buy now 
        </button>
      </div>
    </div>
  );
}
