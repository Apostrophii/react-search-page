import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';

// TODO: Add more spacing

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <div className={css(styles.largeParagraph)}>
        <div className={css(styles.halfParagraph)}>Professional projects</div>
        <div className={css(styles.halfParagraph)}>
          <b>
            <Link {...props}>Hubbub</Link>
          </b>{' '}
          &ndash; Remote presence
        </div>
        <div className={css(styles.halfParagraph)}>
          <b>
            <Link {...props}>Adventist Giving</Link>
          </b>{' '}
          &ndash; Donation platform
        </div>
        <div className={css(styles.halfParagraph)}>
          <b>
            <Link {...props}>Global Youth Day</Link>
          </b>{' '}
          &ndash; Media sharing
        </div>
        <div className={css(styles.halfParagraph)}>
          <b>
            <Link {...props}>AWR Stats</Link>
          </b>{' '}
          &ndash; Stats page
        </div>
      </div>
      <div className={css(styles.largeParagraph)}>
        <div className={css(styles.halfParagraph)}>Personal projects</div>
        <div className={css(styles.halfParagraph)}>
          <b>
            <Link {...props}>Search site</Link>
          </b>
        </div>
        {/* <div className={css(styles.paragraph, styles.essay)}>
          This very site you’re on! */}
        {/* I figure there’s no better way to learn something than by giving it a
          spin so I created this site as a way for me to become experienced with
          React/Redux and add another tool to my box. All in all I’d say it’s
          going pretty smoothly. Redux has certainly taken some time to wrap my
          mind around but I’m loving how much structure and orderliness it’s
          imposed. */}
        {/* </div> */}
        <div className={css(styles.halfParagraph)}>
          <b>
            <Link {...props}>Universe ring</Link>
          </b>
        </div>
        {/* <div className={css(styles.paragraph, styles.essay)}>
          A ring with a bit more dimensionality to it
        </div> */}
        <div className={css(styles.halfParagraph)}>
          <b>
            <Link {...props}>Naval mine lamp</Link>
          </b>
        </div>
        {/* <div className={css(styles.paragraph, styles.essay)}>
          Turning a naval mine into a lamp (pretty self explanatory haha)
        </div> */}
        <div className={css(styles.halfParagraph)}>
          <b>
            <Link {...props}>Stereoscopic visualizer</Link>
          </b>
        </div>
        {/* <div className={css(styles.paragraph, styles.essay)}>
          Creating a stereoscopic illusion of 3d
        </div> */}
      </div>
    </div>
  );
};

const CompResult = {
  names: ['projects', 'portfolio'],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
