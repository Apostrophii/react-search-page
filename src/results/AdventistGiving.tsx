import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Image } from './Image';

const adventistGivingSplashPng = require('../images/adventist-giving-splash.png');
const adventistGivingEnvelopePng = require('../images/adventist-giving-envelope.png');

const Comp: React.SFC = () => {
  return (
    <div>
      <div className={css(styles.paragraph, styles.essay)}>
        Adventist Giving is an online donation platform for the North America
        Division of the Seventh-day Adventist Church.
      </div>
      <Image src={adventistGivingSplashPng} />
      <div className={css(styles.paragraph, styles.essay)}>
        I was involved throughout the duration of the project, both front end
        and back end, from sorting out the specs with the client to seeing it to
        completion. My main challenge was masting Angular 2 and writing tests
        for it. As this project was heavily involved with money, making sure it
        was as error-free was crucial.
      </div>
      <Image src={adventistGivingEnvelopePng} />
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
