import * as React from 'react';

const EyeColor: React.SFC = () => {
  return <div>Blue</div>;
};

const EyeColorResult = {
  names: ['eye color'],
  component: () => <EyeColor />,
};

export default EyeColorResult;
