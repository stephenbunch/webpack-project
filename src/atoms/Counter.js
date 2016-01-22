import React, { Component } from 'react'

export default class Counter extends Component {
  static propTypes = {
    count: React.PropTypes.number.isRequired,
    onIncrement: React.PropTypes.func.isRequired,
    onDecrement: React.PropTypes.func.isRequired
  };

  render() {
    let { onIncrement, onDecrement, count } = this.props;
    return (
      <div>
        <button onClick={ onDecrement }>-</button>
        <span>{ count }</span>
        <button onClick={ onIncrement }>+</button>
      </div>
    );
  }
}
