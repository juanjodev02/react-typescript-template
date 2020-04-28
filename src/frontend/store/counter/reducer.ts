import {
  ADD_COUNTER,
  MIN_COUNTER,
  CounterActionTypes,
  CounterState,
} from './types';

const initialCounterState: CounterState = {
  value: 0,
};

export function counterReducer(
  state = initialCounterState,
  action: CounterActionTypes
): CounterState {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        value: action.payload,
      };
    case MIN_COUNTER:
      return {
        value: action.payload,
      };
    default:
      return state;
  }
}
