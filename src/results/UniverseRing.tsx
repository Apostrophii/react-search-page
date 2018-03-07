import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Image } from './Image';

const universeRing1Jpg = require('../images/universe-ring-1.jpg');
const universeRing2Jpg = require('../images/universe-ring-2.jpg');
const universeRing3Jpg = require('../images/universe-ring-3.jpg');

const Comp: React.SFC = () => {
  return (
    <div>
      <Image src={universeRing1Jpg} />
      <Image src={universeRing2Jpg} />
      <Image src={universeRing3Jpg} />
    </div>
  );
};

const CompResult = {
  names: ['universe ring'],
  component: () => <Comp />,
};

export default CompResult;
