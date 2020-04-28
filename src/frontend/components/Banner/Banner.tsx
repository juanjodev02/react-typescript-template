import * as React from 'react';
import './Banner.scss';

interface IProps {
  name: string;
}

export default class Banner extends React.Component<IProps> {
  public render() {
    return (
      <div className="banner">
        <h1>Hola juanjo</h1>
        <span className="banner__text">
          Hello World bitch s {this.props.name}!
        </span>
      </div>
    );
  }
}
