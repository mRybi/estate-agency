import * as React from 'react';
import { Grid, Col, Row } from '../../components/Grid';
import { Flat } from '../../components/flat/flat';
import axios, { AxiosResponse } from 'axios';
import { AuctionItemDto, AuctionItemType } from '../../dtos/auctionItem';

class State {
  auctionItems: AuctionItemDto[];
}

class Flats extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      auctionItems: null
    };
  }

  componentDidMount() {
    axios.get('http://localhost:54815/api/users/1/auctionItem')
      .then( (res: AxiosResponse<AuctionItemDto[]>) => {
        let filterdResponse: AuctionItemDto[] = res.data.filter(x => x.auctionType === AuctionItemType.Flat);
        this.setState({
          auctionItems: filterdResponse
        });
      })
      .catch( err => {
        console.log(err);
      });
  }

  public render() {
    if (this.state.auctionItems === null) return null;
    console.log(this.state.auctionItems[0]);

    return (
      <Grid>
      <Col>
        <Row>
          <Flat flat={this.state.auctionItems[0]}/>
        </Row>
        <Row>
          <Flat flat={this.state.auctionItems[1]}/>
        </Row>
      </Col>
      <Col>
        <Row>
          <Flat flat={this.state.auctionItems[2]}/>
        </Row>
        <Row>
          <Flat flat={this.state.auctionItems[3]}/>
        </Row>
      </Col>

      <Col>
        <Row>
          <Flat flat={this.state.auctionItems[4]}/>
        </Row>
        <Row>
          <Flat flat={this.state.auctionItems[5]}/>
        </Row>
      </Col>
    </Grid>
    );
  }
}

export default Flats;