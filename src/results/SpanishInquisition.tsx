import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';
import { Image } from './Image';

const spanishInquisitionImage = require('../images/spanish-inquisition.460x316.jpg');
const spanishInquisitionBase64 = require('../base64-images/spanish-inquisition.ts')
  .default;

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <Image
        src={spanishInquisitionImage}
        base64={spanishInquisitionBase64}
        width={260}
        height={316}
        tag="Nobody expects the spanish inquisition!"
      />
    </div>
  );
};

const CompResult = {
  names: ['404', 'spanish inquisition'],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
