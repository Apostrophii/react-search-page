import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Image } from './Image';

const vesuBackpackJpg = require('../images/vesu-backpack.jpg');
const mayaSuitcaseJpg = require('../images/maya-suitcase.jpg');

const Comp: React.SFC = () => {
  return (
    <div>
      <div className={css(styles.paragraph)}>
        We have two cats in our family: Maya and Vesuvius
      </div>
      <Image src={vesuBackpackJpg} />
      <Image src={mayaSuitcaseJpg} />
    </div>
  );
};

const CompResult = {
  names: ['pets', 'cats'],
  component: () => <Comp />,
};

export default CompResult;
