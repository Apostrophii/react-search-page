import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';
import { Image } from './Image';

const stHelensCoupleJpg = require('../images/st-helens-couple.jpg');
const stHelensflagJpg = require('../images/st-helens-flag.jpg');
const stHelensHikeJpg = require('../images/st-helens-hike.jpg');
const stHelensLarissaJpg = require('../images/st-helens-larissa.jpg');
const stHelensSideJpg = require('../images/st-helens-side.jpg');

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <Image
        src={stHelensHikeJpg}
        tag="The ash was rather tricky to hike up since it kept sliding down"
      />
      <Image src={stHelensflagJpg} tag="A weather station near the summit" />
      <Image
        src={stHelensLarissaJpg}
        tag="A great view of Mount Hood from up here!"
      />
      <Image
        src={stHelensSideJpg}
        tag="Apparently this is one of the world's newest glaciers, it's been forming ever since the 1980 eruption"
      />
      <Image
        src={stHelensCoupleJpg}
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
