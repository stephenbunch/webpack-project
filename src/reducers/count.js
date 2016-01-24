import {
  DECREMENT_COUNT,
  INCREMENT_COUNT
} from '../actionTypes'

export default function(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return state + 1;
    case DECREMENT_COUNT:
      return state - 1;
    default:
      return state;
  }
}
