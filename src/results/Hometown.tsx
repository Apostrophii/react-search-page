import * as React from 'react';

const Hometown: React.SFC = () => {
  return (
    <div>
      Willits, CA{' '}
      <a href="https://www.google.com/maps/place/Willits,CA">
        &lt;Google Maps&gt;
      </a>
    </div>
  );
};

const HometownResult = {
  names: ['hometown', 'home town', 'place of origin'],
  component: () => <Hometown />,
};

export default HometownResult;
