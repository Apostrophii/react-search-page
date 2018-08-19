import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';

const Comp: React.SFC<LinkProps> = props => {
  return (
    <ul className={css(styles.discList)}>
      <li className={css(styles.bulletPoint, styles.paragraph)}>
        <div className={css(styles.bold)}>
          <Link {...props}>LUKE TRAVIS</Link>
        </div>
        [code + design]
      </li>
      <li className={css(styles.bulletPoint, styles.paragraph)}>
        <div className={css(styles.bold)}>
          <Link {...props} term="expertise">
            EXPERIENCED
          </Link>
        </div>{' '}
        with:
        <ul className={css(styles.discList, styles.sublist)}>
          <li>(strongly) Angular 2, Node.js, NW.js</li>
          <li>(knowledgeably) React/Redux, Rails, Python, Webpack</li>
        </ul>
      </li>
      <li className={css(styles.bulletPoint, styles.paragraph)}>
        <div className={css(styles.bold)}>
          <Link {...props} term="work history">
            WORKING
          </Link>
        </div>
        currently at <Link {...props}>K3</Link> (a web app consultant) for 2.5
        years, and have been writing code professionally for the last 6 years.
        Highlights include:
        <ul className={css(styles.discList, styles.sublist)}>
          <li>Developed WebRTC based remote presence software</li>
          <li>Wrote auto-updater library for NW.js applications</li>
          <li>Headed system administration for a department</li>
          <li>
            Implemented donations platform supporting several payment gateway
            APIs
          </li>
        </ul>
      </li>
      <li className={css(styles.bulletPoint, styles.paragraph)}>
        <div className={css(styles.bold)}>
          <Link {...props} term="education">
            GRADUATED
          </Link>
        </div>
        with a BS in Computer Science from Walla Walla University
      </li>
      <li className={css(styles.bulletPoint, styles.paragraph)}>
        <div className={css(styles.bold)}>
          <Link {...props}>PORTFOLIO</Link>
        </div>
        at luketravis.io/portfolio
      </li>
      <li className={css(styles.bulletPoint, styles.paragraph)}>
        <div className={css(styles.bold)}>CONTACT</div>
        me at <a href="mailto:luke@luketravis.io">luke@luketravis.io</a>
      </li>
    </ul>
  );
};

const CompResult = {
  names: ['resume'],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
