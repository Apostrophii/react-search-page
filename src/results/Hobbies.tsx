import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <div>A few things I enjoy doing in my spare time:</div>
      <ul>
        <li>Biking</li>
        <li>Swimming</li>
        <li>Hiking</li>
        <li>Playing badminton</li>
        <li>Board games</li>
        <li>Video games</li>
        <li>Reading</li>
        <li>Studying Japanese</li>
      </ul>
    </div>
  );
};

const CompResult = {
  names: ['hobbies', 'interests'],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
