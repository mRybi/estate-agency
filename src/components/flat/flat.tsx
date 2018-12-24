import * as React from 'react';
import { DocumentCard, DocumentCardPreview, DocumentCardTitle, DocumentCardActivity, IDocumentCardPreviewProps, ImageFit, Panel, PanelType } from '../../../node_modules/office-ui-fabric-react';
import { FlatDto } from './flatDto';



class State {
  showPanel: boolean;
}

class Props {
  flat: FlatDto
}

export class Flat extends React.Component<Props,State> {
  
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
            name: this.props.flat.location,
            linkProps: {
              href: this.props.flat.photoUrl
            },
            previewImageSrc: this.props.flat.photoUrl,
            iconSrc: 'https://www.google.pl/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FCuBRiuJW8AA2Esr.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Fasjdu3o21021&docid=NyUGGI9lH5WgzM&tbnid=wgRy9syF5zaaQM%3A&vet=10ahUKEwjwrtjhncreAhXDfywKHUlFDucQMwhCKAMwAw..i&w=1200&h=675&hl=pl&bih=661&biw=1366&q=sdadas&ved=0ahUKEwjwrtjhncreAhXDfywKHUlFDucQMwhCKAMwAw&iact=mrc&uact=8',
            imageFit: ImageFit.cover,
            width: 318,
            height: 196
          }
        ]
      };
      return(
        <div>
          <DocumentCard onClick={() => this.setState({showPanel: true}) }  onClickHref="http://bing.com">
              <DocumentCardPreview {...previewProps} />
              <DocumentCardTitle
              title= {this.props.flat.title}
              shouldTruncate={true}
              />
              <DocumentCardActivity
              activity="Created a few minutes ago"
              people={[{ name: this.props.flat.name + ' ' + this.props.flat.surname, profileImageSrc: 'https://www.google.pl/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FCuBRiuJW8AA2Esr.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Fasjdu3o21021&docid=NyUGGI9lH5WgzM&tbnid=wgRy9syF5zaaQM%3A&vet=10ahUKEwjwrtjhncreAhXDfywKHUlFDucQMwhCKAMwAw..i&w=1200&h=675&hl=pl&bih=661&biw=1366&q=sdadas&ved=0ahUKEwjwrtjhncreAhXDfywKHUlFDucQMwhCKAMwAw&iact=mrc&uact=8' }]}
              />
          </DocumentCard>
          <Panel isOpen={this.state.showPanel} 
          onDismiss={() => this.setState({ showPanel: false })}
          type={PanelType.large}
          headerText= {this.props.flat.title}
          >
            <img src={this.props.flat.photoUrl} alt="photo"/>
            
            <h2>{this.props.flat.description}</h2>
            <h2>Cena: {this.props.flat.price} $</h2>
            <h2>Lokacja: {this.props.flat.location}</h2>
            <h2>Powierzchnia: {this.props.flat.mesurement}</h2>
            <h2>Sprzedajacy: {this.props.flat.name} {this.props.flat.surname}</h2>
          </Panel>
      </div>  

      )
  }
}