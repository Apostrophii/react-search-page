import * as React from 'react';
import { Link, LinkProps } from './Link';

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      Contact info for references can be provided upon request, just let me know
      what you need.
    </div>
  );
};

const CompResult = {
  names: ['references'],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
