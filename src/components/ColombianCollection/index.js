import './ColombianCollection.scss'
import collection from '../../asserts/json/collection.json'
import banner from '../../asserts/images/collection-banner-horizontal.jpg'
import React from 'react'
// import { ColombianLoading } from '../ColombianLoading'

export function ColombianCollection() {
  // const [loading, setLoading] = React.useState(true)

  return (
    <React.Fragment>
        <div className='collection'>
            <figure className='collection__banner'>
              <img src={banner} alt='banner' />
            </figure>
          <h1 className='collection__title'>Explore NFTs</h1>
          <p className='collection__description'>{collection.description}</p>
          <h3 className='collection__subtitle'>Trending collections</h3>
          <h3 className='collection__subtitle'>Trending collections</h3>
          <h3 className='collection__subtitle'>Trending collections</h3>
          <h3 className='collection__subtitle'>Trending collections</h3>
          <h3 className='collection__subtitle'>Trending collections</h3>
          <h3 className='collection__subtitle'>Trending collections</h3>
          <h3 className='collection__subtitle'>Trending collections</h3>
        </div>
    </React.Fragment>
  )
}