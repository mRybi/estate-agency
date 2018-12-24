import * as React from 'react';
import { Grid } from 'src/components/Grid';
import Col from 'src/components/Grid/Col';
import Row from 'src/components/Grid/Row';
import { Shop } from 'src/components/Shop/shop';
import { ShopDto } from 'src/components/Shop/shopDto';

class State {
  shops: ShopDto[];
}

export class Shops extends React.Component<{},State> {
  constructor(props: {}) {
    super(props);
    this.state = { 
      shops: []
    };
  }

  componentWillMount() {
    var customData  = require('../../mock.json');
    var shopsDto: ShopDto[] = customData.shops;

    this.setState({
      shops: shopsDto
    })
  }

  componentDidMount() {
    var customData  = require('../../mock.json');
    var shopsDto: ShopDto[] = customData.shops;

    this.setState({
      shops: shopsDto
    })
  }
  public render() {
    return (
      <Grid>
      <Col>
        <Row>
          <Shop shop={this.state.shops[0]}/>
        </Row>
        <Row>
          <Shop shop={this.state.shops[1]}/>
        </Row>
      </Col>
      
      <Col>
        <Row>
          <Shop shop={this.state.shops[2]}/>
        </Row>
        <Row>
          <Shop shop={this.state.shops[3]}/>
        </Row>
      </Col>

      <Col>
        <Row>
          <Shop shop={this.state.shops[4]}/>
        </Row>
        <Row>
          <Shop shop={this.state.shops[5]}/>
        </Row>
      </Col>
    </Grid>
    );
  }
}