import React from 'react'
import '../App.css'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    this.setState({ filters: { type: event.target.value } })
  }

  onFindPetsClick = () => {
    let url = '/api/pets'
    let type = this.state.filters.type
    url += (type !== "all" ? `?type=${type}` : '')
    
    fetch(url)
    .then(r => r.json())
    .then(petsData => {
      this.setState({ pets: petsData })
    })
  }

  onAdoptPet = (id) => {
    let newPets = this.state.pets.map(pet => {
      return (pet.id === id ? {...pet, isAdopted: true} : pet)
    })

    this.setState({ pets: newPets })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1
            className="ui dividing header"
            id="page-header"
          >React Animal Shelter</h1>
        </header>
        <div id="main-div" className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
