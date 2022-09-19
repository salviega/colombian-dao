import "./ColombianCollection.scss";
import collection from "../../asserts/json/collection.json";
import banner from "../../asserts/images/collection-banner-horizontal.jpg";
import React from "react";
import { ethers } from "ethers";
import { ColombianLoading } from "../../shared/ColombianLoading";
import { ColombianBanner } from "../../shared/ColombianBanner";
import { getDataColombianSubGraph } from "../../middleware/getDataColombianSubGraph";
import feedContractAbi from "../../blockchain/hardhat/artifacts/src/blockchain/hardhat/contracts/FeedContract.sol/FeedContract.json";
import addresses from "../../blockchain/environment/contract-address.json";
import { ColombianNFTs } from "../ColombianNFTs";
import { ColombianNFT } from "../ColombianNFT";
const feedContractAddress = addresses[0].feedcontract;

export function ColombianCollection() {
  const { getItemsForSale } = getDataColombianSubGraph();
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [currency, setCurrency] = React.useState(0);

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

    setItems(await getItemsForSale());
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
        {loading ? (
          <div className="collection-container__loading">
            <ColombianLoading />
          </div>
        ) : (
          <ColombianNFTs currency={currency}>
            {images.map((image, index) => (
              <ColombianNFT key={index} image={image} />
            ))}
          </ColombianNFTs>
        )}
      </div>
    </React.Fragment>
  );
}

const images = [
  {
    title: "Cien años de soledad",
    price: "0.05",
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
  },
  {
    title: "Cien años de soledad",
    price: "0.05",
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
  },
  {
    title: "Cien años de soledad",
    price: "0.05",
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
  },
  {
    title: "Cien años de soledad",
    price: "0.05",
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
  },
  {
    title: "Cien años de soledad",
    price: "0.05",
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
  },
  {
    title: "Cien años de soledad",
    price: "0.05",
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
  },
  {
    title: "Cien años de soledad",
    price: "0.05",
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
  },
];
