import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER
} from '../actionTypes'

export default function(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
