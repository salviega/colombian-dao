import "./ColombianSupplyNFTs.scss";
import React from "react";
import { ethers } from "ethers";
import colombianDaoMarketContractAbi from "../../blockchain/hardhat/artifacts/src/blockchain/hardhat/contracts/ColombianDaoMarketContract.sol/ColombianDaoMarketContract.json";
import addresses from "../../blockchain/environment/contract-address.json";
const colombianDaoMarketContractAddress =
  addresses[1].colombiandaomarketcontract;

export function ColombianSupplyNFTs({ tokenIdCounter, setLoading, setSincronizedItems }) {
  const price = React.useRef();
  const tokenURI = React.useRef();
  const tokenId = React.useRef();

  const putInSale = async (event) => {
    event.preventDefault();
    const roundPrice = Math.round(parseInt(price.current.value));
    const parsedTokenId = parseInt(tokenId.current.value);
    try {
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      const web3Signer = web3Provider.getSigner();

      const colombianDaoMarketContract = new ethers.Contract(
        colombianDaoMarketContractAddress,
        colombianDaoMarketContractAbi.abi,
        web3Signer
      );
      const response = await colombianDaoMarketContract.mint(
        tokenURI.current.value
      );
      setLoading(true);

      web3Provider
        .waitForTransaction(response.hash)
        .then(async (_response) => {
          const response2 = await colombianDaoMarketContract.approve(
            colombianDaoMarketContractAddress,
            parsedTokenId
          );
          web3Provider
            .waitForTransaction(response2.hash)
            .then(async (_response2) => {
              const response3 = await colombianDaoMarketContract.sellItem(
                colombianDaoMarketContractAddress,
                parsedTokenId,
                roundPrice
              );
              web3Provider
                .waitForTransaction(response3.hash)
                .then((_response3) => {
                  setTimeout(() => {
                    setSincronizedItems(false);
                  }, 3000);
                })
                .catch((error) => {
                  console.error(error);
                  setLoading(false);
                });
            })
            .catch((error) => {
              console.error(error);
              setLoading(false);
            });
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="supply">
      <h1 className="supply__title">Sell NFT</h1>
      <form className="supply-form" onSubmit={putInSale}>
        <div className="supply-form__container">
          <span>
            <p>Add the price in USD: </p>
            <input
              type="number"
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
              placeholder="https://gateway/ipfs/example-metadata.json"
              ref={tokenURI}
            />
          </span>
          <div className="supply-form__create">
            <button>Create NFT</button> <p className="supply-form__idCounter"> currency token ID: {tokenIdCounter}</p>
          </div>
        </div>
      </form>
    </div>
  );
}
