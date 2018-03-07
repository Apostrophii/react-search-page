import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Image } from './Image';

const navalMineLamp1 = require('../images/naval-mine-lamp-1.jpg');
const navalMineLamp2 = require('../images/naval-mine-lamp-2.jpg');
const navalMineLamp3 = require('../images/naval-mine-lamp-3.jpg');

const Comp: React.SFC = () => {
  return (
    <div>
      <Image src={navalMineLamp1} />
      <Image src={navalMineLamp2} />
      <Image src={navalMineLamp3} />
    </div>
  );
};

const CompResult = {
  names: ['naval mine lamp'],
  component: () => <Comp />,
};

export default CompResult;
