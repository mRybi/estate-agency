import * as React from 'react';
import { Grid, Col, Row } from '../../components/Grid';
import { Ground } from '../../components/ground/ground';
import axios, { AxiosResponse } from 'axios';
import { AuctionItemDto, AuctionItemType } from '../../dtos/auctionItem';

class State {
  grounds: AuctionItemDto[];
}

export class Grounds extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { 
      grounds: null
    };
  }

  componentDidMount() {
    axios.get('http://localhost:54815/api/users/1/auctionItem')
      .then( (res: AxiosResponse<AuctionItemDto[]>) => {
        let filterdResponse: AuctionItemDto[] = res.data.filter(x => x.auctionType === AuctionItemType.Ground);
        this.setState({
          grounds: filterdResponse
        });
      })
      .catch( err => {
        console.log(err);
      });
  }

  public render() {
    if (this.state.grounds === null) return null;

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