import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { History } from 'history';
import SearchField from '../containers/SearchField';
import SearchResults from '../containers/SearchResults';
import Footer from '../containers/Footer';

interface OwnProps {
  history: History;
}

const App: React.SFC<OwnProps> = props => {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.column)}>
        <div>
          <SearchField {...props} />
          <SearchResults {...props} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: '40px 0',
    justifyContent: 'center',
    backgroundColor: '#eff1f0',
    minHeight: 'calc(100vh - 80px)',
  },
  column: {
    display: 'grid',
    gridTemplateRows: '1fr auto',
    width: '90vw',
    maxWidth: '550px',
  },
});
