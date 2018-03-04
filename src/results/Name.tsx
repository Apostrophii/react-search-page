import * as React from 'react';

const Comp: React.SFC = () => {
  return <div>Luke</div>;
};

const CompResult = {
  names: ['name'],
  component: () => <Comp />,
};

export default CompResult;
