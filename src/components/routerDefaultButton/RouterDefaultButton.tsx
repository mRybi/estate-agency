import * as React from 'react';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react';
import { RouteComponentProps, withRouter } from 'react-router';

export interface RouterDefaultButtonProps extends IButtonProps {
  to?: string;
  onClick?: () => void;
}

type Props = RouterDefaultButtonProps & RouteComponentProps<{}>;

class RouterDefaultButton extends React.Component<Props> {
  render() {
    return <DefaultButton {...this.props} onClick={() => this.onClick()} />;
  }

  onClick() {
    if (this.props.to != null) this.props.history.push(this.props.to);
    if (this.props.onClick != null) this.props.onClick();
  }
}

export default withRouter(RouterDefaultButton);
