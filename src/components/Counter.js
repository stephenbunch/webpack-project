import React from 'react'
import { connect } from 'react-redux'
import select from '../select'
import action from '../action'
import incrementCounter from '../actions/incrementCounter'
import decrementCounter from '../actions/decrementCounter'

let Counter = (props) => {
  let { incrementCounter, decrementCounter, binaryCount } = props;
  return (
    <div>
      <button onClick={ decrementCounter }>-</button>
      <span>{ binaryCount }</span>
      <button onClick={ incrementCounter }>+</button>
    </div>
  );
};

export default connect(
  select({
    binaryCount: (state) => state.count.toString(2)
  }),
  action({
    incrementCounter,
    decrementCounter
  })
)(Counter)
