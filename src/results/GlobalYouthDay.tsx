import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Image } from './Image';

// TODO: See if you can find an image

const Comp: React.SFC = () => {
  return (
    <div>
      <div className={css(styles.paragraph, styles.essay)}>
        Global Youth Day is a mobile app comissioned to facilitate its titular
        annual event. While I wasn't involved in its initial creation, I was
        involved migrating the project to native apps and oversaw the
        localization effort.
      </div>
      {/* <Image src="https://lh3.ggpht.com/t5qyauizrq9oUGH_cbVzZlCiKSCnFNLCWIGj90ZOTUg9RAyjLD1U3lz_CXn_jQhinw=h900-rw" /> */}
    </div>
  );
};

const CompResult = {
  names: ['gyd', 'global youth day'],
  component: () => <Comp />,
};

export default CompResult;
