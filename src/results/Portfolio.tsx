import * as React from 'react';

const Portfolio: React.SFC = () => {
  return <div>Portfolio stuff...</div>;
};

const PortfolioResult = {
  names: ['portfolio', 'things worked on'],
  component: () => <Portfolio />,
};

export default PortfolioResult;
