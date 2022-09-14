import React from 'react';
import { HashRouter } from 'react-router-dom';
import { MindMenu } from '../MindMenu';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <MindMenu />
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
