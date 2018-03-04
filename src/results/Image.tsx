import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';

export const Image: React.SFC<{
  src: string;
  tag?: string;
}> = props => {
  return (
    <div className={css(styles.image, styles.paragraph)}>
      <img className={css(styles.fullWidthMax)} src={props.src} />
      {props.tag && <div className={css(styles.imageTag)}>{props.tag}</div>}
    </div>
  );
};
