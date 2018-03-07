import * as React from 'react';
import { Link, LinkProps } from './Link';

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <Link {...props}>Luke</Link>
    </div>
  );
};

const CompResult = {
  names: ['name'],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
