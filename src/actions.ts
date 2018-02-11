import { Action } from 'redux';

export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';

export interface UpdateSearchTermAction extends Action {
  type: string;
  searchTerm: string;
}

export function updateSearchTerm(searchTerm: string): UpdateSearchTermAction {
  return {
    type: UPDATE_SEARCH_TERM,
    searchTerm,
  };
}
