import React from 'react'

const PaintingsDetails = (props) => {

  return (
    <div className="ui card">
      <div>
        <img alt={"Title"} src={props.painting.image} />
      </div>
      <p>{`${props.painting.title} by ${props.painting.artist.name}`}</p>
    </div>
  )
}

export default PaintingsDetails
