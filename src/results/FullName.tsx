import * as React from 'react';

const FullName: React.SFC = () => {
  return <div>Luke George Muller Travis</div>;
};

const FullNameResult = {
  names: ['full name'],
  component: () => <FullName />,
};

export default FullNameResult;
