import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';

const Comp: React.SFC = () => {
  return (
    <div>
      <div className={css(styles.paragraph)}>This very site!</div>
      <div className={css(styles.paragraph)}>
        I created this site as a personal exercise to improve my experience with
        React and Redux. I was also interested in trying out a new format for my
        personal site and thus the search layout. (Let me know if you have any
        feedback, especially if it’s constructive criticism.)
      </div>
    </div>
  );
};

const CompResult = {
  names: ['search site'],
  component: () => <Comp />,
};

export default CompResult;
