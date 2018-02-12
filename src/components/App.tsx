import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchField from '../containers/SearchField';

const App: React.SFC = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={SearchField} />
      </BrowserRouter>
    </div>
  );
};

export default App;
