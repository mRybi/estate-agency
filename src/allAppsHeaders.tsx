import * as React from 'react';
import HomeAppHeader from './apps/home/homeHeader';
import App404Header from './apps/app404/app404Header';

export default class AllAppHeaders extends React.Component {
  render() {
    return (
      <>
        <HomeAppHeader />      
        <App404Header />
      </>
    );
  }
}
