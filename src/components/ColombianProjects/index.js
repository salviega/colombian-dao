import React from 'react'
import './ColombianProjects.scss'

export function ColombianProjects({children}) {
  return (
    <div className='team-cards'>
      {React.Children.toArray(children).map(child => React.cloneElement(child))}
    </div>
  )
}