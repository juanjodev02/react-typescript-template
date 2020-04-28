import * as React from 'react';
import './index.scss';

export interface Props {
  count: number;
}

export default function RadialCounter(props: Props) {
  const { count } = props;
  return <div className="radialContainer"> {count} </div>;
}
