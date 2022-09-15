import './App.scss';
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../../hooks/useAuth';
import { ColombianWallet } from '../ColombianWallet';
import { ColombianFooter } from '../ColombianFooter';
import { ColombianMenu } from '../ColombianMenu';
import { ColombianApply } from '../ColombianApply';
import { ColombianHome } from '../ColombianHome';
import { ColombianProjects } from '../ColombianProjects';
import { ColombianAbout } from '../ColombianAbout';

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
              <Routes>
                <Route path='/' element={ <ColombianHome />} />
                <Route path='/form' element={ <ColombianApply />} />
                <Route path='/projects' element={ <ColombianProjects />} />
                <Route path='/about' element={ <ColombianAbout />} />
              </Routes>
            </div>
          </main>
          <ColombianFooter />
        </AuthProvider>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
