import React, { PureComponent } from 'react';
import Router from './src/router';

import { Provider } from 'react-redux';

import { configureStore } from './src/store';
const store = configureStore();

export default class Driver extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}