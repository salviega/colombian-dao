import './ColombianApply.scss'
import React from 'react';
import { useAuth, AuthRoute } from '../../hooks/useAuth';

export function ColombianApply() {
  const auth = useAuth()
  
  return (
    <AuthRoute>
      <h1>Apply for Colombian DAO</h1>
      <p>{auth.user.walletAddress}</p>
    </ AuthRoute>
  )
}
