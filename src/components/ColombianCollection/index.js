import './ColombianCollection.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import collection from '../../asserts/json/collection.json'
import banner from '../../asserts/images/collection-banner-horizontal.jpg'
import React from 'react'
import { Link } from 'react-router-dom'
import { ethers } from 'ethers'
import { ColombianLoading } from '../ColombianLoading'
import { getDataColombianSubGraph } from '../../middleware/getDataColombianSubGraph'
import feedContractAbi from '../../blockchain/hardhat/artifacts/src/blockchain/hardhat/contracts/FeedContract.sol/FeedContract.json'
import addresses from '../../blockchain/environment/contract-address.json'
const feedContractAddress = addresses[0].feedcontract


export function ColombianCollection() {
  const { getItemsForSale } = getDataColombianSubGraph() 
  const [items, setItems] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [currency, setCurrency] = React.useState(0)

  const fetchData = async () => {
    const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth_goerli")
    const feedContract = new ethers.Contract(feedContractAddress, feedContractAbi.abi, provider)
    const currency = await feedContract.getLatestPrice()
    setCurrency(ethers.BigNumber.from(currency).toNumber())    

    setItems(await getItemsForSale())
    setLoading(false)
  }

  React.useEffect(() => {
    fetchData()
  },[])

  return (
    <React.Fragment>
        <div className='collection'>
            <figure className='collection__banner'>
              <img src={banner} alt='banner' />
            </figure>
          <h1 className='collection__title'>Explore NFTs</h1>
          <p className='collection__description'>{collection.description}</p>
          
          { loading ? <div className='collection-container__loading'><ColombianLoading /></div>
            : <div className='collection-cards'>
              {
                images.map((image, index) => (
                  <div key={index} >
                    <div className='collection-cards__card'>
                      <figure>
                        <img src={image.url} alt='logo' />
                      </figure>
                      <div className='collection-cards-description'>
                        <p className='collection-cards-description__title'>{image.title}</p>
                        <p className='collection-cards-description__price'>Price</p>
                        <div className='collection-cards-description-container'>
                          <FontAwesomeIcon icon={faEthereum} className='collection-cards-description-container__attribute' /> 
                          <p className='collection-cards-description-container__attribute'>{image.price}</p>
                          <p className='collection-cards-description-container__currency'>${(currency * image.price).toFixed(2)}</p>
                        </div>
                          <div className='collection-cards-description__buy'>
                            <Link to='/'>Buy now</Link>
                          </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            }
        </div>
    </React.Fragment>
  )
}

const images = [
  {
    title: "Cien años de soledad",
    price: "0.5",
    url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1"
  },
  {
    title: "Cien años de soledad",
    price: "0.05",
    url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1"
  },
  {
    title: "Cien años de soledad",
    price: "0.05",
    url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1"
  },
  {
    title: "Cien años de soledad",
    price: "0.05",
    url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1"
  },
  {
    title: "Cien años de soledad",
    price: "0.05",
    url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1"
  },
  {
    title: "Cien años de soledad",
    price: "0.05",
    url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1"
  },
  {
    title: "Cien años de soledad",
    price: "0.05",
    url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1"
  },
]