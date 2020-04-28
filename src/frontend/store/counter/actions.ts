import { ADD_COUNTER, MIN_COUNTER, CounterActionTypes } from './types';

export function addCounter(value: number): CounterActionTypes {
  return {
    type: ADD_COUNTER,
    payload: value,
  };
}

export function minCounter(value: number): CounterActionTypes {
  return {
    type: MIN_COUNTER,
    payload: value,
  };
}
