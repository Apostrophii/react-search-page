import * as React from 'react';

const DateOfBirth: React.SFC = () => {
  return <div>1994.04.22</div>;
};

const DateOfBirthResult = {
  names: ['date of birth', 'birthday'],
  component: () => <DateOfBirth />,
};

export default DateOfBirthResult;
