import "./ColombianCollection.scss";
import collection from "../../asserts/json/collection.json";
import banner from "../../asserts/images/collection-banner-horizontal.jpg";
import React from "react";
import { Outlet } from 'react-router-dom';
import { ethers } from "ethers";
import { ColombianLoading } from "../../shared/ColombianLoading";
import { ColombianBanner } from "../../shared/ColombianBanner";
import { getDataColombianSubGraph } from "../../middleware/getDataColombianSubGraph";
import feedContractAbi from "../../blockchain/hardhat/artifacts/src/blockchain/hardhat/contracts/FeedContract.sol/FeedContract.json";
import addresses from "../../blockchain/environment/contract-address.json";
import { ColombianNFTs } from "../ColombianNFTs";
import { ColombianNFT } from "../ColombianNFT";
import { ColombianModal } from '../../shared/ColombianModal';
import { ColombianNFTDetails } from '../ColombianNFTDetails';
import { useAuth } from '../../hooks/useAuth';
const feedContractAddress = addresses[0].feedcontract;

export function ColombianCollection() {
  const auth = useAuth()
  const { getItemsForSale, getPurchasedItems } = getDataColombianSubGraph();
  const [itemsForSale, setItemsForSale] = React.useState([]);
  const [purchasedItems, setPurchasedItems] = React.useState([]);
  const [item, setItem] = React.useState([]);
  const [currency, setCurrency] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  
  
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
    const currency = await feedContract.getLatestPrice();
    setCurrency(ethers.BigNumber.from(currency).toNumber());
    console.log(await getItemsForSale())
    setItemsForSale(await getItemsForSale());
    setPurchasedItems(await getPurchasedItems());
    setLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

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
          <ColombianNFTs currency={currency} setItem={setItem} setOpenModal={setOpenModal}>
              {images.map((image, index) => (
                  <ColombianNFT key={index} image={image} />
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

const images = [
  {
    title: "Cien años de soledad",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos culpa eaque soluta dicta error et possimus neque velit eius eum illum hic similique molestias perferendis, temporibus reiciendis. Dolor, nemo quidem! Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos culpa eaque soluta dicta error et possimus neque velit eius eum illum hic similique molestias perferendis, temporibus reiciendis. Dolor, nemo quidem! Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    price: "20",
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
    contract: "0x86fc6f6c6702ceF7d3BaE87eF41256715416DB71",
    tokenId: "9597",
    tokenStandard: "ERC-721",
    Blockchain: "Ethereum",
  },
  {
    title: "Cien años de soledad",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos culpa eaque soluta dicta error et possimus neque velit eius eum illum hic similique molestias perferendis, temporibus reiciendis. Dolor, nemo quidem!",
    price: "20",
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
    contract: "0x86fc6f6c6702ceF7d3BaE87eF41256715416DB71",
    tokenId: "9597",
    tokenStandard: "ERC-721",
    Blockchain: "Ethereum",
  },
  {
    title: "Cien años de soledad",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos culpa eaque soluta dicta error et possimus neque velit eius eum illum hic similique molestias perferendis, temporibus reiciendis. Dolor, nemo quidem!",
    price: "20",
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
    contract: "0x86fc6f6c6702ceF7d3BaE87eF41256715416DB71",
    tokenId: "9597",
    tokenStandard: "ERC-721",
    Blockchain: "Ethereum",
  },
  {
    title: "Cien años de soledad",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos culpa eaque soluta dicta error et possimus neque velit eius eum illum hic similique molestias perferendis, temporibus reiciendis. Dolor, nemo quidem!",
    price: "20",
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
    contract: "0x86fc6f6c6702ceF7d3BaE87eF41256715416DB71",
    tokenId: "9597",
    tokenStandard: "ERC-721",
    Blockchain: "Ethereum",
  },
  {
    title: "Cien años de soledad",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos culpa eaque soluta dicta error et possimus neque velit eius eum illum hic similique molestias perferendis, temporibus reiciendis. Dolor, nemo quidem!",
    price: "20",
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
    contract: "0x86fc6f6c6702ceF7d3BaE87eF41256715416DB71",
    tokenId: "9597",
    tokenStandard: "ERC-721",
    Blockchain: "Ethereum",
  },
  {
    title: "Cien años de soledad",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos culpa eaque soluta dicta error et possimus neque velit eius eum illum hic similique molestias perferendis, temporibus reiciendis. Dolor, nemo quidem!",
    price: "20",
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
    contract: "0x86fc6f6c6702ceF7d3BaE87eF41256715416DB71",
    tokenId: "9597",
    tokenStandard: "ERC-721",
    Blockchain: "Ethereum",
  },
  {
    title: "Cien años de soledad",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos culpa eaque soluta dicta error et possimus neque velit eius eum illum hic similique molestias perferendis, temporibus reiciendis. Dolor, nemo quidem!",
    price: "20",
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
    contract: "0x86fc6f6c6702ceF7d3BaE87eF41256715416DB71",
    tokenId: "9597",
    tokenStandard: "ERC-721",
    Blockchain: "Ethereum",
  },
  
];
