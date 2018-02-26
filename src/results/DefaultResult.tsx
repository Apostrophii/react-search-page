import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { LinkProps } from './resultsList';
import { Link } from './Link';

const DefaultResult: React.SFC<LinkProps> = props => {
  return (
    <div className={css(styles.defaultResult)}>
      <div className={css(styles.loud)}>Hi there!</div>
      <div>
        <Link {...props} term="this site">
          What is this site?
        </Link>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  loud: {
    fontSize: '50px',
    fontWeight: 'bold',
    marginBottom: '24px',
  },
  defaultResult: {
    textAlign: 'center',
  },
});

const DefaultResultResult = {
  names: [''],
  component: (props: LinkProps) => <DefaultResult {...props} />,
};

export default DefaultResultResult;
