import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <div className={css(styles.paragraph)}>
        <div>
          This site is <Link {...props}>Luke Travis</Link>' search page
        </div>
        <div className={css(styles.aside)}>
          (And he's pretty stoked you're here!)
        </div>
      </div>
      <div>
        Feel free to check out some of my <Link {...props}>projects</Link>, see
        where I'm{' '}
        <Link {...props} term="current work">
          currently working
        </Link>, find out if we have the same{' '}
        <Link {...props}>favorite food</Link>, or search for anything else that
        strikes your fancy
      </div>
    </div>
  );
};

const CompResult = {
  names: ['this site', 'this website'],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
