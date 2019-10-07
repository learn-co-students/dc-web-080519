//functional component
import React from 'react'

const PaintingCard = ({title, image, artist: {name}, date, dimensions: {width, height}}) => {
  // let {title, image, artist: {name}, date, dimensions: {width, height}} = props
  // console.log(title, image, artist, date, dimensions)
  return (
    <div className="ui card">
      <div>
        <img alt={title} src={image} />
      </div>
      <p>{title} by {name}</p>
      <p>{date}</p>
      <p>{width} in. x {height} in.</p>
    </div>
  )
}

export default PaintingCard
