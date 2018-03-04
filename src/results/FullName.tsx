import * as React from 'react';

const Comp: React.SFC = () => {
  return <div>Luke George Muller Travis</div>;
};

const CompResult = {
  names: ['full name'],
  component: () => <Comp />,
};

export default CompResult;
