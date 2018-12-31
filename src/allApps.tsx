import * as React from 'react';

import { Switch, Route, Redirect } from 'react-router';

import { App404 } from './apps/app404';
import { Home } from './apps/home';
import Houses from './apps/houses';
import Flats from './apps/flats';
import Grounds from './apps/grounds';
import Shops from './apps/shops';

export default class AllApps extends React.Component {
  render() {
    return (
      <Switch>
        <Redirect exact={true} from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/houses" component={Houses} />
        <Route path="/flats" component={Flats} />
        <Route path="/grounds" component={Grounds} />
        <Route path="/shops" component={Shops} />
        <Route path="/404" component={App404} />
        <Redirect from="*" to="/404" />
      </Switch>
    );
  }
}