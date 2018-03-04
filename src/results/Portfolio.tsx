import * as React from 'react';

const Comp: React.SFC = () => {
  return <div>Portfolio stuff...</div>;
};

const CompResult = {
  names: ['portfolio', 'things worked on'],
  component: () => <Comp />,
};

export default CompResult;
