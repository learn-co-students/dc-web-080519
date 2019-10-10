import React from 'react'
import PigCard from './PigCard'

const PigPen = (props) => {
  return (
    <div className="ui cards">
      {props.hogs.map( hogObject => <PigCard key={hogObject.name} hog={hogObject}/>)}
    </div>
  )
}

export default PigPen
