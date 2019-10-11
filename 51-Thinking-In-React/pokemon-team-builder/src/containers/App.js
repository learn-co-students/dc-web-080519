import React from 'react';
import '../App.css';
import Pokedex from './Pokedex'

function App() {
  return (
    <div className="App">
      <img alt="Pokemon" width="200" src="https://d33wubrfki0l68.cloudfront.net/42936b3e4d03c9b7c5927e3752a36cef7ff8bdf0/53627/images/pokemon.png"/>
      <Pokedex />
    </div>
  );
}

export default App;
