import React from 'react';
import RadialCounter from '../../components/RadialCounter';
import ControlCounterButton from '../../components/ControlCounterButton';
import { Props } from './';

import './index.scss';

function Counter(props: Props) {
  const { title, value, addCounter, minCounter } = props;

  const add = () => {
    addCounter(value + 1);
  };

  const min = () => {
    minCounter(value - 1);
  };

  return (
    <div className="counter">
      <div className="counter__title">{title}</div>
      <div className="counter__container">
        <RadialCounter count={value} />
        <ControlCounterButton action={add} type="add" />
        <ControlCounterButton action={min} type="min" />
      </div>
    </div>
  );
}

export default Counter;
