import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Comp: React.SFC = () => {
  return <div className={css(styles.blue)}>Blue</div>;
};

const styles = StyleSheet.create({
  blue: {
    color: 'blue',
  },
});

const CompResult = {
  names: ['eye color'],
  component: () => <Comp />,
};

export default CompResult;
