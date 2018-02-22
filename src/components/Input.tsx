import * as React from 'react';
import { Action } from 'redux';
import { StyleSheet, css } from 'aphrodite';
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
      placeholder="Luke's search"
      onChange={e => onInputChange((e.target as HTMLInputElement).value)}
      className={css(styles.input)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    boxSizing: 'border-box',
    padding: '5px',
    border: '4px solid black',
    borderRadius: '10px',
    fontSize: '35px',
    width: '100%',
    ':focus': {
      outline: 'none',
      borderColor: 'deepskyblue',
    },
  },
});
