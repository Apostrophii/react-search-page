import * as React from 'react';

const Job: React.SFC = () => {
  return (
    <div>
      Developer and designer at K3 <a href="https://k3.is">&lt;K3's site&gt;</a>
    </div>
  );
};

const JobResult = {
  names: [
    'job',
    'employment',
    'livelihood',
    'current employment',
    'place of work',
  ],
  component: () => <Job />,
};

export default JobResult;
