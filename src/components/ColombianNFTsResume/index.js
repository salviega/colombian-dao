import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ColombianNFTsResume.scss";

export function ColombianNFTsResume({ currency, purchasedItems, setItem, setOpenModalSummary }) {
  const owner = "0x70A792ad975Aa0977c6E9d55a14f5F2228bBC685";
  const totalItems = purchasedItems.length;

  const income = purchasedItems
    ? purchasedItems.reduce((total, item) => parseInt(item.price) + total, 0)
    : 0;
  const ethIncome = income ? (income / currency + 0.001).toFixed(3) : 0;

  const onShowDetail = (item) => {
    setItem(item);
    setOpenModalSummary(true);
  };

  return (
    <div className="resumen">
      <h1 className="resumen__title">Lastest transaccion</h1>
      <div className="resumen-stats">
        <table className="resumen-stats__table">
          <thead>
            <tr>
              <th>item IDs</th>
              <th>Titles</th>
              <th>Prices</th>
              <th>Pictures</th>
              <th>Buyers</th>
            </tr>
          </thead>
          <tbody>
            {purchasedItems.map((boughtItem, index) => (
              <tr key={index}>
                <td>{boughtItem.itemId}</td>
                <td>{boughtItem.title}</td>
                <td>
                  {(parseInt(boughtItem.price) / currency + 0.001).toFixed(3)}
                </td>
                <td>
                  <p onClick={() => {onShowDetail(boughtItem)}}>show</p>
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
