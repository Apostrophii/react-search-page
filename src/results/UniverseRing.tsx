import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Image } from './Image';

const universeRing1Image = require('../images/universe-ring-1.1000x562.png');
const universeRing1Base64 = require('../base64-images/universe-ring-1.ts')
  .default;
const universeRing2Image = require('../images/universe-ring-2.1000x562.png');
const universeRing2Base64 = require('../base64-images/universe-ring-2.ts')
  .default;
const universeRing3Image = require('../images/universe-ring-3.1000x562.png');
const universeRing3Base64 = require('../base64-images/universe-ring-3.ts')
  .default;

const Comp: React.SFC = () => {
  return (
    <div>
      <Image
        src={universeRing1Image}
        base64={universeRing1Base64}
        width={1000}
        height={562}
      />
      <Image
        src={universeRing2Image}
        base64={universeRing2Base64}
        width={1000}
        height={562}
      />
      <Image
        src={universeRing3Image}
        base64={universeRing3Base64}
        width={1000}
        height={562}
      />
    </div>
  );
};

const CompResult = {
  names: ['universe ring'],
  component: () => <Comp />,
};

export default CompResult;
