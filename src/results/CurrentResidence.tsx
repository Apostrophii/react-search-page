import * as React from 'react';

const Comp: React.SFC = () => {
  return (
    <div>
      Vancouver, WA{' '}
      <a href="https://www.google.com/maps/place/Vancouver,WA" target="_blank">
        &lt;Google Maps&gt;
      </a>
    </div>
  );
};

const CompResult = {
  names: ['current residence'],
  component: () => <Comp />,
};

export default CompResult;
