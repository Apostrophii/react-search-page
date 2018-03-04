import * as React from 'react';

const Comp: React.SFC = () => {
  return (
    <div>
      Berkeley, CA{' '}
      <a href="https://www.google.com/maps/place/Berkeley,CA" target="_blank">
        &lt;Google Maps&gt;
      </a>
    </div>
  );
};

const CompResult = {
  names: ['place of birth', 'birthplace'],
  component: () => <Comp />,
};

export default CompResult;
