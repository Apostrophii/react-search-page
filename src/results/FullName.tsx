import * as React from 'react';
import { Link, LinkProps } from './Link';

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <Link {...props}>Luke George Muller Travis</Link>
    </div>
  );
};

const CompResult = {
  names: ['full name'],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
