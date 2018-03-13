import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Image } from './Image';

const vesuBackpackImage = require('../images/vesu-backpack.1000x750.png');
const vesuBackpackBase64 = require('../base64-images/vesu-backpack.ts').default;
const mayaSuitcaseImage = require('../images/maya-suitcase.1000x750.png');
const mayaSuitcaseBase64 = require('../base64-images/maya-suitcase.ts').default;

const Comp: React.SFC = () => {
  return (
    <div>
      <div className={css(styles.paragraph)}>
        We have two cats in our family: Maya and Vesuvius
      </div>
      <Image
        src={vesuBackpackImage}
        base64={vesuBackpackBase64}
        width={1000}
        height={750}
      />
      <Image
        src={mayaSuitcaseImage}
        base64={mayaSuitcaseBase64}
        width={1000}
        height={750}
      />
    </div>
  );
};

const CompResult = {
  names: ['pets', 'cats'],
  component: () => <Comp />,
};

export default CompResult;
