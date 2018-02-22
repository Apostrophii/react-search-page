import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Resume: React.SFC = () => {
  return (
    <ul>
      <li className={css(styles.bulletPoint)}>
        <div className={css(styles.bold)}>LUKE TRAVIS</div>
        (code + design)
      </li>
      <li className={css(styles.bulletPoint, styles.marginTop)}>
        <div className={css(styles.bold)}>EXPERIENCED</div>
        with JS, Typescript, Angular 2, React, Node, Python, Git, Bash, and
        others
      </li>
      <li className={css(styles.bulletPoint, styles.marginTop)}>
        <div className={css(styles.bold)}>WORKING</div>
        currently at K3 (a web app development firm) for +2 years and has been
        working in tech related positions for 6 years
      </li>
      <li className={css(styles.bulletPoint, styles.marginTop)}>
        <div className={css(styles.bold)}>GRADUATED</div>
        with a BS in Computer Science from Walla Walla Univeristy
      </li>
      <li className={css(styles.bulletPoint, styles.marginTop)}>
        <div className={css(styles.bold)}>PORTFOLIO</div>
        at luketravis.io/portfolio
      </li>
      <li className={css(styles.bulletPoint, styles.marginTop)}>
        <div className={css(styles.bold)}>CONTACT</div>
        at me@luketravis.io
      </li>
    </ul>
  );
};

const styles = StyleSheet.create({
  bulletPoint: {
    fontWeight: 300,
  },
  marginTop: {
    marginTop: '30px',
  },
  bold: {
    display: 'inline',
    marginRight: '5px',
    fontWeight: 600,
  },
});

const ResumeResult = {
  names: ['resume'],
  component: () => <Resume />,
};

export default ResumeResult;
