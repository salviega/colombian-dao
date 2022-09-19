import "./ColombianNFTs.scss"
import React from 'react'

export function ColombianNFTs({ children, currency, setItem, setOpenModal}) {
  
  return (
    <div className='collection-cards'>
      {React.Children.toArray(children).map(child => React.cloneElement(child, { currency, setItem, setOpenModal }))}
    </div>
  )
}