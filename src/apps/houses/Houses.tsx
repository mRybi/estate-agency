import * as React from 'react';
import { House } from '../../components/house/house';
import { Grid, Col } from '../../components/Grid';
import Row from '../../components/Grid/Row';
import { HouseDto } from '../../components/house/houseDto';
import axios, { AxiosResponse } from 'axios';
import { AuctionItemDto, AuctionItemType } from '../../dtos/auctionItem';

class State {
  houses: AuctionItemDto[];
}

export class Houses extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = { 
      houses: null
    };
  }

  componentDidMount() {
    axios.get('http://localhost:54815/api/users/1/auctionItem')
      .then( (res: AxiosResponse<AuctionItemDto[]>) => {
        let filterdResponse: AuctionItemDto[] = res.data.filter(x => x.auctionType === AuctionItemType.House);
        this.setState({
          houses: filterdResponse
        });
      })
      .catch( err => {
        console.log(err);
      });
  }
  
  public render() {
    if (this.state.houses === null) return null;

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