import './ColombianWallet.scss'
import React from 'react';
import { ethers } from 'ethers';
import { useAuth } from '../../hooks/useAuth';

export function ColombianWallet() {
  const [loading, setLoading] = React.useState(false)
  const [isVerified, setIsVerified] = React.useState(false)
  const [isRegisted, setIsRegisted] = React.useState(false)
  const auth = useAuth()

  const connectWallet = async () => {
    if (!window.ethereum?.isMetaMask) {
      alert("Metamask wasn't detected, please install metamask extension")
      return
    }

    if (auth.user.walletAddress === 'Connect your wallet') {
      setLoading(true)
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum)
      await web3Provider.send('eth_requestAccounts', [])
      const accounts = await web3Provider.send('eth_requestAccounts', [])

      const web3Signer = web3Provider.getSigner()
      const chainId = await web3Signer.getChainId()
      if (chainId !== 5) {
        auth.logout()
        alert("Change your network to Goerli's testnet!")
        setLoading(false)
        return
      }
      auth.login({ walletAddress: accounts[0] })
      setLoading(false)
      setIsRegisted(true)
      setIsVerified(true)
    } else {
      auth.logout()
      //dispatch(authLoguotAction())
      setLoading(false)
      setIsRegisted(false)
      setIsVerified(false)

      // if (window.location.href.includes('mypensions') || window.location.href.includes('register')) 
    }
  }

  return (
    <button className='button-wallet' onClick={connectWallet}>
      {loading ? 'loading...' : isRegisted || isVerified ? '...' + String(auth.user.walletAddress).slice(38) : 'Connect your Wallet'}
    </button>
  )
}

