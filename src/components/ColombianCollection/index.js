import './ColombianCollection.scss'
import collection from '../../asserts/json/collection.json'
import banner from '../../asserts/images/collection-banner-horizontal.jpg'
import React from 'react'
import { ColombianLoading } from '../ColombianLoading'
import { getDataColombianSubGraph } from '../../middleware/getDataColombianSubGraph'

export function ColombianCollection() {
  const { getItemsForSale } = getDataColombianSubGraph() 
  const [items, setItems] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const fetchData = async () => {
    setItems(await getItemsForSale())
    setLoading(false)
  }

  React.useEffect(() => {
    fetchData()
  })

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
                  <>
                    <div key={index} className='collection-cards__card'>
                      <figure>
                        <img src={image} alt='logo' />
                      </figure>
                      <div className='collection-cards__description'>

                      </div>
                    </div>
                  </>
                ))
              }
            </div>
            }
        </div>
    </React.Fragment>
  )
}

const images = [
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2014%2F04%2Fgabriel-garcia-marquez.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1",
]