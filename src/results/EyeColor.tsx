import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

const EyeColor: React.SFC = () => {
  return <div className={css(styles.blue)}>Blue</div>;
};

const styles = StyleSheet.create({
  blue: {
    color: 'blue',
  },
});

const EyeColorResult = {
  names: ['eye color'],
  component: () => <EyeColor />,
};

export default EyeColorResult;
