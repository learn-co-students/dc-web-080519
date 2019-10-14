import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, handleMoreButton, handleEatSushi, eatenSushi}) => {

  console.log(sushis);

  return (
    <Fragment>
      <div className="belt">
        {
          sushis.map(sushiObj => <Sushi sushi={sushiObj} handleEatSushi={handleEatSushi} sushiIsEaten={eatenSushi.includes(sushiObj)}/>)
        }
        <MoreButton handleMoreButton={handleMoreButton} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
