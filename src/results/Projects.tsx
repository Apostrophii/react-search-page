import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';

const Comp: React.SFC<LinkProps> = props => {
  return <div>Put some project stuff here...</div>;
};

const CompResult = {
  names: ['projects'],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
