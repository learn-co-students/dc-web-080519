import React, {Component} from 'react'
import {connect} from 'react-redux'

//Aside: Higher Order Components
class Header extends Component {
  renderDescription = () => {
    const remainder = this.props.counter % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.props.counter + upToNext}`;
  };

  render() {
    return (
      <header className="App-header">
        <h1 className="App-title" style={{color: `${this.props.color}`}}>Welcome to React</h1>
        <h3>{this.renderDescription()}</h3>
        <h4>{this.props.jiggypuff}</h4>
      </header>
    );
  }
}

const mapStateToProps = (state) => { //helper function that maps the state in the store to some props this componet gets
  return {
    //prop : state that lives in the store
    counter: state.count,
    jiggypuff: state.name
  }
}

export default connect(mapStateToProps)(Header)

// let withCountAndName = connect(mapStateToProps)
// let BetterHeader = withCountAndName(Header)
// export default BetterHeader

//let withCount = (SomeComponent) => EnchancedComponentWithTheCountPropInjectedIn
//We don't have to create it
//connect is a function that when invoked, will return withCount

// let withCount = (SomeComponent) => {
//   class EnhancedComponent extends React.Component {
//     render(){
//       return <SomeComponent {...this.props} count={store.getState().count}/>
//     }
//   }
//   return EnhancedComponent
// }

//create a function (HOC) that takes in a component and returns a 'blue' version of that component
// let withBlue = (SomeComponent) => {
//   class EnhancedComponent extends React.Component {
//     render(){
//       return <SomeComponent {...this.props} color="blue"/>
//     }
//   }
//   return EnhancedComponent
// }
// let BlueHeader = withBlue(Header)
