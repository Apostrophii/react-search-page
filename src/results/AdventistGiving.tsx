import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Image } from './Image';

const adventistGivingSplashImage = require('../images/adventist-giving-splash.1000x509.png');
const adventistGivingSplashBase64 = require('../base64-images/adventist-giving-splash.ts')
  .default;
const adventistGivingEnvelopeImage = require('../images/adventist-giving-envelope.1060x1612.png');
const adventistGivingEnvelopeBase64 = require('../base64-images/adventist-giving-envelope.ts')
  .default;

const Comp: React.SFC = () => {
  return (
    <div>
      <div className={css(styles.paragraph, styles.essay)}>
        Adventist Giving is an online donation platform for the North American
        Division of the Seventh-day Adventist Church.
      </div>
      <Image
        src={adventistGivingSplashImage}
        base64={adventistGivingSplashBase64}
        width={1000}
        height={509}
      />
      <div className={css(styles.paragraph, styles.essay)}>
        I was involved throughout the duration of the project, both front end
        and back end, from sorting out the specs with the client to seeing it to
        completion. My main challenge was mastering Angular 2 and writing tests
        for it. As this project was heavily involved with money, making sure it
        was as error-free was crucial.
      </div>
      <Image
        src={adventistGivingEnvelopeImage}
        base64={adventistGivingEnvelopeBase64}
        width={1060}
        height={1612}
      />
      <div className={css(styles.paragraph, styles.essay)}>
        Other skills I improved while working on Adventist Giving was
        prototyping with clients and creating Rails apps.
      </div>
    </div>
  );
};

const CompResult = {
  names: ['adventist giving'],
  component: () => <Comp />,
};

export default CompResult;
