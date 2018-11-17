import * as React from 'react';
import { DocumentCard, DocumentCardPreview, DocumentCardTitle, DocumentCardActivity, IDocumentCardPreviewProps, ImageFit, Panel, PanelType } from '../../../node_modules/office-ui-fabric-react';

class State {
  showPanel: boolean
}

export class House extends React.Component<{},State> {
  
  constructor(props: {}) {
    super(props);
    this.state = { showPanel: false };
  }

  render() {
    const previewProps: IDocumentCardPreviewProps = {
        previewImages: [
          {
            name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
            linkProps: {
              href: 'https://www.google.pl/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FCuBRiuJW8AA2Esr.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Fasjdu3o21021&docid=NyUGGI9lH5WgzM&tbnid=wgRy9syF5zaaQM%3A&vet=10ahUKEwjwrtjhncreAhXDfywKHUlFDucQMwhCKAMwAw..i&w=1200&h=675&hl=pl&bih=661&biw=1366&q=sdadas&ved=0ahUKEwjwrtjhncreAhXDfywKHUlFDucQMwhCKAMwAw&iact=mrc&uact=8'
            },
            previewImageSrc: 'https://www.google.pl/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FCuBRiuJW8AA2Esr.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Fasjdu3o21021&docid=NyUGGI9lH5WgzM&tbnid=wgRy9syF5zaaQM%3A&vet=10ahUKEwjwrtjhncreAhXDfywKHUlFDucQMwhCKAMwAw..i&w=1200&h=675&hl=pl&bih=661&biw=1366&q=sdadas&ved=0ahUKEwjwrtjhncreAhXDfywKHUlFDucQMwhCKAMwAw&iact=mrc&uact=8',
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
              title="House For sale"
              shouldTruncate={true}
              />
              <DocumentCardActivity
              activity="Created a few minutes ago"
              people={[{ name: 'Annie Lindqvist', profileImageSrc: 'https://www.google.pl/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FCuBRiuJW8AA2Esr.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Fasjdu3o21021&docid=NyUGGI9lH5WgzM&tbnid=wgRy9syF5zaaQM%3A&vet=10ahUKEwjwrtjhncreAhXDfywKHUlFDucQMwhCKAMwAw..i&w=1200&h=675&hl=pl&bih=661&biw=1366&q=sdadas&ved=0ahUKEwjwrtjhncreAhXDfywKHUlFDucQMwhCKAMwAw&iact=mrc&uact=8' }]}
              />
          </DocumentCard>
          <Panel isOpen={this.state.showPanel} 
          onDismiss={() => this.setState({ showPanel: false })}
          type={PanelType.large}
          headerText="House Info"
          />
      </div>  

      )
  }
}