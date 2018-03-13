import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';
import { Image } from './Image';

const theLemonTreeImage = require('../images/the-lemon-tree.265x400.jpg');
const theLemonTreeBase64 = require('../base64-images/the-lemon-tree.ts')
  .default;

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <Image
        src={theLemonTreeImage}
        base64={theLemonTreeBase64}
        width={256}
        height={400}
        vertical={true}
      />
      <div className={css(styles.paragraph, styles.essay)}>
        I came across this book when searching for something to help educate
        myself on Israeli-Palistinian relations and the history behind their
        conflict. I wasn't sure where to start and <i>The Lemon Tree</i> offered
        a narrative intertwining both nation's stories. It turned out to be
        quite a compelling read. I was facinated by how complicated the reality
        in the region really is and by how strongly decisions made in the past
        are reverberating through to the present. The adage "geography is
        destiny" perhaps most succinctly sums up what I learned.
      </div>
      <div className={css(styles.paragraph, styles.essay)}>
        While I certainly still don't feel I know enough about the situation to
        have a strong opinion about the morality of either side, or any inkling
        of what manner of policy could be enacted to quell these tensions, I am
        very much interested in reading further and finding more perspectives on
        the matter. Since <i>The Lemon Tree</i> tried to remain neutral in it's
        recounting I'm hoping to read at least two more books, each biased in
        favor of one of the parties. Hit me up if you have any suggestions or
        recommendations!
      </div>
      <div className={css(styles.paragraph, styles.essay)}>
        Oh, and here's a link to it on{' '}
        <a
          href="https://www.amazon.com/Lemon-Tree-Arab-Heart-Middle/dp/1582343438"
          target="_blank"
        >
          &lt;Amazon&gt;
        </a>{' '}
        if you fancy a read yourself : )
      </div>
    </div>
  );
};

const CompResult = {
  names: ['the lemon tree'],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
