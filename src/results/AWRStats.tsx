import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Image } from './Image';

const awrStatsFullImage = require('../images/awr-stats-full.1000x623.png');
const awrStatsFullBase64 = require('../base64-images/awr-stats-full.ts')
  .default;
const awrStatsFocusImage = require('../images/awr-stats-focus.1000x624.png');
const awrStatsFocusBase64 = require('../base64-images/awr-stats-focus.ts')
  .default;

const Comp: React.SFC = () => {
  return (
    <div>
      <div className={css(styles.paragraph, styles.essay)}>
        AWR Stats is a site created for Adventist World Radio to help them track
        the consumption of their programs based on region, language, platform,
        and other criteria. My role in this project was working to code the site
        in Angular 1.5 (I joined in as my team was upgrading from Angular 1).
      </div>
      <Image
        src={awrStatsFullImage}
        base64={awrStatsFullBase64}
        width={1000}
        height={623}
      />
      <Image
        src={awrStatsFocusImage}
        base64={awrStatsFocusBase64}
        width={1000}
        height={624}
      />
    </div>
  );
};

const CompResult = {
  names: ['awr stats', 'adventist world radio stats'],
  component: () => <Comp />,
};

export default CompResult;
