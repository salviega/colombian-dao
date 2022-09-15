import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

const walletAdmin = '0x70a792ad975aa0977c6e9d55a14f5f2228bbc685'

const AuthContext = React.createContext()

export function AuthProvider({children}) {
  const navigate = useNavigate()
  const [user, setUser] = React.useState({walletAddress: 'Connect your wallet'})
  
  const login = ({ walletAddress }) => {
    const isAdmin = walletAdmin === walletAddress
    setUser({ walletAddress, isAdmin })
  }

  const logout = () => {
    setUser({walletAddress: 'Connect your wallet'})
    navigate('/')
  }

  const auth = { user, login, logout }

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

  export function AuthRoute(props) {
    const auth = useAuth()

    if(auth.user.walletAddress === 'Connect your wallet') {
      return <Navigate to='/' />
    }
    
    return props.children
  }

  export function useAuth() {
    const auth = React.useContext(AuthContext)
    return auth
  }