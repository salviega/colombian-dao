import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ColombianNFTsResume.scss";

export function ColombianNFTsResume({
  currency,
  purchasedItems,
  setItem,
  setOpenModalSummary,
}) {
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
      <div className="resumen-list">
        <div className="resumen-list-head">
          <p className="resumen-list-head__title">IDs</p>
          <p className="resumen-list-head__title">Titles</p>
          <p className="resumen-list-head__title">Prices</p>
          <p className="resumen-list-head__title">Pictures</p>
          <p className="resumen-list-head__title">Buyers</p>
        </div>
          {purchasedItems.map((boughtItem, index) => (
            <div className='resumen-list-body' key={index}>
              <p className="resumen-list-body__item">{boughtItem.itemId}</p>
              <p className="resumen-list-body__item">{boughtItem.title}</p>
              <p className="resumen-list-body__item">   {(parseInt(boughtItem.price) / currency + 0.001).toFixed(3)}</p>
              <p className="resumen-list-body__show" onClick={() => {onShowDetail(boughtItem);}}>show</p>
              <a className="resumen-list-body__address" href={`https://goerli.etherscan.io/address/${boughtItem.buyer}`}> {boughtItem.buyer.slice(0, 4) + "..." + boughtItem.buyer.slice(38)}</a>
            </div>
          ))}
          <div className='resumen-list-footer'>
            <p className="resumen-list-footer__item">Total</p>
            <p className="resumen-list-footer__item">{totalItems}</p>
            <div className="resumen-list-footer-value">
              <FontAwesomeIcon
                icon={faEthereum}
                className="resumen-list-footer-value__item"
              />
              <p className="resumen-list-footer-value__item">
                {ethIncome}
              </p>
            </div>
            <a className="resumen-list-footer__wallet" href={`https://goerli.etherscan.io/address/${owner}`}> {owner.slice(0, 4) + "..." + owner.slice(38)}</a>
            <p className="resumen-list-footer__item">{''}</p>
          </div>
      </div>
    </div>
  );
}
