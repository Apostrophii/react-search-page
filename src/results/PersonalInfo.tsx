import * as React from 'react';

const PersonalInfo: React.SFC = () => {
  return <div>Sorry, don't have one :P</div>;
};

const PersonalInfoResult = {
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
  component: () => <PersonalInfo />,
};

export default PersonalInfoResult;
