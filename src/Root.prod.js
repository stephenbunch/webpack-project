import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './views/App';

export default class Root extends Component {
  render() {
    return (
      <Provider store={ this.props.store }>
        <App />
      </Provider>
    );
  }
}
