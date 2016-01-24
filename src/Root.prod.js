import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';

export default class Root extends Component {
  render() {
    return (
      <Provider store={ this.props.store }>
        <App />
      </Provider>
    );
  }
}
