import { createSelector } from 'reselect'

export default function(selectors) {
  return createSelector(
    (state) => state,
    (state) => {
    return Object.keys(selectors).reduce((props, key) => {
      props[key] = selectors[key](state);
      return props;
    }, {});
  });
}
