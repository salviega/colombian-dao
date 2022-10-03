import "./App.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ethers } from "ethers";
import { useAuth } from "../../hooks/useAuth";
import { ColombianWallet } from "../ColombianWallet";
import { ColombianFooter } from "../ColombianFooter";
import { ColombianMenu } from "../ColombianMenu";
import { ColombianApply } from "../ColombianApply";
import { ColombianHome } from "../ColombianHome";
import { ColombianTeam } from "../ColombianTeam";
import { ColombianAbout } from "../ColombianAbout";
import { ColombianCollections } from "../ColombianCollections";
import { ColombianFound404 } from "../ColombianFound404";
import { ColombianCollection } from '../ColombianCollection';

function App() {
  const auth = useAuth();

  React.useEffect(() => {
    const currentNetwork = async () => {
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      const web3Signer = web3Provider.getSigner();
      const chainId = await web3Signer.getChainId();
      return chainId;
    };
    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        currentNetwork().then((response) => {
          if (response !== 5) {
            auth.logout();
          }
        });
      });
      window.ethereum.on("accountsChanged", () => {
        auth.logout();
      });
    }
  });

  return (
    <div className="app__wrapper">
      <ColombianMenu>
        <ColombianWallet />
      </ColombianMenu>
      <main>
        <div className="main__container">
          <Routes>
            <Route path="/" element={<ColombianHome />} />
            <Route path="/about" element={<ColombianAbout />} />
            <Route path="/collections" element={<ColombianCollections />} />
            <Route path="/collections/:slug" element={<ColombianCollection/>} />
            <Route path="/projects" element={<ColombianTeam />} />
            <Route path="/form" element={<ColombianApply />} />
            <Route path="*" element={<ColombianFound404 />} />
          </Routes>
        </div>
      </main>
      <ColombianFooter />
    </div>
  );
}

export default App;
