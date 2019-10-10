import React from 'react'

class Filter extends React.Component{
  constructor(){
    super()
  }

  render(){
    return (
      <form className="ui form">
        <div className="field">
          <label>Sort By:</label>
          {/*<select onChange={this.props.changeSort}>
            <option value="OG">Original Order</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>*/}
          <label>
            <input onClick={this.props.changeSort}
              type="radio"
              name="react-tips"
              value="OG"
              className="form-check-input"
            />Original
          </label>
          <label>
          <input onClick={this.props.changeSort}
            type="radio"
            name="react-tips"
            value="name"
            className="form-check-input"
          />Name
          </label>
          <label>
            <input onClick={this.props.changeSort}
              type="radio"
              name="react-tips"
              value="weight"
              className="form-check-input"
            />Weight
          </label>
        </div>
        <div className="field">
          <div className="ui checkbox">
            <input type="checkbox" onChange={this.props.toggleShowGreased}/>
            <label>Show Greased Pigs</label>
          </div>
        </div>
      </form>
    )
  }
}

export default Filter
