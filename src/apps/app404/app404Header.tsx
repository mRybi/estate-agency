import * as React from 'react';
import { Route } from 'react-router';

class App404Header extends React.Component {
  render() {
    return (
        <Route path="/404" render={() => <>404</>} />
    );
  }
}

export default App404Header;
