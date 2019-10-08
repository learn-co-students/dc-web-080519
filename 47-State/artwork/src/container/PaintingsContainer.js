import React, {Component} from 'react'
import Painting from '../component/Painting'
import paintings from '../data/paintings'

class PaintingsContainer extends Component{

  getFilteredPaintings(){
    return paintings.filter(painting => painting.title.includes(this.props.searchText))
  }

  render(){
    console.log("PaintingsContainer's props:", this.props)
    return (
      <div>
        {this.getFilteredPaintings().map(painting =>
          <Painting
            changeDisplayedPainting={this.props.changeDisplayedPainting}
            key={painting.id}
            painting={painting}
          />)}
      </div>
    )
  }
}

export default PaintingsContainer
