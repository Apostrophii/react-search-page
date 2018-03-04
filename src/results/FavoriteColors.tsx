import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Comp: React.SFC = () => {
  return (
    <div>
      I actually don't have a favorite color, but my favorite color combination
      is <span className={css(styles.black)}>black</span> and{' '}
      <span className={css(styles.green)}>green</span>
    </div>
  );
};

const styles = StyleSheet.create({
  black: {
    fontWeight: 600,
    color: 'black',
    textShadow: 'white 0px 0px 15px',
  },
  green: {
    fontWeight: 600,
    color: 'limegreen',
  },
});

const CompResult = {
  names: ['favorite color'],
  component: () => <Comp />,
};

export default CompResult;
