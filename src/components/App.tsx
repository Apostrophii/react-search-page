import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { History } from 'history';
import SearchField from '../containers/SearchField';
import SearchResults from '../containers/SearchResults';

interface OwnProps {
  history: History;
}

const App: React.SFC<OwnProps> = props => {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.column)}>
        <SearchField {...props} />
        <SearchResults {...props} />
      </div>
    </div>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: '40px 0',
    justifyContent: 'center',
  },
  column: {
    width: '90vw',
    maxWidth: '550px',
  },
});
