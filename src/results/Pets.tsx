import * as React from 'react';

const Comp: React.SFC = () => {
  return <div>We have two cats in our family: Maya and Vesuvius</div>;
};

const CompResult = {
  names: ['pets', 'cats'],
  component: () => <Comp />,
};

export default CompResult;
