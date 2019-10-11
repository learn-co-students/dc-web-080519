import React from 'react'

const Searchbar = (props) => {
  return (
    <input onChange={props.onSearch} className="search"/>
  )
}

export default Searchbar
