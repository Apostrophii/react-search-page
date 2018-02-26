import { Reducer, combineReducers } from 'redux';
import {
  UPDATE_SEARCH_TERM,
  UPDATE_LAST_HIT,
  UPDATE_INPUT_ANIMATION,
} from './actions';

const searchTerm: Reducer<string> = (state = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      return action.searchTerm;
    default:
      return state;
  }
};

const lastHit: Reducer<string> = (state = '', action) => {
  switch (action.type) {
    case UPDATE_LAST_HIT:
      return action.lastHit;
    default:
      return state;
  }
};

const inputAnimation: Reducer<boolean> = (state = false, action) => {
  switch (action.type) {
    case UPDATE_INPUT_ANIMATION:
      return action.inputAnimation;
    default:
      return state;
  }
};

const reducers = combineReducers({
  searchTerm,
  lastHit,
  inputAnimation,
});

export default reducers;
