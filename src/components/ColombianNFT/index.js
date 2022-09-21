import "./ColombianNFT.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { ethers } from "ethers";
import colombianDaoMarketContractAbi from "../../blockchain/hardhat/artifacts/src/blockchain/hardhat/contracts/ColombianDaoMarketContract.sol/ColombianDaoMarketContract.json";
import addresses from "../../blockchain/environment/contract-address.json";
const colombianDaoMarketContractAddress =
  addresses[1].colombiandaomarketcontract;

export function ColombianNFT({ index, item, currency, setItem, setLoading, setSincronizedItems, setOpenModal }) {
  const onBuy = async () => {
    try {
      const weiPrice = (parseInt(item.price) / currency * 10 ** 18)
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      const web3Signer = web3Provider.getSigner();
      
      const colombianDaoMarketContract = new ethers.Contract(
        colombianDaoMarketContractAddress,
        colombianDaoMarketContractAbi.abi,
        web3Signer
        );
        
      const response = await colombianDaoMarketContract.buyItem(item.itemId, { value: weiPrice.toString(), gasLimit: 250000 })
      setLoading(true)
        
      web3Provider.waitForTransaction(response.hash)
      .then(_response => {
        setSincronizedItems(false)
        })

    } catch(error) {
      setLoading(false)
      console.log(error)
    }
  };

  const onShowDetail = (item) => {
    setItem(item);
    setOpenModal(true);
  };

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
            {(parseInt(item.price) / currency).toFixed(3)}
          </p>
          <p className="collection-card-description-container__currency">
            ${item.price}
          </p>
        </div>
        <div className="collection-card-description__buy">
          <button onClick={onBuy}>Buy now</button>
        </div>
      </div>
    </div>
  );
}
