import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';
import { Image } from './Image';

const museumLukeJpg = require('../images/museum-luke.jpg');

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <div className={css(styles.paragraph)}>
        I'm a developer and designer who lives in the Portland area and enjoys a
        good hike.
      </div>
      <div className={css(styles.paragraph)}>
        Things I've been up to lately:
        <ul>
          <li>
            Fixing bugs in <Link {...props}>Swivel</Link>
          </li>
          <li>
            Reading{' '}
            <i>
              <Link {...props}>The Lemon Tree</Link>
            </i>
          </li>
          <li>
            Playing{' '}
            <i>
              <Link {...props} term="europa universalis 4">
                Europa Universalis
              </Link>
            </i>
          </li>
          <li>
            <Link {...props} term="climbing mount st helens">
              Climbing Mount St. Helens
            </Link>
          </li>
        </ul>
      </div>
      <Image src={museumLukeJpg} />
    </div>
  );
};

const CompResult = {
  names: ['luke', 'luke travis', 'luke george muller travis', 'this guy'],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
