import { Reducer, combineReducers } from 'redux';
import { UPDATE_SEARCH_TERM } from './actions';

const searchTerm: Reducer<string> = (state = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      return action.searchTerm;
    default:
      return state;
  }
};

const reducers = combineReducers({
  searchTerm,
});

export default reducers;
