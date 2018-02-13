import * as React from 'react';

const Pets: React.SFC = () => {
  return <div>We have two cats in our family: Maya and Vesuvius</div>;
};

const PetsResult = {
  names: ['pets'],
  component: () => <Pets />,
};

export default PetsResult;
