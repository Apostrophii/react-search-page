import * as React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { styles } from '../styles';
import { Link, LinkProps } from './Link';

// TODO: Update this

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
          style={{ width: '78%' }}
        >
          Python
        </li>
        <li
          className={css(ownStyles.listItem, ownStyles.pink)}
          style={{ width: '73%' }}
        >
          Bash
        </li>
        <li
          className={css(ownStyles.listItem, ownStyles.pink)}
          style={{ width: '68%' }}
        >
          Ruby
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
          style={{ width: '68%' }}
        >
          Electron
        </li>
        <li
          className={css(ownStyles.listItem, ownStyles.green)}
          style={{ width: '66%' }}
        >
          Node
        </li>
        <li
          className={css(ownStyles.listItem, ownStyles.green)}
          style={{ width: '62%' }}
        >
          Rails
        </li>
      </ul>
      <div>Libraries</div>
      <ul className={css(styles.paragraph, ownStyles.list)}>
        <li
          className={css(ownStyles.listItem, ownStyles.blue)}
          style={{ width: '94%' }}
        >
          RxJS
        </li>
        <li
          className={css(ownStyles.listItem, ownStyles.blue)}
          style={{ width: '85%' }}
        >
          Jasmine
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
