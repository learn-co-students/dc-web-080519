import React, {PureComponent} from 'react'

class Task extends PureComponent {
  constructor(props){
    super(props)//how to initialize state based on initial props
    console.warn(`Inside Task ${props.task.id} constructor`)
    this.state = { //initialize state based of props
      color: "black"
    }
  }

  changeColor = () => {
    switch (this.state.color) {
      case "black":
        this.setState({color: "red"})
        break;
      default:
        this.setState({color: "black"})
    }
  }

  sayHello(){console.log("HIIIII")}

  componentDidMount(){
    console.warn(`Inside Task ${this.props.task.id} componentDidMount`)
    window.addEventListener("resize", this.sayHello)
  }

  componentDidUpdate(){
    console.warn(`Inside Task ${this.props.task.id} componentDidUpdate`)
  }

  componentWillUnmount(){
    console.warn(`Inside Task ${this.props.task.id} componentWillUnmount`)
    window.removeEventListener("resize", this.sayHello)
  }

  render(){
    console.warn(`Inside Task ${this.props.task.id} render`)
    return(
      <div>
        <b
          onClick={this.changeColor}
          style={{color: this.state.color}}
        >
          {this.props.task.text}
        </b>
        <button onClick={() => this.props.onDeleteTask(this.props.task.id)}>x</button>
      </div>
    )
  }
}

export default Task
