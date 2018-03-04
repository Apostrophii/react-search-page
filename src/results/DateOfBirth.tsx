import * as React from 'react';

const Comp: React.SFC = () => {
  return <div>April 22, 1994</div>;
};

const CompResult = {
  names: ['date of birth', 'birthday'],
  component: () => <Comp />,
};

export default CompResult;
