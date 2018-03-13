import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <div className={css(styles.paragraph)}>
        I'm currently a developer and designer at K3{' '}
        <a href="https://k3.is" target="_blank">
          &lt;K3's site&gt;
        </a>
      </div>
      <div className={css(styles.paragraph)}>
        We started out as a contract company but, seeing a need that no one had
        yet tackled, we've also been developing{' '}
        <Link {...props} term="swivel">
          a solution for distributed teams
        </Link>{' '}
        to work together naturally in an online environment.
      </div>
      <div className={css(styles.paragraph)}>
        What I love most about K3 is my coworkers. We have a great team here
        (shout out to my boss, James Pellow, for tracking down such tallent) who
        love what they do and are always interested in finding something new.
        I've learned a lot from these guys.
      </div>
    </div>
  );
};

const CompResult = {
  names: [
    'job',
    'employment',
    'livelihood',
    'current employment',
    'current job',
    'current work',
    'place of work',
    'k3',
  ],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
