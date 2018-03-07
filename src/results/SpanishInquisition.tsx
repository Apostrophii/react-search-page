import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';
import { Image } from './Image';

const spanishInquisitionJpg = require('../images/spanish-inquisition.jpg');

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <Image
        src={spanishInquisitionJpg}
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
