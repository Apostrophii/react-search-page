import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
// tslint:disable-next-line: import-name
import ProgressiveImage from 'react-progressive-image';

export const Image: React.SFC<{
  src: string;
  placeholder?: string;
  tag?: string;
  vertical?: boolean;
}> = props => {
  return (
    <div className={css(styles.imageGroup, styles.paragraph)}>
      <div className={css(styles.imageContainer)}>
        <ProgressiveImage
          src={props.src}
          placeholder={props.placeholder || props.src}
        >
          {(src: string, loading: boolean) => (
            <img
              className={css(
                !props.vertical && styles.horizontalImage,
                props.vertical && styles.verticalImage,
                loading && styles.placeholderImage,
              )}
              src={src}
            />
          )}
        </ProgressiveImage>
      </div>
      {props.tag && <div className={css(styles.imageTag)}>{props.tag}</div>}
    </div>
  );
};
