import * as React from 'react';
import Counter from '../../containers/Counter';
import './index.scss';

export default function Home() {
  return (
    <div className="home">
      <Counter title="Awesome counter" />
    </div>
  );
}
