//as a functional component
import React from 'react'

const Header = (props) => {
  // console.log("Header's props:", props)
  return (
    <div className={`ui inverted ${props.newColor} menu navbar`}>
      <a href="/" className="item">
        <h2 className="ui header">
        <i className="paint brush icon"></i>
        <div className="content">{props.title}</div>
        <div className="sub header">{props.catchphrase}</div>
        </h2>
      </a>
    </div>
  )
}

export default Header
