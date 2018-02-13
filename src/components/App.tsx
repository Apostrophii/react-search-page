import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import SearchField from '../containers/SearchField';
import SearchResults from '../containers/SearchResults';

const App: React.SFC = () => {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.column)}>
        <BrowserRouter>
          <Route path="/" component={SearchField} />
        </BrowserRouter>
        <SearchResults />
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
    maxWidth: '500px',
  },
});
