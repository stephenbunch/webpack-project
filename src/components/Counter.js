import React from 'react'
import { connect } from 'react-redux'
import select from '../select'
import action from '../action'
import incrementCount from '../actions/incrementCount'
import decrementCount from '../actions/decrementCount'

let Counter = (props) => {
  let { incrementCount, decrementCount, count } = props;
  return (
    <div>
      <button onClick={ decrementCount }>-</button>
      <span>{ count }</span>
      <button onClick={ incrementCount }>+</button>
    </div>
  );
};

export default connect(
  select({
    count: (state) => state.count
  }),
  action({
    incrementCount,
    decrementCount
  })
)(Counter)
