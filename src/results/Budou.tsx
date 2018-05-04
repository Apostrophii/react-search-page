import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';

const Comp: React.SFC = () => {
  return (
    <div>
      <div className={css(styles.paragraph)}>
        <a href="https://github.com/google/budou" target="_blank">
          Budou
        </a>{' '}
        is a Python library which uses natural language processing (via the
        Google Cloud Natural Language API) to break Chinese, Japanese, and
        Korean text into word chunks for the purpose of more intelligent line
        breaks and better readability.
      </div>
      <div className={css(styles.paragraph)}>
        I have contributed to the project so far by migrating Budou's caching
        system from shelve to pickle and by implementing a feature by which
        users can designate the maximum word size to apply Budou's formatting to
        (which is particularily important when dealing with Japanese katakana
        words which can be significantly longer than the rest of a script).
      </div>
    </div>
  );
};

const CompResult = {
  names: ['budou'],
  component: () => <Comp />,
};

export default CompResult;
