import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import './index.css';
import './styles/main.scss';
import registerServiceWorker from './registerServiceWorker';
import { initializeIcons } from '@uifabric/icons';
import AllApps from 'src/allApps';
import Apps from './components/platform/Apps';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/nav/Nav';
import { Fabric } from '../node_modules/office-ui-fabric-react';
import { store } from './store'
import { Provider } from 'react-redux'

initializeIcons();

ReactDOM.render(
  <Fabric className="html-root ms-Fabric--selawik">
    <Provider store={store}>
      <BrowserRouter>
        <Apps>  
          <Nav/>
          <AllApps />
        </Apps>
      </BrowserRouter>
    </Provider>
  </Fabric>,
  
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
