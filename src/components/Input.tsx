import * as React from 'react';
import { Action } from 'redux';
import { UpdateSearchTermAction } from '../actions';

export interface Props {
  inputValue: string;
}

export interface DispatchProps {
  onInputChange: (value: string) => UpdateSearchTermAction;
}

export const Input: React.SFC<Props & DispatchProps> = ({
  inputValue,
  onInputChange,
}) => {
  return (
    <input
      value={inputValue}
      onChange={e => onInputChange((e.target as HTMLInputElement).value)}
    />
  );
};
