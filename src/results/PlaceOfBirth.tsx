import * as React from 'react';

const PlaceOfBirth: React.SFC = () => {
  return (
    <div>
      Berkeley, CA{' '}
      <a href="https://www.google.com/maps/place/Berkeley,CA">
        &lt;Google Maps&gt;
      </a>
    </div>
  );
};

const PlaceOfBirthResult = {
  names: ['place of birth', 'birthplace'],
  component: () => <PlaceOfBirth />,
};

export default PlaceOfBirthResult;
