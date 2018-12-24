import * as React from 'react';
import { House } from '../../components/house/house';
import { Grid, Col } from '../../components/Grid';
import Row from '../../components/Grid/Row';
import { HouseDto } from 'src/components/house/houseDto';

class State {
  houses: HouseDto[];
}

export class Houses extends React.Component<{},State> {

  constructor(props: {}) {
    super(props);
    this.state = { 
      houses: []
    };
  }

  componentWillMount() {
    var customData  = require('../../mock.json');
    var housesDto: HouseDto[] = customData.houses;
    // console.log('price',housesDto[0].price);

    this.setState({
      houses: housesDto
    })
  }

  componentDidMount() {
    var customData  = require('../../mock.json');
    var housesDto: HouseDto[] = customData.houses;
    // console.log('price',housesDto[0].price);

    this.setState({
      houses: housesDto
    })
  }
  
  public render() {
 
    return (
      <Grid>
        <Col>
          <Row>
            <House house={this.state.houses[0]}/>
          </Row>
          <Row>
            <House house={this.state.houses[1]}/>
          </Row>
        </Col>
        
        <Col>
          <Row>
            <House house={this.state.houses[2]}/>
          </Row>
          <Row>
            <House house={this.state.houses[3]}/>
          </Row>
        </Col>

        <Col>
          <Row>
            <House house={this.state.houses[4]}/>
          </Row>
          <Row>
            <House house={this.state.houses[5]}/>
          </Row>
        </Col>
      </Grid>
    );
  }
}