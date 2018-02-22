import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { initialState } from './state';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers';
import App from './components/App';

declare global {
  interface Window {
    store: any;
  }
}

function configureStore() {
  if (!window.store) {
    window.store = createStore(reducers, initialState);
  } else if (process.env.NODE_ENV === 'development') {
    window.store.replaceReducer(reducers);
  }
  return window.store;
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
