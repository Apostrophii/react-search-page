import * as React from 'react';

const Comp: React.SFC = () => {
  return (
    <div>
      Sorry, can't just be giving this out to <i>anyone</i> on the internet haha
    </div>
  );
};

const CompResult = {
  names: [
    'ssn',
    'social security number',
    'phone number',
    'cell number',
    'home phone',
    'address',
    'current address',
    'credit card',
    'bank account',
  ],
  component: () => <Comp />,
};

export default CompResult;
