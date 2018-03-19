import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';
import { Image } from './Image';

const classroomImage = require('../images/classroom.1000x563.png');
const classroomBase64 = require('../base64-images/classroom.ts').default;
const tokyoSprawlImage = require('../images/tokyo-sprawl.1000x563.png');
const tokyoSprawlBase64 = require('../base64-images/tokyo-sprawl.ts').default;
const alleyImage = require('../images/alley.563x1000.png');
const alleyBase64 = require('../base64-images/alley.ts').default;
const shibuyaImage = require('../images/shibuya.1000x563.png');
const shibuyaBase64 = require('../base64-images/shibuya.ts').default;
const imohoriImage = require('../images/imohori.1000x563.png');
const imohoriBase64 = require('../base64-images/imohori.ts').default;
const climbingFujiImage = require('../images/climbing-fuji.1000x563.png');
const climbingFujiBase64 = require('../base64-images/climbing-fuji.ts').default;
const fixingArchImage = require('../images/fixing-arch.1000x563.png');
const fixingArchBase64 = require('../base64-images/fixing-arch.ts').default;
const fujiSummitShadowImage = require('../images/fuji-summit-shadow.1000x563.png');
const fujiSummitShadowBase64 = require('../base64-images/fuji-summit-shadow.ts')
  .default;
const giantBuddhaImage = require('../images/giant-buddha.1000x563.png');
const giantBuddhaBase64 = require('../base64-images/giant-buddha.ts').default;
const ginkakujiImage = require('../images/ginkakuji.1000x563.png');
const ginkakujiBase64 = require('../base64-images/ginkakuji.ts').default;
const manyDeerImage = require('../images/many-deer.1000x563.png');
const manyDeerBase64 = require('../base64-images/many-deer.ts').default;
const kiyomizuderaImage = require('../images/kiyomizudera.1000x563.png');
const kiyomizuderaBase64 = require('../base64-images/kiyomizudera.ts').default;

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <div className={css(styles.paragraph, styles.essay)}>
        Ever since I started teaching myself Japanese I’d wanted to someday
        travel to Japan for a chance to immersively learn and practice the
        language. I finally got my chance to go as I was wrapping up my last
        year of college.
      </div>
      <Image
        src={classroomImage}
        base64={classroomBase64}
        width={1000}
        height={563}
        tag="One of the classrooms where I studied"
      />
      <Image
        src={classroomImage}
        base64={classroomBase64}
        width={1000}
        height={563}
        tag="One of the classrooms where I studied"
      />
      <Image
        src={tokyoSprawlImage}
        base64={tokyoSprawlBase64}
        width={1000}
        height={563}
        tag="Sprawling, endless Tokyo"
      />
      <div className={css(styles.paragraph, styles.essay)}>
        It was a fantastic experience. I cannot recommend enough how much you
        can learn about a culture by living in it for more than just a week or
        two of vacation. Little things like grabbing onigiri at the combini
        right as it goes on sale can be as enjoyable as stumbling upon a shrine
        in the back alleys of a new neighborhood.
      </div>
      <Image
        src={alleyImage}
        base64={alleyBase64}
        width={563}
        height={1000}
        tag="An alley near my school known for its hole-in-the-walls (and for good reason!)"
      />
      <div className={css(styles.paragraph, styles.essay)}>
        Especially in a city like Tokyo, which seems to go on and on past the
        horizon, there’s always something new to see, somewhere new to go. You
        definitely don’t get bored. Getting sick of seeing so many people is
        certainly a thing though. I’d never appreciated before how much privacy
        living in America affords just by virtue of being to (comparatively)
        sparsely populated.
      </div>
      <Image
        src={shibuyaImage}
        base64={shibuyaBase64}
        width={1000}
        height={563}
        tag="The famed Shibuya crossing"
      />
      <div className={css(styles.paragraph, styles.essay)}>
        My favorite part of the experience was the second half of my stay when I
        had the opportunity to live with a host family in Tokorozawa, Saitama.
        They were a lovely couple with grandkids and took excellent care of me,
        going out of their way to give me experiences like imohori (a fall
        tradition of digging for sweet potatoes, kind of like picking pumpkins
        here in the US) and traveling outside the sprawling Tokyo metro to see
        relatives in one of the mountain villages. Living with them was quite
        good for my education too because they spoke almost no English, giving
        me much practice honing my Japanese.
      </div>
      <Image
        src={imohoriImage}
        base64={imohoriBase64}
        width={1000}
        height={563}
        tag="That’s my host dad (grandpa) in the red plaid"
      />
      <div className={css(styles.paragraph, styles.essay)}>
        I also got to do some traveling during the few breaks and holidays the
        school had. On one of them Larissa (not yet my wife) flew out and we had
        a great time climbing Mt Fuji through the night to see the sunrise
        (which was amazing to see when you’re standing on an island in the
        clouds) and taking the shinkansen (bullet train) down to Nara, one of
        the old capitals of Japan (where they have sacred dear who can, and
        will, wander around anywhere). My mom came out to see me (and an old
        friend of hers) as well and we went down to see all of the temples and
        shrines in Kyoto which was beautiful.
      </div>
      <Image
        src={climbingFujiImage}
        base64={climbingFujiBase64}
        width={1000}
        height={563}
        tag="We’ve almost reached the summit just as the sky is starting to lighten"
      />
      <Image
        src={fujiSummitShadowImage}
        base64={fujiSummitShadowBase64}
        width={1000}
        height={563}
        tag="The sea of clouds"
      />
      <Image
        src={manyDeerImage}
        base64={manyDeerBase64}
        width={1000}
        height={563}
        tag="Nara deer! They love being fed crackers (and there are signs warning of how enthusiastically they’ll try to get them from you)"
      />
      <Image
        src={ginkakujiImage}
        base64={ginkakujiBase64}
        width={1000}
        height={563}
        tag="Ginkakuji, the golden temple"
      />
      <Image
        src={kiyomizuderaImage}
        base64={kiyomizuderaBase64}
        width={1000}
        height={563}
        tag="I love how this temple seems to be resting on the trees"
      />
      <Image
        src={giantBuddhaImage}
        base64={giantBuddhaBase64}
        width={1000}
        height={563}
        tag="I’ve probably seen enough buddhas to last a lifetime by now"
      />
      <Image
        src={fixingArchImage}
        base64={fixingArchBase64}
        width={1000}
        height={563}
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
