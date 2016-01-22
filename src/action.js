export default function(actions) {
  return function(dispatch) {
    return Object.keys(actions).reduce((props, key) => {
      props[key] = (...args) => dispatch(actions[key].apply(undefined, args));
      return props;
    }, {});
  };
}
