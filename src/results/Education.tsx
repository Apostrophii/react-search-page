import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';
import { Image } from './Image';

const kcpJpg = require('../images/kcp.jpg');
const wwuPng = require('../images/wwu.png');
const mbaJpg = require('../images/mba.jpg');

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <div className={css(styles.paragraph)}>
        My most recent stint of schoolastic endevors was in{' '}
        <Link {...props}>Japan</Link>, studing Japanese for half a year at a
        language school (KPC International) in Shinjuku, Tokyo.
      </div>
      <Image
        src={kcpJpg}
        tag="Image courtasy of gooverseas.com, I didn't think to take a picture of the school front while I was there : ("
      />
      <div className={css(styles.paragraph)}>
        For the 3 years before that I was studying Computer Science and earning
        my bachelor's at Walla Walla University.
      </div>
      <Image src={wwuPng} tag="Image courtasy of wallawalla.edu" />
      <div className={css(styles.paragraph)}>
        Go back even further and you'll find me at Monteray Bay Academy, a
        school right on the beach of central California.
      </div>
      <Image src={mbaJpg} tag="Image courtasy of montereybayacademy.org" />
      <div className={css(styles.paragraph)}>
        And I suppose for completeness I should include that I went to grade
        school in Cali too.
      </div>
    </div>
  );
};

const CompResult = {
  names: ['education', 'schooling', 'schoolastic endevors'],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
