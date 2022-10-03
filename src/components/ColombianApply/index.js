import './ColombianApply.scss'
import React from 'react';
import collection from "../../asserts/json/apply.json";
import banner from "../../asserts/images/apply-banner-horizontal.jpg";
import { useAuth } from '../../hooks/useAuth';
import { ColombianBanner } from '../../shared/ColombianBanner';
import { ColombianApplyForm } from '../ColombianApplyForm';

export function ColombianApply() {
  const auth = useAuth()
  
  return (
        <div className="apply">
          <ColombianBanner banner={banner} />
          <h1 className="apply__title">{collection.title}</h1>
          <p className="apply__description">{collection.description}</p>
          <ColombianApplyForm auth={auth}/>
    </ div>
  )
}
