import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Nav from './components/nav'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { initializeIcons } from '@uifabric/icons';
import AllApps from 'src/allApps';
import Apps from './components/Platform/Apps';
// import Platform from './components/Platform/Platform';
// import { Router } from '../node_modules/@types/react-router';
import { BrowserRouter } from 'react-router-dom';
import { Nav } from './components/nav/Nav';
initializeIcons();


ReactDOM.render(
  <>
  <Nav />
  <BrowserRouter>
    <Apps>
      <AllApps />
    </Apps>
  </BrowserRouter>
  </>,
  
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
