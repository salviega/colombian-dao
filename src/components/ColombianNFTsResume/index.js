import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ColombianNFTsResume.scss";

export function ColombianNFTsResume({ auth, currency, purchasedItems }) {
  console.log(purchasedItems)
  const owner = "0x70A792ad975Aa0977c6E9d55a14f5F2228bBC685";
  const totalItems = purchasedItems.length;

  const income = purchasedItems
    ? purchasedItems.reduce((total, item) => parseInt(item.price) + total, 0)
    : 0;
  const ethIncome = income ? (income / currency + 0.001).toFixed(3) : 0;

  return (
    <div className='collection-container'>
      <h1 className="collection-stats__title">Bought NFTs</h1>
      <div className="collection-stats">
        <table className="collection-stats__table">
          <thead>
            <tr>
              <th>item IDs</th>
              <th>Titles</th>
              <th>Prices</th>
              <th>Pictures</th>
              <th>Buyers</th>
            </tr>
          </thead>
          <tbody id="offerd-table">
            {purchasedItems.map((boughtItem, index) => (
              <tr key={index}>
                <td>{boughtItem.itemId}</td>
                <td>{boughtItem.title}</td>
                <td>
                  {(parseInt(boughtItem.price) / currency + 0.001).toFixed(3)}
                </td>
                <td>
                  <a href={boughtItem.url}>show</a>
                </td>               
                <td>
                  <a href={`https://goerli.etherscan.io/address/${boughtItem.buyer}`}>{boughtItem.buyer.slice(0, 4) + "..." + boughtItem.buyer.slice(38)}</a>
                </td>
              </tr>
            ))}
            <tr>
              <td>Total</td>
              <td>{totalItems}</td>
              <td>
                <div className="collection-stats-total">
                  <FontAwesomeIcon
                    icon={faEthereum}
                    className="collection-stats-total__attribute"
                  />
                  <p className="collection-modal-description-sale__attribute">{ethIncome}</p>
                </div>
              </td>
              <td>
                <a href={`https://goerli.etherscan.io/address/${owner}`}>
                  {owner.slice(0, 4) + "..." + owner.slice(38)}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
