import React from 'react'

const StatBox = (props) => {
  console.log(props)
  return(
    <div className="card details">
      <div>
        <div className="row">{props.currentPokemon.name}</div>
        <div className="row">
          <div><img alt="" src={props.currentPokemon.sprites.front_default} /></div>
          {
              props.currentPokemon.stats.map(stat => {
                return <div key={stat.stat.name} className="block">{stat.stat.name}: {stat.base_stat}</div>
              })
          }
        </div>
      </div>
    </div>
  )
}

export default StatBox
