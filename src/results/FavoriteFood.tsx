import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';
import { Image } from './Image';

const okonomiyakiJpg = require('../images/okonomiyaki.jpg');

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <div className={css(styles.paragraph)}>Okonomiyaki!</div>
      <Image
        src={okonomiyakiJpg}
        tag="Image courtesy of ohtakemama of tabelog.com"
      />
      <div className={css(styles.paragraph)}>
        Sometimes described as a japanese pizza, okonomiyaki is a delicious,
        savory street food that's like a fried crepe topped with egg, cabbage,
        noodles, meat (for those so inclined), sauce, and Japanese mayo. Some
        resturaunts are even set up for you to be able to fry it yourself at
        your table which is pretty fun. Sadly though, it's pretty hard to come
        by here in the States.
      </div>
    </div>
  );
};

const CompResult = {
  names: ['favorite food', 'okonomiyaki'],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
