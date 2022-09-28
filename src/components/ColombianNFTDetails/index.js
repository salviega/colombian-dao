import "./ColombianNFTDetails.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { faWallet, faXmark } from "@fortawesome/free-solid-svg-icons";
import colombianDaoMarketContractAbi from "../../blockchain/hardhat/artifacts/src/blockchain/hardhat/contracts/ColombianDaoMarketContract.sol/ColombianDaoMarketContract.json";
import addresses from "../../blockchain/environment/contract-address.json";
import { ethers } from "ethers";
const colombianDaoMarketContractAddress =
  addresses[1].colombiandaomarketcontract;

export function ColombianNFTDetails({
  item,
  currency,
  setLoading,
  setSincronizedItems,
  setOpenModal,
}) {
  const buyItem = async () => {
    try {
      const weiPrice = (parseInt(item.price) / currency) * 10 ** 18;
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      const web3Signer = web3Provider.getSigner();

      const colombianDaoMarketContract = new ethers.Contract(
        colombianDaoMarketContractAddress,
        colombianDaoMarketContractAbi.abi,
        web3Signer
      );

      const response = await colombianDaoMarketContract.buyItem(item.itemId, {
        value: weiPrice.toString(),
        gasLimit: 250000,
      });
      setOpenModal(false);
      setLoading(true);

      web3Provider.waitForTransaction(response.hash).then((_response) => {
        setSincronizedItems(false);
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="collection-modal">
      <div className="collection-modal__cancel" onClick={closeModal}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className="collection-modal__header">
        <figure>
          <img src={item.url} alt="logo" />
        </figure>
        <div className="collection-modal-description">
          <p className="collection-modal-description-container__title">
            {item.title}
          </p>
          <p className="collection-modal-description-container__price">Price</p>
          <div className="collection-modal-description-sale">
            <FontAwesomeIcon
              icon={faEthereum}
              className="collection-modal-description-sale__attribute"
            />
            <p className="collection-card-description-sale__attribute">
              {(parseInt(item.price) / currency + 0.001).toFixed(3)}
            </p>
            <p className="collection-modal-description-sale__currency">
              ${parseInt(item.price).toFixed(2)}
            </p>
          </div>
          <div className="collection-modal-description-container">
            <p className="collection-modal-description-container__attribute">
              Contract Address{" "}
              <a href={`https://goerli.etherscan.io/address/${item.contract}`}>
                {" "}
                {item.contract.slice(0, 6) + "..." + item.contract.slice(36)}
              </a>
            </p>
            <p className="collection-modal-description-container__attribute">
              Token ID <p>{item.tokenId}</p>
            </p>
            <p className="collection-modal-description-container__attribute">
              Token Standard <p>{item.tokenStandard}</p>
            </p>
            <p className="collection-modal-description-container__attribute">
              Blockchain <p>{item.blockchain}</p>
            </p>
          </div>
        </div>
      </div>
      <p className="collection-modal-description__text">{item.description}</p>
      <div className="collection-modal-description-buy">
        <button>
          <FontAwesomeIcon
            icon={faWallet}
            className="collection-modal-description-buy__icon"
            onClick={buyItem}
          />
          Buy now
        </button>
      </div>
    </div>
  );
}
