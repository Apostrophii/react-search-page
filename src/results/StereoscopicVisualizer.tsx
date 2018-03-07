import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Image } from './Image';

const stereoscopicVisualizerPng = require('../images/stereoscopic-visualizer.png');

const Comp: React.SFC = () => {
  return (
    <div>
      <Image src={stereoscopicVisualizerPng} />
    </div>
  );
};

const CompResult = {
  names: ['stereoscopic visualizer'],
  component: () => <Comp />,
};

export default CompResult;
