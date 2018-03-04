import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link, LinkProps } from './Link';

const Comp: React.SFC<LinkProps> = props => {
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

const CompResult = {
  names: [''],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
