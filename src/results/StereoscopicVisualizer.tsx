import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Image } from './Image';

const stereoscopicVisualizerImage = require('../images/stereoscopic-visualizer.1236x734.png');
const stereoscopicVisualizerBase64 = require('../base64-images/stereoscopic-visualizer.ts')
  .default;

const Comp: React.SFC = () => {
  return (
    <div>
      <Image
        src={stereoscopicVisualizerImage}
        base64={stereoscopicVisualizerBase64}
        width={1236}
        height={734}
      />
    </div>
  );
};

const CompResult = {
  names: ['stereoscopic visualizer'],
  component: () => <Comp />,
};

export default CompResult;
