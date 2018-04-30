import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { styles as appStyles } from '../styles';
import { UpdateSearchTermAction } from '../actions';
import { Link } from '../results/Link';

export interface DispatchProps {
  updateSearchTerm: (value: string) => UpdateSearchTermAction;
}

export const QuickLinks: React.SFC<DispatchProps> = props => {
  return (
    <div className={css(styles.flexBox)}>
      <div>
        <div className={css(styles.header)}>Frequently searched</div>
        <div className={css(styles.item)}>
          1. <Link link={props.updateSearchTerm}>Resume</Link>
        </div>
        <div className={css(styles.item)}>
          2. <Link link={props.updateSearchTerm}>Work experience</Link>
        </div>
        <div className={css(styles.item)}>
          3. <Link link={props.updateSearchTerm}>Projects</Link>
        </div>
        <div className={css(styles.item)}>
          4. <Link link={props.updateSearchTerm}>Skills</Link>
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  flexBox: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '80px',
    opacity: 0.8,
  },
  header: {
    marginBottom: '12px',
    fontWeight: 600,
  },
  item: {
    marginBottom: '8px',
  },
});
