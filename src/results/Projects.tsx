import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <div className={css(styles.paragraph)}>Professional projects</div>
      <div>
        <b>
          <Link {...props}>Hubbub</Link>
        </b>{' '}
        (developed for K3)
      </div>
      <div className={css(styles.paragraph, styles.essay)}>
        A remote presence solution for distributed teams with audio/visual
        components and both web app and native implementations
      </div>
      <div>
        <b>
          <Link {...props}>Adventist Giving</Link>
        </b>{' '}
        (developed for the NAD Conference)
      </div>
      <div className={css(styles.paragraph, styles.essay)}>
        An online donation platform for the Adventist church
      </div>
      <div>
        <b>
          <Link {...props}>Global Youth Day</Link>
        </b>{' '}
        (developed of the NAD Conference)
      </div>
      <div className={css(styles.paragraph, styles.essay)}>
        A mobile app designed to help facilitate sharing of media during a
        worldwide effort
      </div>
      <div>
        <b>
          <Link {...props}>AWR Stats</Link>
        </b>{' '}
        (developed for Adventist World Radio)
      </div>
      <div className={css(styles.paragraph, styles.essay)}>
        The AWR Stats page is the data visualization site for Adventist World
        Radio
      </div>
      <div className={css(styles.paragraph)}>Personal projects</div>
      <div>
        <b>
          <Link {...props}>Search site</Link>
        </b>
      </div>
      <div className={css(styles.paragraph, styles.essay)}>
        This very site you're on!
        {/* I figure there's no better way to learn something than by giving it a
        spin so I created this site as a way for me to become experienced with
        React/Redux and add another tool to my box. All in all I'd say it's
        going pretty smoothly. Redux has certainly taken some time to wrap my
        mind around but I'm loving how much structure and orderliness it's
        imposed. */}
      </div>
      <div>
        <b>
          <Link {...props}>Universe ring</Link>
        </b>
      </div>
      <div className={css(styles.paragraph, styles.essay)}>
        A ring with a bit more dimentionality to it
      </div>
      <div>
        <b>
          <Link {...props}>Naval mine lamp</Link>
        </b>
      </div>
      <div className={css(styles.paragraph, styles.essay)}>
        Turning a naval mine into a lamp (pretty self explanatory haha)
      </div>
      <div>
        <b>
          <Link {...props}>Stereoscopic visualizer</Link>
        </b>
      </div>
      <div className={css(styles.paragraph, styles.essay)}>
        Creating a stereoscopic illusion of 3d
      </div>
    </div>
  );
};

const CompResult = {
  names: ['projects', 'portfolio'],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
