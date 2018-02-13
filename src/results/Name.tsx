import * as React from 'react';

const Name: React.SFC = () => {
  return <div>Luke</div>;
};

const NameResult = {
  names: ['name'],
  component: () => <Name />,
};

export default NameResult;
