import "./ColombianCollections.scss";
import collection from "../../asserts/json/collection.json";
import banner from "../../asserts/images/collection-banner-horizontal.jpg";
import React from "react";
import { ethers } from "ethers";
import { ColombianLoading } from "../../shared/ColombianLoading";
import { ColombianBanner } from "../../shared/ColombianBanner";
import { ColombianNFTs } from "../ColombianNFTs";
import { ColombianNFT } from "../ColombianNFT";
import { ColombianModal } from '../../shared/ColombianModal';
import { ColombianNFTDetails } from '../ColombianNFTDetails';
import { ColombianSupplyNFTs } from '../ColombianSupplyNFTs';
import { ColombianNFTsResume } from '../ColombianNFTsResume';
import { ColombiaPurchasedNFTDetails } from '../ColombiaPurchasedNFTDetails';
import { useAuth } from '../../hooks/useAuth';
import { getDataColombianSubGraph } from "../../middleware/getDataColombianSubGraph";
import feedContractAbi from "../../blockchain/hardhat/artifacts/src/blockchain/hardhat/contracts/FeedContract.sol/FeedContract.json";
import colombianDaoMarketContractAbi from "../../blockchain/hardhat/artifacts/src/blockchain/hardhat/contracts/ColombianDaoMarketContract.sol/ColombianDaoMarketContract.json";
import addresses from "../../blockchain/environment/contract-address.json";
import { ColombianError } from '../ColombianError';
import { Navigate } from 'react-router-dom';
const feedContractAddress = addresses[0].feedcontract;
const colombianDaoMarketContractAddress =
  addresses[1].colombiandaomarketcontract;

export function ColombianCollections() {
  const { getItemsForSale, getPurchasedItems } = getDataColombianSubGraph();
  const auth = useAuth()
  
  const [itemsForSale, setItemsForSale] = React.useState([]);
  const [purchasedItems, setPurchasedItems] = React.useState([]);
  const [item, setItem] = React.useState([]);
  const [currency, setCurrency] = React.useState(0);
  const [tokenIdCounter, setTokenIdCounter] = React.useState(null)
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [sincronizedItems, setSincronizedItems] = React.useState(true)
  const [openModal, setOpenModal] = React.useState(false)
  const [openModalSummary, setOpenModalSummary] = React.useState(false)

  const fetchData = async () => {
    try {
      let provider = new ethers.providers.JsonRpcProvider(
      "https://rpc.ankr.com/eth_goerli"
    );
    const feedContract = new ethers.Contract(
      feedContractAddress,
      feedContractAbi.abi,
      provider
    );

    provider = new ethers.providers.Web3Provider(window.ethereum);
    const colombianDaoMarketContract = new ethers.Contract(
      colombianDaoMarketContractAddress,
      colombianDaoMarketContractAbi.abi,
      provider
    );

    const currency = await feedContract.getLatestPrice()
    const tokenIdCounter = await colombianDaoMarketContract.tokenIdCounter()
    setTokenIdCounter(ethers.BigNumber.from(tokenIdCounter).toNumber())
    setCurrency(ethers.BigNumber.from(currency).toNumber())

    const filteredSaleForItems = await filterSaleForItems(await getItemsForSale(), await getPurchasedItems())
    await refactorItems(filteredSaleForItems, setItemsForSale)
    await refactorItems(await getPurchasedItems(), setPurchasedItems)
    setSincronizedItems(true)
    console.log('Fetch sincronized')
    setLoading(false)
    } catch(error) {
      setError(error)
    }
  };

  const refactorItems = async (items, state) =>{
    const result = items.map(async (item) => {
      const response = await fetch(item.tokenURI)
      const metadata = await response.json()
      const refactoredItem = {
        itemId: item.itemId,
        title: metadata.title,
        description: metadata.description,
        price: item.price,
        url: metadata.url,
        contract: item.nft,
        tokenId: item.tokenId,
        tokenStandard: metadata.tokenStandard,
        blockchain: metadata.Blockchain,
        buyer: item.buyer
      }
      return refactoredItem
    })
    const refactoredItems = await Promise.all(result)
    state(refactoredItems)
  }


  React.useEffect(() => {
    fetchData();
  }, [sincronizedItems]);

  if(auth.user.walletAddress === "Connect your wallet") {
    return <Navigate to='/'/>
  }

  return (
    <React.Fragment>
      <div className="collection">
        <ColombianBanner banner={banner} />
        <h1 className="collection__title">{collection.title}</h1>
        <p className="collection__description">{collection.description}</p>
        {error && <ColombianError />}
        {!loading && !error && auth.user.isAdmin && 
          <div className="collection-admin">
            <ColombianSupplyNFTs tokenIdCounter={tokenIdCounter} setLoading={setLoading} setSincronizedItems={setSincronizedItems}/>
            <ColombianNFTsResume currency={currency} itemsForSale={itemsForSale} purchasedItems={purchasedItems} setItem={setItem} setOpenModalSummary={setOpenModalSummary}/>
          </div>
        }
        {loading && !error ? (
          <div className="collection-container__loading">
            <ColombianLoading />
          </div>
        ) : (
          <>
          {!loading && !error && !auth.user.isAdmin && <ColombianNFTsResume currency={currency} itemsForSale={itemsForSale} purchasedItems={purchasedItems} setItem={setItem} setOpenModalSummary={setOpenModalSummary}/>}
          <ColombianNFTs currency={currency} setItem={setItem} setLoading={setLoading} setSincronizedItems={setSincronizedItems} setOpenModal={setOpenModal}>
              {itemsForSale ? itemsForSale.map((item, index) => (
                  <ColombianNFT key={index} item={item} />
              )) : "There don't NFTs in sale"}
          </ColombianNFTs>
          </>
        )}
      </div>
      {openModal && (
        <ColombianModal>
          <ColombianNFTDetails item={item} currency={currency} setLoading={setLoading} setSincronizedItems={setSincronizedItems} setOpenModal={setOpenModal} />
        </ColombianModal>
      )}
      {openModalSummary && (
        <ColombianModal>
          <ColombiaPurchasedNFTDetails item={item} currency={currency} setOpenModalSummary={setOpenModalSummary} />
        </ColombianModal>
      )}      
    </React.Fragment>
  );
}

async function filterSaleForItems(itemsForSale, purchasedItems) {   
  let boughtItems = []
  itemsForSale.forEach(itemForSale => {
    purchasedItems.forEach(purchasedItem => {
      if (itemForSale.itemId === purchasedItem.itemId) {
        boughtItems.push(itemForSale)
      }
    });
  });

  const filteredItems = await removeDuplicates([...itemsForSale, ...boughtItems])
  return filteredItems
}

async function removeDuplicates(itemListWithDuplicates) {
    const itemListWithoutDuplicates = itemListWithDuplicates.filter((item,index) => {
      itemListWithDuplicates.splice(index,1)
      const unique = !itemListWithDuplicates.includes(item)
      itemListWithDuplicates.splice(index,0,item)
      return unique
    })

  const saleForItems = await Promise.all(itemListWithoutDuplicates)
  return saleForItems
}
