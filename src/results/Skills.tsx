import * as React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';

// TODO: MongoDB,

const Comp: React.SFC<LinkProps> = props => {
  return (
    <div>
      <div>Languages</div>
      <ul className={css(styles.paragraph, ownStyles.list)}>
        <li
          className={css(ownStyles.listItem, ownStyles.pink)}
          style={{ width: '100%' }}
        >
          JavaScript
        </li>
        <li
          className={css(ownStyles.listItem, ownStyles.pink)}
          style={{ width: '100%' }}
        >
          TypesScript
        </li>
        <li
          className={css(ownStyles.listItem, ownStyles.pink)}
          style={{ width: '81%' }}
        >
          Python
        </li>
        <li
          className={css(ownStyles.listItem, ownStyles.pink)}
          style={{ width: '74%' }}
        >
          Bash
        </li>
        <li
          className={css(ownStyles.listItem, ownStyles.pink)}
          style={{ width: '69%' }}
        >
          Ruby
        </li>
        <li
          className={css(ownStyles.listItem, ownStyles.pink)}
          style={{ width: '42%' }}
        >
          Swift
        </li>
        <li
          className={css(ownStyles.listItem, ownStyles.pink)}
          style={{ width: '23%' }}
        >
          Io
        </li>
      </ul>
      <div>Frameworks</div>
      <ul className={css(styles.paragraph, ownStyles.list)}>
        <li
          className={css(ownStyles.listItem, ownStyles.green)}
          style={{ width: '100%' }}
        >
          Angular 2
        </li>
        <li
          className={css(ownStyles.listItem, ownStyles.green)}
          style={{ width: '89%' }}
        >
          NW.js
        </li>
        <li
          className={css(ownStyles.listItem, ownStyles.green)}
          style={{ width: '72%' }}
        >
          React
        </li>
        <li
          className={css(ownStyles.listItem, ownStyles.green)}
          style={{ width: '69%' }}
        >
          Node.js
        </li>
        <li
          className={css(ownStyles.listItem, ownStyles.green)}
          style={{ width: '65%' }}
        >
          Electron
        </li>
        <li
          className={css(ownStyles.listItem, ownStyles.green)}
          style={{ width: '61%' }}
        >
          Rails
        </li>
      </ul>
      <div>Libraries / Technologies</div>
      <ul className={css(styles.paragraph, ownStyles.list)}>
        <li
          className={css(ownStyles.listItem, ownStyles.blue)}
          style={{ width: '100%' }}
        >
          Jasmine
        </li>
        <li
          className={css(ownStyles.listItem, ownStyles.blue)}
          style={{ width: '98%' }}
        >
          RxJS
        </li>
        <li
          className={css(ownStyles.listItem, ownStyles.blue)}
          style={{ width: '85%' }}
        >
          MongoDB
        </li>
        <li
          className={css(ownStyles.listItem, ownStyles.blue)}
          style={{ width: '83%' }}
        >
          WebRTC
        </li>
        <li
          className={css(ownStyles.listItem, ownStyles.blue)}
          style={{ width: '62%' }}
        >
          Redux
        </li>
      </ul>
      <div>Tools</div>
      <ul className={css(styles.paragraph, ownStyles.list)}>
        <li
          className={css(ownStyles.listItem, ownStyles.pink)}
          style={{ width: '100%' }}
        >
          Git
        </li>
        <li
          className={css(ownStyles.listItem, ownStyles.pink)}
          style={{ width: '83%' }}
        >
          Webpack
        </li>
      </ul>
    </div>
  );
};

const ownStyles = StyleSheet.create({
  list: {
    paddingLeft: 0,
  },
  listItem: {
    color: 'white',
    display: 'block',
    boxSizing: 'border-box',
    margin: '4px 0',
    padding: '2px 8px',
    borderRadius: '8px',
  },
  pink: {
    background: '#FF006E',
  },
  green: {
    background: '#AED100',
  },
  blue: {
    background: '#0BEFBE',
  },
});

const CompResult = {
  names: ['skills', 'expertise'],
  component: (props: LinkProps) => <Comp {...props} />,
};

export default CompResult;
