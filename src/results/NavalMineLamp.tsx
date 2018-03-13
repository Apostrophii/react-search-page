import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Image } from './Image';

const navalMineLamp1Image = require('../images/naval-mine-lamp-1.1000x562.png');
const navalMineLamp1Bse64 = require('../base64-images/naval-mine-lamp-1.ts')
  .default;
const navalMineLamp2Image = require('../images/naval-mine-lamp-2.1000x562.png');
const navalMineLamp2Bse64 = require('../base64-images/naval-mine-lamp-2.ts')
  .default;
const navalMineLamp3Image = require('../images/naval-mine-lamp-3.1000x562.png');
const navalMineLamp3Bse64 = require('../base64-images/naval-mine-lamp-3.ts')
  .default;

const Comp: React.SFC = () => {
  return (
    <div>
      <Image
        src={navalMineLamp1Image}
        base64={navalMineLamp1Bse64}
        width={1000}
        height={562}
      />
      <Image
        src={navalMineLamp2Image}
        base64={navalMineLamp2Bse64}
        width={1000}
        height={562}
      />
      <Image
        src={navalMineLamp3Image}
        base64={navalMineLamp3Bse64}
        width={1000}
        height={562}
      />
    </div>
  );
};

const CompResult = {
  names: ['naval mine lamp'],
  component: () => <Comp />,
};

export default CompResult;
