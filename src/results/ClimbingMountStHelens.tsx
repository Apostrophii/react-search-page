import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';

const Comp: React.SFC<LinkProps> = props => {
  return <div>There should be some pictures here</div>;
};

const CompResult = {
  names: ['climbing mount st helens', 'mount st helens'],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
