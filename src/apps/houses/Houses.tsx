import * as React from 'react';
import { House } from '../../components/house/house';
import { Grid, Col } from '../../components/Grid';
import Row from '../../components/Grid/Row';
export class Houses extends React.Component {

  public render() {
 
    return (
      <Grid>
        <Col>
          <Row>
            <House/>
          </Row>
          <Row>
            <House/>
          </Row>
        </Col>
        
        <Col>
          <Row>
            <House/>
          </Row>
          <Row>
            <House/>
          </Row>
        </Col>
        <Col>
          <Row>
            <House/>
          </Row>
          <Row>
            <House/>
          </Row>
        </Col>
        <Col>
          <Row>
            <House/>
          </Row>
          <Row>
            <House/>
          </Row>
        </Col>
      </Grid>
    );
  }
}