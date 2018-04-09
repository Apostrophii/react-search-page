import * as React from 'react';

const Comp: React.SFC = () => {
  return (
    <div>
      You can reach me at{' '}
      <a href="mailto:luke@luketravis.io">luke@luketravis.io</a>
    </div>
  );
};

const CompResult = {
  names: ['contact', 'email'],
  component: () => <Comp />,
};

export default CompResult;
