import React, { Component } from 'react'
import { connect } from 'react-redux'
import Counter from '../atoms/Counter'
import incrementCount from '../actions/incrementCount'
import decrementCount from '../actions/decrementCount'

let selector = (state) => {
  return {
    count: state.count
  };
};

class App extends Component {
  render() {
    let { count, dispatch } = this.props;
    return (
      <Counter
        count={ count }
        onIncrement={ () => dispatch(incrementCount()) }
        onDecrement={ () => dispatch(decrementCount()) } />
    );
  }
}

export default connect(selector)(App)
