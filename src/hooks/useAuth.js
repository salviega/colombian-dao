import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

const walletAdmin = "0x70a792ad975aa0977c6e9d55a14f5f2228bbc685";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  const initialState = JSON.parse(localStorage.getItem('wallet')) || 'Connect your wallet'
  const [user, setUser] = React.useState({ ...initialState || initialState });

  const login = ({ walletAddress }) => {
    let isAdmin = false
    if(walletAdmin === walletAddress) isAdmin = true
    const stringifiedUser = JSON.stringify({ walletAddress, isAdmin })
    localStorage.setItem('wallet', stringifiedUser)
    setUser({ walletAddress, isAdmin });
  };

  const logout = () => {
    localStorage.clear()
    setUser({ walletAddress: "Connect your wallet" });
    navigate("/");
  };

  const auth = { user, login, logout };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function AuthRoute(props) {
  const auth = useAuth();

  if (auth.user.walletAddress === "Connect your wallet") {
    return <Navigate to="/" />;
  }

  return props.children;
}

export function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}
