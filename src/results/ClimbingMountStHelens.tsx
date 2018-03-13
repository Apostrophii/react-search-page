import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';
import { Image } from './Image';

const stHelensCoupleImage = require('../images/st-helens-couple.1000x563.png');
const stHelensCoupleBase64 = require('../base64-images/st-helens-couple.ts')
  .default;
const stHelensflagImage = require('../images/st-helens-flag.563x1000.png');
const stHelensflagBase64 = require('../base64-images/st-helens-flag.ts')
  .default;
const stHelensHikeImage = require('../images/st-helens-hike.1000x750.png');
const stHelensHikeBase64 = require('../base64-images/st-helens-hike.ts')
  .default;
const stHelensLarissaImage = require('../images/st-helens-larissa.1000x750.png');
const stHelensLarissaBase64 = require('../base64-images/st-helens-larissa.ts')
  .default;
const stHelensSideImage = require('../images/st-helens-side.1000x563.png');
const stHelensSideBase64 = require('../base64-images/st-helens-side.ts')
  .default;

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <Image
        src={stHelensHikeImage}
        base64={stHelensHikeBase64}
        width={1000}
        height={563}
        tag="The ash was rather tricky to hike up since it kept sliding down"
      />
      <Image
        src={stHelensflagImage}
        base64={stHelensflagBase64}
        width={563}
        height={1000}
        tag="A weather station near the summit"
      />
      <Image
        src={stHelensLarissaImage}
        base64={stHelensLarissaBase64}
        width={1000}
        height={750}
        tag="A great view of Mount Hood from up here!"
      />
      <Image
        src={stHelensSideImage}
        base64={stHelensSideBase64}
        width={1000}
        height={563}
        tag="Apparently this is one of the world's newest glaciers, it's been forming ever since the 1980 eruption"
      />
      <Image
        src={stHelensCoupleImage}
        base64={stHelensCoupleBase64}
        width={1000}
        height={750}
        tag="All in all, we had a great climb : )"
      />
    </div>
  );
};

const CompResult = {
  names: ['climbing mount st helens', 'mount st helens'],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
