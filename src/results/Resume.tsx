import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Resume: React.SFC = () => {
  return (
    <div>
      <div className={css(styles.bulletPoint)}>
        <div className={css(styles.bold)}>AM</div>
        Luke Travis
      </div>
      <div className={css(styles.bulletPoint, styles.marginTop)}>
        <div className={css(styles.bold)}>WORKED</div>
        most recently at K3 (a web app development firm) for +2 years and has
        been working in tech related positions for 6 years
      </div>
      <div className={css(styles.bulletPoint, styles.marginTop)}>
        <div className={css(styles.bold)}>GRADUATED</div>
        with a BS in Computer Science from Walla Walla Univeristy
      </div>
      <div className={css(styles.bulletPoint, styles.marginTop)}>
        <div className={css(styles.bold)}>EXPERIENCED</div>
        with JS, Typescript, Angular 2, React, Node, Git, Bash, and others
      </div>
      <div className={css(styles.bulletPoint, styles.marginTop)}>
        <div className={css(styles.bold)}>PORTFOLIO</div>
        at luketravis.io/portfolio
      </div>
      <div className={css(styles.bulletPoint, styles.marginTop)}>
        <div className={css(styles.bold)}>CONTACT</div>
        at me@luketravis.io
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  bulletPoint: {
    fontWeight: 300,
  },
  marginTop: {
    marginTop: '20px',
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
