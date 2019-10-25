import React from "react";
import {connect} from 'react-redux'
import {onChange} from '../redux/action'

const Searchbar = props => {
  return (
  <div className="ui container">
    <div className="ui very large fluid input">
      <input
        type="text"
        placeholder="Search"
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
      />
    </div>
    <div className="ui clearing section divider" />
  </div>
)}

//onChange={e => props.onChange(e.target.value)}
//onChange={e => props.dispatch({type: "CHANGE_SEARCH", payload: e.target.value})}

const mapStateToProps = (state) => {
  return {
    //props: state.??
    value: state.searchText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (searchText)=>{ dispatch( onChange(searchText) ) }
  }
}

export default connect(mapStateToProps, {onChange})(Searchbar);
