import React from "react";
import {connect} from 'react-redux'

//need to read from the store
//needs to write to the store
const Searchbar = props => {
  console.log("Searchbar props: ", props)
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
  //props: ()=>{dispatch()}
  return {
    onChange: (searchText)=>{ dispatch( {type: "CHANGE_SEARCH", payload: searchText} ) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
