import "./ColombianCollection.scss"
import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';

export function ColombianCollection() {
  const auth = useAuth()
  const { slug } = useParams()
  const project = slug === projects ? projects : null
  console.log(project)

  if(auth.user.walletAddress === "Connect your wallet") {
    return <Navigate to='/'/>
  }

  return (
    <>
      <h1>Jajaja</h1>
    </>
  )
}

const projects = "biolumen"