import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <div className={css(styles.paragraph)}>
        Swivel is a remote presence application for distributed teams. It's
        designed to make calls, meetings, pairing, and anything in between
        simple and easy when not everyone's in the same room.
      </div>
      <div className={css(styles.paragraph)}>
        Feel free to give it a go and see what your team's been missing at{' '}
        <a href="swivel.is" target="_blank">
          &lt;Swivel.is&gt;
        </a>
      </div>
    </div>
  );
};

const CompResult = {
  names: ['swivel', 'hubbub'],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
