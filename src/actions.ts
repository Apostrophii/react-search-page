import { Action } from 'redux';

export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export interface UpdateSearchTermAction extends Action {
  searchTerm: string;
}
export function updateSearchTerm(searchTerm: string): UpdateSearchTermAction {
  return {
    type: UPDATE_SEARCH_TERM,
    searchTerm,
  };
}

export const UPDATE_LAST_HIT = 'UPDATE_LAST_HIT';
export interface UpdateLastHitAction extends Action {
  lastHit: string;
}
export function updateLastHit(lastHit: string): UpdateLastHitAction {
  return {
    type: UPDATE_LAST_HIT,
    lastHit,
  };
}

export const UPDATE_INPUT_ANIMATION = 'UPDATE_INPUT_ANIMATION';
export interface UpdateInputAnimationAction extends Action {
  inputAnimation: boolean;
}
export function updateInputAnimation(
  inputAnimation: boolean,
): UpdateInputAnimationAction {
  return {
    type: UPDATE_INPUT_ANIMATION,
    inputAnimation,
  };
}
