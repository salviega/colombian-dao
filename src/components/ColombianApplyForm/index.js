import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ColombianApplyForm.scss";

export function ColombianApplyForm() {
  const price = React.useRef();
  const tokenURI = React.useRef();
  const tokenId = React.useRef();

  const putInSale = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="supply__container">
      <div className="supply">
        <h1 className="supply__title">Submit Project</h1>
        <form className="supply-form" onSubmit={putInSale}>
          <div className="supply-form__container">
            <div className='supply-form-box'>
            <FontAwesomeIcon icon={faExclamationCircle} className='supply-form-box__exclamation'/>
              jajaj
            </div>
            <span>
              <p>Add the price in USD: </p>
              <input
                type="number"
                required
                min="1"
                step="0.01"
                placeholder="10"
                ref={price}
              />
            </span>
            <span>
              <p>Add the token ID: </p>
              <input
                type="number"
                required
                min="0"
                step="0"
                placeholder="1"
                ref={tokenId}
              />
            </span>
            <span>
              <p>Add the metadata of the new NFT: </p>
              <input
                type="url"
                required
                placeholder="https://gateway/ipfs/example-metadata.json"
                ref={tokenURI}
              />
            </span>
            <div className="supply-form__create">
              <button>Submit</button>{" "}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
