import * as React from 'react';
import { Grid } from 'src/components/Grid';
import Col from 'src/components/Grid/Col';
import Row from 'src/components/Grid/Row';
import { GroundDto } from 'src/components/ground/groundDto';
import { Ground } from 'src/components/ground/ground';

class State {
  grounds: GroundDto[];
}

export class Grounds extends React.Component<{},State> {
  constructor(props: {}) {
    super(props);
    this.state = { 
      grounds: []
    };
  }

  componentWillMount() {
    var customData  = require('../../mock.json');
    var groundsDto: GroundDto[] = customData.grounds;
    // console.log('price',housesDto[0].price);

    this.setState({
      grounds: groundsDto
    })
  }

  componentDidMount() {
    var customData  = require('../../mock.json');
    var groundsDto: GroundDto[] = customData.grounds;

    this.setState({
      grounds: groundsDto
    })
  }
  public render() {
    return (
      <Grid>
      <Col>
        <Row>
          <Ground ground={this.state.grounds[0]}/>
        </Row>
        <Row>
          <Ground ground={this.state.grounds[1]}/>
        </Row>
      </Col>
      
      <Col>
        <Row>
          <Ground ground={this.state.grounds[2]}/>
        </Row>
        <Row>
          <Ground ground={this.state.grounds[3]}/>
        </Row>
      </Col>

      <Col>
        <Row>
          <Ground ground={this.state.grounds[4]}/>
        </Row>
        <Row>
          <Ground ground={this.state.grounds[5]}/>
        </Row>
      </Col>
    </Grid>
    );
  }
}