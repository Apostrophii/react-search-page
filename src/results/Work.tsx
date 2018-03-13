import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <div className={css(styles.paragraph)}>
        <div>
          <b>Web App Developer</b>, <Link {...props}>K3</Link> (2016-present)
        </div>
        <div className={css(styles.essay)}>
          At K3 I started out learning and then mastering the Angular 2
          framework, which they had begun using almost as soon as it was
          released (my first K3 project was an Angular 1.5 project). Once we
          decided to build our first in-house product,{' '}
          <Link {...props}>Swivel</Link>, I began making mockups in my spare
          time and as a result was one of the first to be switched over to
          working on it full time. I've since gotten quite a bit of experience
          being on the frontlines of the design process (in addition to
          continuing to code and learning the ins and outs of Electron and Nwjs
          too).
        </div>
      </div>
      <div className={css(styles.paragraph)}>
        <div>
          <b>Head Admin</b>,{' '}
          <Link {...props} term="education">
            WWU
          </Link>{' '}
          CS Lab (2015-2016)
        </div>
        <div className={css(styles.essay)}>
          As head system admin I was largely involved overseeing a transitional
          period where nearly all of the old admins graduated (hence why I
          became the head admin in my 3rd year). This involved the process of
          hiring new admins to fill the voids left and training them into the
          job.
        </div>
      </div>
      <div className={css(styles.paragraph)}>
        <div>
          <b>System Admin</b>,{' '}
          <Link {...props} term="education">
            WWU
          </Link>{' '}
          CS Lab (2013-2015)
        </div>
        <div className={css(styles.essay)}>
          My work as a system admin consisted of mostly scripting work as well
          as learning the lab configuration and how to use Puppet Master to keep
          all of our computers up to date and synced.
        </div>
      </div>
      <div className={css(styles.paragraph)}>
        <div>
          <b>Housekeeping</b>,{' '}
          <Link {...props} term="education">
            WWU
          </Link>{' '}
          (2015)
        </div>
      </div>
      <div className={css(styles.paragraph)}>
        <div>
          <b>Resident Assistant</b>,{' '}
          <Link {...props} term="education">
            MBA
          </Link>{' '}
          (2011-2014)
        </div>
      </div>
      <div className={css(styles.paragraph)}>
        <div>
          <b>Janitor</b>, Rainbow Fin Co. (2013-2014)
        </div>
      </div>
    </div>
  );
};

const CompResult = {
  names: [
    'experience',
    'work experience',
    'previous work experience',
    'work history',
  ],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;

// TODO: Check dates
