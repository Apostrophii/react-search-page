import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <div className={css(styles.paragraph, styles.essay)}>
        Don’t let the name fool you, <i>Europa</i> is a game about much more
        than just Europe. EU4 attempts to be a simulation of the political,
        economic, religious, and military forces that shaped the entire world
        between 1444 and 1821. From the sengoku jidai (warring states era) in
        Japan to the wave of colonization in Africa, this game covers a lot. For
        a history lover like me it’s fantastic to see so many world shaping
        events happening concurrently and adds a very global perspective to the
        historical narrative (something I’ve realized can easily be lost since
        most resources of historical education tend to focus on one region or
        people group at a time).
      </div>
      <div className={css(styles.paragraph, styles.essay)}>
        And it’s undoubtedly fun to try bringing the Byzantine Empire back from
        the ashes of a sacked Constantinople. Here it is on{' '}
        <a
          href="http://store.steampowered.com/app/236850/Europa_Universalis_IV/"
          target="_blank"
        >
          &lt;Steam&gt;
        </a>{' '}
        if I’ve interested you enough to give it a go. Be forewarned however! It
        has a pretty steep learning curve; I had to watch a few hours of videos
        before I felt comfortable enough to get far on my own.
      </div>
    </div>
  );
};

const CompResult = {
  names: [
    'europa universalis',
    'europa universalis 4',
    'europa universalis iv',
  ],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
