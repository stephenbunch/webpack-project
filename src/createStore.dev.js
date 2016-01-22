import { createStore, compose } from 'redux';
import rootReducer from './state';
import DevTools from './DevTools';
import { persistState } from 'redux-devtools';

const finalCreateStore = compose(
  DevTools.instrument(),
  persistState(getDebugSessionKey())
)(createStore);

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return matches && matches.length > 0 ? matches[1] : null;
}

export default function(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('./state', () => {
      store.replaceReducer(require('./state').default);
    });
  }

  return store;
}
