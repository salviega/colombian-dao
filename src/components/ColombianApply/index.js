import './ColombianApply.scss'
import React from 'react';
import collection from "../../asserts/json/apply.json";
import { useAuth } from '../../hooks/useAuth';
import { ColombianApplyForm } from '../ColombianApplyForm';
import { Navigate } from 'react-router-dom';

export function ColombianApply() {
  const auth = useAuth()
  
  if(auth.user.walletAddress === "Connect your wallet") {
    return <Navigate to='/'/>
  }

  return (
        <div className="apply">
          <h1 className="apply__title">{collection.title}</h1>
          <p className="apply__description">{collection.description}</p>
          <div className="apply__container">
            <ColombianApplyForm auth={auth}/>
          </div>
    </ div>
  )
}
