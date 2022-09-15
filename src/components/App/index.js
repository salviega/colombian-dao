import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ColombianWallet } from '../ColombianWallet';
import { ColombianFooter } from '../ColombianFooter';
import { ColombianMenu } from '../ColombianMenu';
import { AuthProvider } from '../../hooks/useAuth';
import './App.scss';

function App() {
  
  return (
    <React.Fragment>
      <HashRouter>
        <AuthProvider>
          <ColombianMenu>
            <ColombianWallet />
          </ColombianMenu>
          <main>
            <div className='main__container'>
              dsdsds
            </div>
          </main>
          <ColombianFooter />
        </AuthProvider>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
