import React from 'react';
import { HashRouter } from 'react-router-dom';
import { MindFooter } from '../MindFooter';
import { MindMenu } from '../MindMenu';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <MindMenu />
        <main>
          <div className='main__container'>
            dsdsds
          </div>
        </main>
        <MindFooter />
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
