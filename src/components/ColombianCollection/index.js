import './ColombianCollection.scss'
import collection from '../../asserts/json/collection.json'
import banner from '../../asserts/images/collection-banner-horizontal.jpg'
import React from 'react'
import { ColombianLoading } from '../ColombianLoading'
import { getDataColombianSubGraph } from '../../middleware/getDataColombianSubGraph'

export function ColombianCollection() {
  const { getItemsForSale } = getDataColombianSubGraph() 
  const [items, setItems] = React.useState([])
  const [loading, setLoading] = React.useState(true)

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
            : <div>
              <h3 className='collection__subtitle'>Trending collections</h3>
              <h3 className='collection__subtitle'>Trending collections</h3>
              <h3 className='collection__subtitle'>Trending collections</h3>
              <h3 className='collection__subtitle'>Trending collections</h3>
              <h3 className='collection__subtitle'>Trending collections</h3>
              <h3 className='collection__subtitle'>Trending collections</h3>
              <h3 className='collection__subtitle'>Trending collections</h3>
            </div>
            }
        </div>
    </React.Fragment>
  )
}