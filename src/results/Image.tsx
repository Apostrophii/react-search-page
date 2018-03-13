import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
const ProgressiveBgImage = require('react-progressive-bg-image').default;

export const Image: React.SFC<{
  src: string;
  base64: string;
  width: number;
  height: number;
  tag?: string;
}> = props => {
  return (
    <div className={css(styles.imageGroup, styles.paragraph)}>
      <div className={css(styles.imageContainer)}>
        <ProgressiveBgImage
          src={props.src}
          placeholder={props.base64}
          style={{
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width: '100%', // TODO: Check vertical images & small images
            height: '0',
            paddingTop: `${props.height / props.width * 100}%`,
          }}
        />
      </div>
      {props.tag && <div className={css(styles.imageTag)}>{props.tag}</div>}
    </div>
  );
};
