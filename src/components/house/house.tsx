import * as React from 'react';
import { DocumentCard, DocumentCardPreview, DocumentCardTitle, DocumentCardActivity, IDocumentCardPreviewProps, ImageFit, Panel, PanelType } from '../../../node_modules/office-ui-fabric-react';
import { HouseDto } from './houseDto';
import { AuctionItemDto } from '../../dtos/auctionItem';

class State {
  showPanel: boolean;
}

class Props {
  house: AuctionItemDto;
}

export class House extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = { 
      showPanel: false
    };
  }

  render() {
    const previewProps: IDocumentCardPreviewProps = {
        previewImages: [
          {
            name: this.props.house.location,
            linkProps: {
              href: this.props.house.photoUrl
            },
            previewImageSrc: this.props.house.photoUrl,
            // tslint:disable-next-line:max-line-length
            iconSrc: 'https://www.google.pl/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FCuBRiuJW8AA2Esr.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Fasjdu3o21021&docid=NyUGGI9lH5WgzM&tbnid=wgRy9syF5zaaQM%3A&vet=10ahUKEwjwrtjhncreAhXDfywKHUlFDucQMwhCKAMwAw..i&w=1200&h=675&hl=pl&bih=661&biw=1366&q=sdadas&ved=0ahUKEwjwrtjhncreAhXDfywKHUlFDucQMwhCKAMwAw&iact=mrc&uact=8',
            imageFit: ImageFit.cover,
            width: 318,
            height: 196
          }
        ]
      };
      return(
        <div>
          <DocumentCard onClick={() => this.setState({showPanel: true})} onClickHref="http://bing.com">
              <DocumentCardPreview {...previewProps} />
              <DocumentCardTitle
                title={this.props.house.title}
                shouldTruncate={true}
              />
              <DocumentCardActivity
                activity="Created a few minutes ago"
                // tslint:disable-next-line:max-line-length
                people={[{ name: 'fake user name'  + ' ' + 'fake user surename', profileImageSrc: 'https://www.google.pl/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FCuBRiuJW8AA2Esr.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Fasjdu3o21021&docid=NyUGGI9lH5WgzM&tbnid=wgRy9syF5zaaQM%3A&vet=10ahUKEwjwrtjhncreAhXDfywKHUlFDucQMwhCKAMwAw..i&w=1200&h=675&hl=pl&bih=661&biw=1366&q=sdadas&ved=0ahUKEwjwrtjhncreAhXDfywKHUlFDucQMwhCKAMwAw&iact=mrc&uact=8' }]}
              />
          </DocumentCard>
          <Panel 
            isOpen={this.state.showPanel} 
            onDismiss={() => this.setState({ showPanel: false })}
            type={PanelType.large}
            headerText={this.props.house.title}
          >
            <img src={this.props.house.photoUrl} alt="photo"/>
            
            <h2>{this.props.house.description}</h2>
            <h2>Cena: {'fake price'} $</h2>
            <h2>Lokacja: {this.props.house.location}</h2>
            <h2>Powierzchnia: {this.props.house.mesurement}</h2>
            <h2>Sprzedajacy: {'fake name'} {'fake surname'}</h2>
          </Panel>
      </div>  
      );
  }
}