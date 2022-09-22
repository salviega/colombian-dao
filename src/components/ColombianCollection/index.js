import "./ColombianCollection.scss";
import collection from "../../asserts/json/collection.json";
import banner from "../../asserts/images/collection-banner-horizontal.jpg";
import React from "react";
import { Outlet } from 'react-router-dom';
import { ethers } from "ethers";
import { ColombianLoading } from "../../shared/ColombianLoading";
import { ColombianBanner } from "../../shared/ColombianBanner";
import { ColombianNFTs } from "../ColombianNFTs";
import { ColombianNFT } from "../ColombianNFT";
import { ColombianModal } from '../../shared/ColombianModal';
import { ColombianNFTDetails } from '../ColombianNFTDetails';
import { useAuth } from '../../hooks/useAuth';
import { getDataColombianSubGraph } from "../../middleware/getDataColombianSubGraph";
import feedContractAbi from "../../blockchain/hardhat/artifacts/src/blockchain/hardhat/contracts/FeedContract.sol/FeedContract.json";
import addresses from "../../blockchain/environment/contract-address.json";
const feedContractAddress = addresses[0].feedcontract;

export function ColombianCollection() {
  const auth = useAuth()
  const { getItemsForSale, getPurchasedItems } = getDataColombianSubGraph();
  const [itemsForSale, setItemsForSale] = React.useState([]);
  const [purchasedItems, setPurchasedItems] = React.useState([]);
  const [item, setItem] = React.useState([]);
  const [currency, setCurrency] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [sincronizedItems, setSincronizedItems] = React.useState(true)
  const [openModal, setOpenModal] = React.useState(false)

  const fetchData = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://rpc.ankr.com/eth_goerli"
    );
    const feedContract = new ethers.Contract(
      feedContractAddress,
      feedContractAbi.abi,
      provider
    );

    const currency = await feedContract.getLatestPrice()
    setCurrency(ethers.BigNumber.from(currency).toNumber())
    
    const filteredSaleForItems = await filterSaleForItems(await getItemsForSale(), await getPurchasedItems())
    await refactorItems(filteredSaleForItems, setItemsForSale)
    setLoading(false)
    setSincronizedItems(true)
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
        blockchain: metadata.Blockchain
      }
      return refactoredItem
    })
    const refactoredItems = await Promise.all(result)
    state(refactoredItems)
  }

  React.useEffect(() => {
    fetchData();
    console.log(':D')
  }, [sincronizedItems]);

  return (
    <React.Fragment>
      <div className="collection">
        <ColombianBanner banner={banner} />
        <h1 className="collection__title">{collection.title}</h1>
        <p className="collection__description">{collection.description}</p>
        {auth.user.isAdmin && <Outlet />}
        {loading ? (
          <div className="collection-container__loading">
            <ColombianLoading />
          </div>
        ) : (
          <ColombianNFTs currency={currency} setItem={setItem} setLoading={setLoading} setSincronizedItems={setSincronizedItems} setOpenModal={setOpenModal}>
              {itemsForSale.map((item, index) => (
                  <ColombianNFT key={index} item={item} />
              ))}
          </ColombianNFTs>
        )}
      </div>
      {openModal && (
        <ColombianModal>
          <ColombianNFTDetails item={item} currency={currency} setOpenModal={setOpenModal} />
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
