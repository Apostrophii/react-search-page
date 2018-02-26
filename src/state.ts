export interface State {
  searchTerm: string;
  lastHit: string;
  inputAnimation: boolean;
}

export const initialState: State = {
  searchTerm: '',
  lastHit: '',
  inputAnimation: true,
};
