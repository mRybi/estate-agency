import * as React from 'react';
import './Nav.css';
import { CommandBar } from '../../../node_modules/office-ui-fabric-react';
import { RouteComponentProps, withRouter } from 'react-router';

class RouterProps {}
type Props = RouteComponentProps<RouterProps>;
class State {

}

class Nav extends React.Component<Props, State> {
  public render() {
    return (
      <div>
        
        <CommandBar
          items={this.getItems()}
          ariaLabel={'Use left and right arrow keys to navigate between commands'}
        />
      </div>

    );
  }

  private getItems = () => {
    return [
      {
        key: 'es-agency',
        name: 'Estate Agency',
        iconProps: {
          iconName: 'CityNext' // DecisionSolid
        },
        onClick: () => this.props.history.push('/home'),
      },
      {
        key: 'houses',
        name: 'Houses',
        iconProps: {
          iconName: 'Home'
        },
        onClick: () => this.props.history.push('/houses')
      },
      {
        key: 'flats',
        name: 'Flats',
        iconProps: { 
          iconName: 'Hotel'
        },
        onClick: () => this.props.history.push('/flats')
      },
      {
        key: 'grounds',
        name: 'Grounds',
        iconProps: {
          iconName: 'FocalPoint'
        },
        onClick: () => this.props.history.push('/grounds')
      },
      {
        key: 'shops',
        name: 'Shops',
        iconProps: {
          iconName: 'Shop'
        },
        onClick: () => this.props.history.push('/shops')
      }
    ];
  };
}

export default withRouter(Nav);
