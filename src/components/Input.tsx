import * as React from 'react';
import { Action } from 'redux';
import { StyleSheet, css } from 'aphrodite';
import { UpdateSearchTermAction, UpdateInputAnimationAction } from '../actions';

export interface Props {
  inputValue: string;
  lastHit: string;
  inputAnimation: boolean;
}

export interface DispatchProps {
  updateSearchTerm: (value: string) => UpdateSearchTermAction;
  updateInputAnimation: (value: boolean) => UpdateInputAnimationAction;
}

export const Input: React.SFC<Props & DispatchProps> = ({
  inputValue,
  updateSearchTerm,
  inputAnimation,
}) => {
  const lowerAnimation = {
    '0%': {
      transform: 'translateY(-150px)',
    },
    '100%': {
      transform: 'translateX(0)',
    },
  };

  const slideAnimation = {
    '0%': {
      width: '20px',
    },
    '90%': {
      width: '100%',
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  };

  const styles = StyleSheet.create({
    container: {
      position: 'relative',
      overflow: 'hidden',
      animationName: [lowerAnimation],
      animationDuration: '1s',
    },
    input: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '5px',
      border: '2px solid black',
      borderRadius: '10px',
      fontSize: '35px',
      position: 'relative',
      backgroundColor: 'transparent',
      ':focus': {
        outline: 'none',
        padding: '3px',
        border: '4px solid #089979',
      },
    },
    box: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 0,
      height: '100%',
      borderRadius: '10px',
      animationDuration: '0.8s',
    },
    firstBox: {
      backgroundColor: '#FF006E',
    },
    firstBoxAnimation: {
      animationName: [slideAnimation],
    },
    secondBox: {
      backgroundColor: '#AED100',
    },
    secondBoxAnimation: {
      animationName: [slideAnimation],
      animationDelay: '0.06s',
    },
    thirdBox: {
      backgroundColor: '#0BEFBE',
    },
    thirdBoxAnimation: {
      animationName: [slideAnimation],
      animationDelay: '0.12s',
    },
  });

  return (
    <div className={css(styles.container)}>
      <div
        className={css(
          styles.box,
          styles.firstBox,
          inputAnimation && styles.firstBoxAnimation,
        )}
      />
      <div
        className={css(
          styles.box,
          styles.secondBox,
          inputAnimation && styles.secondBoxAnimation,
        )}
      />
      <div
        className={css(
          styles.box,
          styles.thirdBox,
          inputAnimation && styles.thirdBoxAnimation,
        )}
      />
      <input
        value={inputValue}
        placeholder=""
        onChange={e => updateSearchTerm((e.target as HTMLInputElement).value)}
        className={css(styles.input)}
      />
    </div>
  );
};
