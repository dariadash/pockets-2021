import React from 'react';
import { Provider } from 'react-redux';

import { store } from './model';
import { Router } from './router';
import './styles/index.scss';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
