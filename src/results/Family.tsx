import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <div className={css(styles.paragraph)}>
        Our family consists of just my wife, Larissa, and I (for now)
      </div>
      <div className={css(styles.paragraph)}>
        (Oh, and we have some <Link {...props}>pets</Link> too)
      </div>
    </div>
  );
};

const CompResult = {
  names: ['family'],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
