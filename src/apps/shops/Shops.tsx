import * as React from 'react';
import { Grid, Col, Row } from '../../components/Grid';
import { ShopDto } from '../../components/shop/shopDto';
import { Shop } from '../../components/shop/shop';
import { AuctionItemDto, AuctionItemType } from '../../dtos/auctionItem';
import axios, { AxiosResponse } from 'axios';

class State {
  shops: AuctionItemDto[];
}

export class Shops extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { 
      shops: null
    };
  }

  componentDidMount() {
    axios.get('http://localhost:54815/api/users/1/auctionItem')
      .then( (res: AxiosResponse<AuctionItemDto[]>) => {
        let filterdResponse: AuctionItemDto[] = res.data.filter(x => x.auctionType === AuctionItemType.Shop);
        this.setState({
          shops: filterdResponse
        });
      })
      .catch( err => {
        console.log(err);
      });
  }

  public render() {
    if (this.state.shops === null) return null;

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