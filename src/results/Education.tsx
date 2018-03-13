import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';
import { Image } from './Image';

const kcpImage = require('../images/kcp.500x323.jpg');
const kcpBase64 = require('../base64-images/kcp.ts').default;
const wwuImage = require('../images/wwu.800x346.png');
const wwuBase64 = require('../base64-images/wwu.ts').default;
const mbaImage = require('../images/mba.1336x458.jpg');
const mbaBase64 = require('../base64-images/mba.ts').default;

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <div className={css(styles.paragraph)}>
        My most recent stint of schoolastic endevors was in{' '}
        <Link {...props}>Japan</Link>, studing Japanese for half a year at a
        language school (KPC International) in Shinjuku, Tokyo.
      </div>
      <Image
        src={kcpImage}
        base64={kcpBase64}
        width={500}
        height={323}
        tag="Image courtasy of gooverseas.com, I didn't think to take a picture of the school front while I was there : ("
      />
      <div className={css(styles.paragraph)}>
        For the 3 years before that I was studying Computer Science and earning
        my bachelor's at Walla Walla University.
      </div>
      <Image
        src={wwuImage}
        base64={wwuBase64}
        width={800}
        height={346}
        tag="Image courtasy of wallawalla.edu"
      />
      <div className={css(styles.paragraph)}>
        Go back even further and you'll find me at Monteray Bay Academy, a
        school right on the beach of central California.
      </div>
      <Image
        src={mbaImage}
        base64={mbaBase64}
        width={1336}
        height={458}
        tag="Image courtasy of montereybayacademy.org"
      />
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
