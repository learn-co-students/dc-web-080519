import React, {Component} from 'react'
import {connect} from 'react-redux'

class Counter extends Component {
  increment = (num) => {
    this.props.dispatch({type: "ADD", payload: num})
  };

  decrement = (num) => {
    this.props.dispatch({type: "SUBTRACT", payload: num})
  };

  render() {
    console.log("Counter's props: ", this.props)
    return (
      <div className="Counter">
        <h1>{this.props.counter}</h1>
        <button onClick={()=>this.decrement(5)}> -5 </button>
        <button onClick={()=>this.decrement(1)}> - </button>
        <button onClick={()=>this.increment(1)}> + </button>
        <button onClick={()=>this.increment(3)}> +3 </button>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    counter: state.count
  }
}

export default connect(mapStateToProps)(Counter)
