import './app404.scss';
import * as React from 'react';
import { Route } from 'react-router';
import { RouterDefaultButton } from '../../components/routerDefaultButton';

class Dummy extends React.Component {
  render() {
    return (
      <div>
        <div className="home-screen">
          <div className="ms-Grid">
            <div className="ms-Grid-row ms-font-su" id="superheader">
              Error 404
            </div>
            <div className="ms-Grid-row ms-sm0 ms-md0 ms-lg6">
              <p>The page you have requested does not exist.</p>
              <p>It might have been moved to another location, or your access to some object in the system can be withdrawn by administrator.</p>
            </div>
            <div className="ms-Grid-row mt-20">
              <RouterDefaultButton iconProps={{ iconName: 'Home' }} className="icon-btn" text="Home" to="/home" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default class App404 extends React.Component {
  render() {
    return (
      <div>
        <Route excat={true} path="/404" component={Dummy} />
      </div>
    );
  }
}
