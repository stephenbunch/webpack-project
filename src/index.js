import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import createStore from './createStore';

const store = createStore();

ReactDOM.render(<Root store={ store } />, document.getElementById('root'));
