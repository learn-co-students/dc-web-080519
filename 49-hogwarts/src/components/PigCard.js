import React, {Component, Fragment} from 'react'

class PigCard extends Component {
  state = {
    showDetails: false
  }

  //state changing callback to change showDetails
  onToggleDetails = () => {
    this.setState({showDetails: !this.state.showDetails})
  }

  snakeCase = () => {
    return this.props.hog.name.toLowerCase().split(" ").join("_")
  }

  render(){
    return (
      <div className="ui card" onClick={this.onToggleDetails}>
        {
          this.state.showDetails === false
          ?
            <Fragment>
              <div className="image">
                <img alt={this.props.hog.name} src={require(`../hog-imgs/${this.snakeCase()}.jpg`)} />
              </div>
              <div className="content">
                {this.props.hog.name}
              </div>
            </Fragment>
          :
            <div className="content">
              <h3>Weight: {this.props.hog.weight}</h3>
              <h3>Specialty: {this.props.hog.specialty}</h3>
              <h3>Greased: {`${this.props.hog.greased}`}</h3>
            </div>
        }
      </div>
    )
  }
}

export default PigCard
