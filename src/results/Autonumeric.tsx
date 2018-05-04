import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';

const Comp: React.SFC = () => {
  return (
    <div>
      <div className={css(styles.paragraph)}>
        <a href="https://github.com/autoNumeric/autoNumeric" target="_blank">
          autoNumeric
        </a>{' '}
        is a JavaScript library built to offer highly configurable live
        formatting for international numbers and currencies.
      </div>
      <div className={css(styles.paragraph)}>
        I've contributed to this project by implementing a requested feature by
        which an input's content could be set to default to the range minimum,
        maximum, or some other number when it is cleared by a user.
      </div>
    </div>
  );
};

const CompResult = {
  names: ['autonumeric'],
  component: () => <Comp />,
};

export default CompResult;
