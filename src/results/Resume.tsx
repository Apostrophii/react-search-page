import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';

const Comp: React.SFC<LinkProps> = props => {
  return (
    <ul>
      <li className={css(styles.bulletPoint, styles.paragraph)}>
        <div className={css(styles.bold)}>
          <Link {...props}>LUKE TRAVIS</Link>
        </div>
        (code + design)
      </li>
      <li className={css(styles.bulletPoint, styles.paragraph)}>
        <div className={css(styles.bold)}>
          <Link {...props} term="expertise">
            EXPERIENCED
          </Link>
        </div>
        with JS, Typescript, Angular 2, React, Node, Python, Git, Bash, and
        others
      </li>
      <li className={css(styles.bulletPoint, styles.paragraph)}>
        <div className={css(styles.bold)}>
          <Link {...props} term="work history">
            WORKING
          </Link>
        </div>
        currently at <Link {...props}>K3</Link> (a web app development firm) for
        +2 years and has been working in tech related positions for 6 years
      </li>
      <li className={css(styles.bulletPoint, styles.paragraph)}>
        <div className={css(styles.bold)}>
          <Link {...props} term="education">
            GRADUATED
          </Link>
        </div>
        with a BS in Computer Science from Walla Walla Univeristy
      </li>
      <li className={css(styles.bulletPoint, styles.paragraph)}>
        <div className={css(styles.bold)}>
          <Link {...props}>PORTFOLIO</Link>
        </div>
        at luketravis.io/portfolio
      </li>
      <li className={css(styles.bulletPoint, styles.paragraph)}>
        <div className={css(styles.bold)}>CONTACT</div>
        at me@luketravis.io
      </li>
    </ul>
  );
};

const CompResult = {
  names: ['resume'],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
