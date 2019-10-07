//class component
import React from 'react'
import PaintingCard from './PaintingCard'
import paintingsData from './data/paintings'

class PaintingsList extends React.Component {
  render(){
    console.log(paintingsData)
    return (
      <div>
        {
          //Goal: create an array of <PaintingCard /> components
          paintingsData.map(painting => <PaintingCard
            {...painting}
            key={painting.id}

          />)
        }
      </div>
    )
  }
}

export default PaintingsList
