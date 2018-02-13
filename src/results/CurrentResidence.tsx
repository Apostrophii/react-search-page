import * as React from 'react';

const CurrentResidence: React.SFC = () => {
  return (
    <div>
      Vancouver, WA{' '}
      <a href="https://www.google.com/maps/place/Vancouver,WA">
        &lt;Google Maps&gt;
      </a>
    </div>
  );
};

const CurrentResidenceResult = {
  names: ['current residence'],
  component: () => <CurrentResidence />,
};

export default CurrentResidenceResult;
