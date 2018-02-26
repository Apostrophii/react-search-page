import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { styles } from '../styles';
import { LinkProps } from './resultsList';

export const Link: React.SFC<LinkProps & { term?: string }> = props => {
  return (
    <span
      onClick={() =>
        props.link(props.term || (props.children as string).toLowerCase())
      }
      className={css(styles.link)}
    >
      {props.children}
    </span>
  );
};
