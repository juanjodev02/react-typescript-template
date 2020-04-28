export const ADD_COUNTER = 'ADD_COUNTER';
export const MIN_COUNTER = 'MIN_COUNTER';

export interface Counter {
  value: number;
}

export interface CounterState {
  value: number;
}

interface AddCounter {
  type: typeof ADD_COUNTER;
  payload: number;
}

interface MinCounter {
  type: typeof MIN_COUNTER;
  payload: number;
}

export type CounterActionTypes = AddCounter | MinCounter;
