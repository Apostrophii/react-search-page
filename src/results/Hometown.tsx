import * as React from 'react';

const Comp: React.SFC = () => {
  return (
    <div>
      Willits, CA{' '}
      <a href="https://www.google.com/maps/place/Willits,CA" target="_blank">
        &lt;Google Maps&gt;
      </a>
    </div>
  );
};

const CompResult = {
  names: ['hometown', 'home town', 'place of origin'],
  component: () => <Comp />,
};

export default CompResult;
