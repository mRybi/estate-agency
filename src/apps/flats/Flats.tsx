import { Label } from 'office-ui-fabric-react/lib/Label'
import * as React from 'react';

export class Flats extends React.Component {

  aaa =10;

  public render() {
    return (
        <div>
            <Label>{this.aaa}</Label>
            <Label>Flat info</Label>
            <Label>Licytacja</Label>
        </div>
    );
  }
}