import * as React from 'react';
import Grid from 'src/components/Grid/Grid';
import { Col } from 'src/components/Grid';
import Row from 'src/components/Grid/Row';
import { FlatDto } from 'src/components/flat/flatDto';
import { Flat } from 'src/components/flat/flat';

class State {
  flats: FlatDto[];
}

export class Flats extends React.Component<{},State> {

  constructor(props: {}) {
    super(props);
    this.state = { 
      flats: []
    };
  }

  componentWillMount() {
    var customData  = require('../../mock.json');
    var flatsDto: FlatDto[] = customData.flats;
    // console.log('price',housesDto[0].price);

    this.setState({
      flats: flatsDto
    })
  }

  componentDidMount() {
    var customData  = require('../../mock.json');
    var flatsDto: FlatDto[] = customData.flats;
    // console.log('price',housesDto[0].price);

    this.setState({
      flats: flatsDto
    })
  }

  public render() {
    return (
      <Grid>
      <Col>
        <Row>
          <Flat flat={this.state.flats[0]}/>
        </Row>
        <Row>
          <Flat flat={this.state.flats[1]}/>
        </Row>
      </Col>
      
      <Col>
        <Row>
          <Flat flat={this.state.flats[2]}/>
        </Row>
        <Row>
          <Flat flat={this.state.flats[3]}/>
        </Row>
      </Col>

      <Col>
        <Row>
          <Flat flat={this.state.flats[4]}/>
        </Row>
        <Row>
          <Flat flat={this.state.flats[5]}/>
        </Row>
      </Col>
    </Grid>
    );
  }
}