import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  console.log(props.sushis);

  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushiObj => <Sushi sushi={sushiObj} handleEatSushi={props.handleEatSushi} sushiIsEaten={props.eatenSushi.includes(sushiObj)}/>)
        }
        <MoreButton handleMoreButton={props.handleMoreButton} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
