import React from 'react';
import './App.css';
import Header from './Header'
import PaintingsList from './PaintingsList'

const headerData = {
  color: "green",
  title: "Branch Dressing"
}

//is a functional component
function App() {
  //all sorts of JS here
  return (
    <div className="App">
      <Header
        newColor={headerData.color}
        title={headerData.title}
        catchphrase="Boom shakalaka"
      />
      <PaintingsList />
    </div>
  );
}

export default App;
