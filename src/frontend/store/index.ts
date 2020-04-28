import { counterReducer } from './counter/reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
