import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';
import { Image } from './Image';

const classroomJpg = require('../images/classroom.jpg');
const tokyoSprawlJpg = require('../images/tokyo-sprawl.jpg');
const alleyJpg = require('../images/alley.jpg');
const shibuyaJpg = require('../images/shibuya.jpg');
const imohoriJpg = require('../images/imohori.jpg');
const climbingFujiJpg = require('../images/climbing-fuji.jpg');
const fixingArchJpg = require('../images/fixing-arch.jpg');
const fujiSummitShadow = require('../images/fuji-summit-shadow.jpg');
const giantBuddhaJpg = require('../images/giant-buddha.jpg');
const ginkakujiJpg = require('../images/ginkakuji.jpg');
const manyDeerJpg = require('../images/many-deer.jpg');
const kiyomizuderaJpg = require('../images/kiyomizudera.jpg');

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <div className={css(styles.paragraph)}>
        Ever since I started teaching myself Japanese I'd wanted to someday
        travel to Japan for a chance to immersively learn and practice the
        language. I finally got my chance to go as I was wrapping up my last
        year of college.
      </div>
      <Image src={classroomJpg} tag="One of the classrooms where I studied" />
      <Image src={tokyoSprawlJpg} tag="Sprawling, endless Tokyo" />
      <div className={css(styles.paragraph)}>
        It was a fantastic experience. I cannot recommend enough how much you
        can learn about a culture by living in it for more than just a week or
        two of vacation. Little things like grabbing onigiri at the combini
        right as it goes on sale can be as enjoyable as stubling upon a shrine
        in the back alleys of a new neighborhood.
      </div>
      <Image
        src={alleyJpg}
        tag="An alley near my school known for its hole-in-the-walls (and for good reason!)"
      />
      <div className={css(styles.paragraph)}>
        Especially in a city like Tokyo, which seems to go on and on past the
        horizon, there's always something new to see, somewhere new to go. You
        definitely don't get bored. Getting sick of seeing so many people is
        certainly a thing though. I'd never appreciated before how much privacy
        living in America affords just by virtue of being to (comparatively)
        sparsely populated.
      </div>
      <Image src={shibuyaJpg} tag="The famed Shibuya crossing" />
      <div className={css(styles.paragraph)}>
        My favorite part of the experience was the second half of my stay when I
        had the opportunity to live with a host family in Tokorozawa, Saitama.
        They were a lovely couple with grandkids and took excelent care of me,
        going out of their way to give me experiences like imohori (a fall
        tradition of digging for sweet potatoes, kind of like picking pumpkins
        here in the US) and traveling outside the sprawling Tokyo metro to see
        relatives in one of the mountain villages. Living with them was quite
        good for my education too because they spoke almost no English, giving
        me much practice honing my Japanese.
      </div>
      <Image
        src={imohoriJpg}
        tag="That's my host dad (grandpa) in the red plaid"
      />
      <div className={css(styles.paragraph)}>
        I also got to do some traveling during the few breaks and holidays the
        school had. On one of them Larissa (not yet my wife) flew out and we had
        a great time climbing Mt Fuji through the night to see the sunrise
        (which was amazing to see when you're standing on an island in the
        clouds) and taking the shinkansen (bullet train) down to Nara, one of
        the old capitals of Japan (where they have sacred dear who can, and
        will, wander around anywhere). My mom came out to see me (and an old
        friend of her's) aswell and we went down to see all of the temples and
        shrines in Kyoto which was beautiful.
      </div>
      <Image
        src={climbingFujiJpg}
        tag="We've almost reached the summit just as the sky is starting to lighten"
      />
      <Image src={fujiSummitShadow} tag="The sea of clouds" />
      <Image
        src={manyDeerJpg}
        tag="Nara deer! They love being fed crackers (and there are signs warning of how enthusiastically they'll try to get them from you)"
      />
      <Image src={ginkakujiJpg} tag="Ginkakuji, the golden temple" />
      <Image
        src={kiyomizuderaJpg}
        tag="I love how this temple seems to be resting on the trees"
      />
      <Image
        src={giantBuddhaJpg}
        tag="I've probably seen enough buddhas to last a lifetime by now"
      />
      <Image
        src={fixingArchJpg}
        tag="Looks like arches are still being added even today"
      />
    </div>
  );
};

const CompResult = {
  names: ['japan', 'tokyo'],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
