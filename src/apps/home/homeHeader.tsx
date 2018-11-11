import * as React from 'react';
import { Route } from 'react-router';

class HomeAppHeader extends React.Component {
  render() {
    return (
        <Route path="/home" render={() => <>Home</>} />
    );
  }
}

export default HomeAppHeader;
