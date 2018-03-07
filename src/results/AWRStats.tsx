import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Image } from './Image';

const awrStatsFullPng = require('../images/awr-stats-full.png');
const awrStatsFocus = require('../images/awr-stats-focus.png');

const Comp: React.SFC = () => {
  return (
    <div>
      <div className={css(styles.paragraph)}>
        AWR Stats is a site created for Adventist World Radio to help them track
        the consumption of their programs based on region, language, platform,
        or other criteria. My role in this project was working to code the site
        in Angular 1.5 (I joined as my team was upgrading from Angular 1).
      </div>
      <Image src={awrStatsFullPng} />
      <Image src={awrStatsFocus} />
    </div>
  );
};

const CompResult = {
  names: ['awr stats', 'adventist world radio stats'],
  component: () => <Comp />,
};

export default CompResult;
